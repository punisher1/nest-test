import { IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateUserDto implements ICreateUserDto {
  @ApiModelProperty()
  readonly name: string

  @ApiModelProperty()
  @IsNotEmpty()
  readonly account: string

  @ApiModelProperty()
  @IsNotEmpty()
  readonly password: string
}

export interface ICreateUserDto {
  name: string
  account: string
  password: string
}
