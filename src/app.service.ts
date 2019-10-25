import { Injectable } from '@nestjs/common'
import { ConfigService } from './config/config.service'

@Injectable()
export class AppService {
  /**
   *
   */
  constructor(private readonly config: ConfigService) {
  }
  getHello(): string {
    return 'Hello World!'
  }

  getApiVersion(): string {
    return this.config.get('API_VERSION')
  }
}
