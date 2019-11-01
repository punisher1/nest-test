
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath))
    for (const k in this.envConfig) {
      if (this.envConfig.hasOwnProperty(k)) {
        process.env[k] = this.envConfig[k]
      }
    }
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}
