
import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common'
import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name)
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(account: string, password: string): Promise<any> {
    this.logger.debug(`params is ${account},${password}`)
    const user = await this.authService.validateUser(account, password)
    if (!user) {
      throw new UnauthorizedException('local 认证没有通过')
    }
    return user
  }
}
