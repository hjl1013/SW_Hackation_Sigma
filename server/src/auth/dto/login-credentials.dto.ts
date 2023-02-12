import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginCredentialsDto {
    @IsEmail()
    email: string
    @IsNotEmpty()
    @IsString()
    password: string
}
