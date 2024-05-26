import {Entity, BaseEntity, Index, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, OneToMany, UpdateDateColumn} from 'typeorm'
import {Transaction} from './Transaction'
import {Banker} from './Banker'

@Entity()
export class Client extends BaseEntity{

	@PrimaryGeneratedColumn()
	id:number	

	@Column()
	first_name:string

	@Column()
	last_name:string

	@Column({
		type:"varchar",
		unique:true
	})
	email:string

	@Column({
		unique:true,
		length:10
	})
	card_number:string

	@Column({
		type:"numeric"
	})
	balance:number

	@Column({
		default:true,
		name:'active'
	})
	is_active:boolean

	@Column({
		type:'simple-json',
		nullable:true
	})
	additional_info:{
		age:number
		hair_color:string
	}

	@Column({
		type:"simple-array",
		default:[]
	})
	family_members:string[]

	@OneToMany(
		() => Transaction,
		transaction => transaction.client
	)
	transaction:Transaction[]

	@ManyToMany(
		() => Banker
	)
	bankers:Banker[]

	@CreateDateColumn()
	created_at:Date

	@UpdateDateColumn()
	updated_at:Date

}



