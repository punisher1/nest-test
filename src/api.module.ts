import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { HttpExceptionFilter } from './shared/http-exception.filter'
import { ConfigModule } from './config/config.module'
import { UsersModule } from './users/users.module'
import { LoggingInterceptor } from './shared/logging.interceptor'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [ConfigModule, AuthModule, UsersModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [ConfigModule, AuthModule, UsersModule],
})

export class ApiModule { }
