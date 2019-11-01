import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  private readonly users: any[]

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    this.users = [
      { id: 1, account: 'iori', password: '1234' },
      { id: 2, account: 'mzf', password: '1111' },
      { id: 3, account: 'mzh', password: '1212' },
      { id: 4, account: 'myx', password: '1122' },
    ]
  }

  async findOne(account: string): Promise<any | undefined> {
    this.logger.debug(account)
    return this.users.find(user => user.account === account)
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }
}
