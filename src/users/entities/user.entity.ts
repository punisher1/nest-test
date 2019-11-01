import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
  @Column()
  gender: number
  @Column()
  account: string
  @Column({ select: false })
  passsword: string
  @Column()
  email: string
  @Column()
  mobile: string
  @Column()
  is_enabled: boolean
  @Column()
  created_at: Date
  @Column()
  updated_at: Date
  @Column()
  last_login_at: Date
  @Column()
  last_login_failure_at: Date
}
