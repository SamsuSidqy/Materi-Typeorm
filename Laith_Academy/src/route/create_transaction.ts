import express from 'express'
import {Transaction, TransactionType} from '../entities/Transaction'
import {Client} from '../entities/Client'

const router = express.Router()


router.post('/api/v1/:clientId/transaction',async(req,res) => {
	const {
		type,
		amount
	} = req.body

	const {clientId} = req.params

	const getClient = await Client.findOne({where:{id:parseInt(clientId)}})

	if(!getClient){
		return res.json({
			msg:"Client Not Found"
		})
	}


	const createTransaction = Transaction.create({
		type,
		amount,
		client:getClient
	})
	await createTransaction.save()

	if(type === TransactionType.DEPOSIT){
		getClient.balance = getClient.balance + amount
	}else if(type === TransactionType.WITHDRAW){
		getClient.balance = getClient.balance - amount
	}

	await getClient.save()

	return res.json({msg:"Transaction Successfully"})
})



export {
	router as transactionRouter
}