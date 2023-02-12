import { IsEmail } from 'class-validator'

export class SignUpCredentialsDto {
    @IsEmail()
    email: string
}
