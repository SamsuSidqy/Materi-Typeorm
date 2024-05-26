import express from 'express'
import {Client} from '../entities/Client'

const router = express.Router()


router.post('/api/v1/client',async(req,res) => {
	const {
		first_name,
		last_name,
		email,
		card_number,
		balance
	} = req.body

	const CreateClient = Client.create({
		first_name,
		last_name,
		email,
		card_number,
		balance
	})

	await CreateClient.save()
	return res.json(CreateClient)
})



export {
	router as clientRouter
}