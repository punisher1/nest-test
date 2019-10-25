import { Controller, Get, Post, Req, Body, Param, HttpException, HttpStatus, Logger, UseGuards, Inject, forwardRef } from '@nestjs/common'
import { CreateUserDto, ICreateUserDto } from './dto/create-user.dto'
import { ConfigService } from '../config/config.service'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'
import { AuthService } from '../auth/auth.service'

@Controller()
export class UsersController {
  private readonly logger = new Logger(UsersController.name)

  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {

  }
  @Get('users')
  getUsers(): string[] {
    return [
      'iori',
      'mzf',
      'marcus',
      'wendy',
      'mazhihui',
    ]
  }

  @Get('users/:id')
  getUser(@Param('id') id: number): [] {
    this.logger.debug(`api version is ${this.configService.get('API_VERSION')}`)
    this.logger.debug(`id is ${id}`)
    return []
  }

  @Post('users')
  createUser(@Body() userData: CreateUserDto) {
    this.logger.log(userData)
    return true
  }

  @UseGuards(AuthGuard('local'))
  @Post('users/login')
  async login(@Req() req: Request): Promise<any> {
    this.logger.debug('request params is ' + req.user)
    return this.authService.login(req.user)
  }

  @Post('users/register')
  register(account: string, password: string): string {
    return 'register'
  }

  @Get('ex')
  getException() {
    throw new HttpException('18禁', HttpStatus.FORBIDDEN)
  }
}
