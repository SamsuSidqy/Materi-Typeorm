import express from 'express'
import {Client} from '../entities/Client'
import {Banker} from '../entities/Banker'
const router = express.Router()


router.post('/api/v1/client/:clientId/banker/:bankerId',async(req,res) => {
	const {clientId, bankerId} = req.params
	const client = await Client.findOne({where:{id:parseInt(clientId)}})
	const banker = await Banker.findOne({where:{id:parseInt(bankerId)}})

	if(!client || !banker){
		return res.json({
			msg:"Failed Connected, Banker or Client Not Exists"
		})
	}

	banker.clients = [client]

	await banker.save()

	return res.json({
		msg:"Connected Successfully"
	})

})



export {
	router as banktoclientRouter
}