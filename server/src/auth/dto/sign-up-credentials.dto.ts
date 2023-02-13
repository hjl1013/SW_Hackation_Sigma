import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class SignUpCredentialsDto {
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsString()
    name: string
}
