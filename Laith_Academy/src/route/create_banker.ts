import express from 'express'
import {Banker} from '../entities/Banker'

const router = express.Router()


router.post('/api/v1/banker',async(req,res) => {
	const {
		first_name,
		last_name,
		email,
		card_number,
		employe_number
	} = req.body

	const CreateBanker = Banker.create({
		first_name,
		last_name,
		email,
		card_number,
		employe_number
	})

	await CreateBanker.save()
	return res.json(CreateBanker)
})



export {
	router as bankerRouter
}