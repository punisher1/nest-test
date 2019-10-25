import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersSerivce: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(account: string, pass: string): Promise<any> {
    const user = await this.usersSerivce.findOne(account)
    if (user && user.password === pass) {
      const { password, ...rseult } = user
      return rseult
    }

    return null
  }

  async login(user: any) {
    const payload = { account: user.account, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
