import {Entity, BaseEntity, Index, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import {Client} from './Client'
export enum TransactionType{
	DEPOSIT = 'deposit',
	WITHDRAW = 'withdraw'
}

@Entity()
export class Transaction extends BaseEntity{
	@PrimaryGeneratedColumn()
	id:number

	@Column({
		type:"enum",
		enum:TransactionType
	})
	type:string

	@Column({
		type:"numeric"
	})
	amount:number

	@ManyToOne(
		() => Client,
		client => client.transaction
	)
	@JoinColumn({
		name:'client_id'
	})
	client:Client
}