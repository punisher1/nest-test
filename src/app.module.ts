import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApiModule } from './api.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [ApiModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
