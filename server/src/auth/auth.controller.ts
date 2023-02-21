import { Body, Controller, ForbiddenException, Get, Patch, Post, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Response } from 'express'
import { ApiTags } from '@nestjs/swagger'
import { LoginCredentialsDto } from './dto/login-credentials.dto'
import { Public } from '../utility/decorators/public.decorator'
import { ConfigService } from '../config/config.service'
import { SignUpCredentialsDto } from './dto/sign-up-credentials.dto'
import { UserDto } from 'src/common/dto/user.dto'
import { DesCredentialsDto } from '../location/dto/des-credentials.dto'
import { User } from '@prisma/client'
import { ExtractUser } from 'src/utility/decorators/extract-user.decorator'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private configService: ConfigService,
    ) {}

    @Public()
    @Post('login')
    async login(
        @Body() loginCredentialsDto: LoginCredentialsDto,
        @Res({ passthrough: true }) response: Response,
    ): Promise<UserDto> {
        const user = await this.authService.validateUser(loginCredentialsDto)
        if (user === undefined) {
            throw new ForbiddenException(
                '이메일 혹은 비밀번호가 잘못되었습니다.',
            )
        }
        const { accessToken } = await this.authService.login(user)
        response.cookie(
            this.configService.select(({ auth }) => auth.cookieKey),
            accessToken,
            {
                httpOnly: true,
                maxAge: this.configService.select(
                    ({ auth }) => auth.accessTokenExpiresIn,
                ),
                sameSite: 'none',
                secure: true,
            },
        )
        return user;
    }

    @Public()
    @Post('sign-up')
    async signUp(
        @Body() signUpCredentials: SignUpCredentialsDto,
    ): Promise<UserDto> {
        return this.authService.signUp(signUpCredentials)
    }

    @Get('is-logged-in')
    async isLoggedIn(
        @ExtractUser() user: User
    ): Promise<boolean> {
        return Boolean(user);
    }
}
