
// Create Connection
import {createConnection,DataSource } from'typeorm'
import {Client} from './entities/Client'
import {Banker} from './entities/Banker'
import {Transaction} from './entities/Transaction'

// Express
import express from 'express'

// Router
import {clientRouter} from './route/create_client'
import {bankerRouter} from './route/create_banker'
import {transactionRouter} from './route/create_transaction'
import {banktoclientRouter} from './route/connect_bank_to_client'

const app = express()

const main = async() => {
	try{
		await createConnection({
			type:'postgres',
			host:'127.0.0.1',
			port:5432,
			username:'postgres',
			password:'samsu',
			database:'typeorm',
			entities:[Client,Banker,Transaction],
			synchronize:true

		})
		console.log('Connection DB Successfullyy')
		app.use(express.json())
		app.use(clientRouter)
		app.use(bankerRouter)
		app.use(transactionRouter)
		app.use(banktoclientRouter)
		app.listen(8000,() => {
			console.log("Listen Port 8000")
		})
	}catch(error){
		console.error(`Errors => ${error}`)
		throw new Error("Failed To Connection DB")
	}
}


main()
console.log('Hello World')
