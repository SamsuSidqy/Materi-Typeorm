import {Entity, BaseEntity, Index, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, JoinTable, UpdateDateColumn} from 'typeorm'
import {Client} from './Client'
@Entity()
export class Banker extends BaseEntity{

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
		default:true,
		name:'active'
	})
	is_active:boolean

	@Column({
		type:"varchar",
		unique:true,
		length:10,
	})
	employe_number:string

	@ManyToMany(
		() => Client
	)
	@JoinTable({
		name:"bankers_client",
		joinColumn:{
			name:"banker_id",
			referencedColumnName:'id'
		},
		inverseJoinColumn:{
			name:"client",
			referencedColumnName:"id"
		}
	})
	clients:Client[]

	@CreateDateColumn()
	created_at:Date

	@UpdateDateColumn()
	updated_at:Date

}



