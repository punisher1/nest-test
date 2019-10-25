import { Injectable, Logger } from '@nestjs/common'

export interface User {
  id: number,
  account: string,
  password: string
}

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  private readonly users: User[]

  constructor() {
    this.users = [
      { id: 1, account: 'iori', password: '1234' },
      { id: 2, account: 'mzf', password: '1111' },
      { id: 3, account: 'mzh', password: '1212' },
      { id: 4, account: 'myx', password: '1122' },
    ]
  }

  async findOne(account: string): Promise<User | undefined> {
    this.logger.debug(account)
    return this.users.find(user => user.account === account)
  }
}
