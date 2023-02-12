import { IsNotEmpty, IsString } from 'class-validator'

export class SetPasswordCredentialsDto {
    @IsNotEmpty()
    @IsString()
    token: string
    @IsNotEmpty()
    @IsString()
    password: string
}
