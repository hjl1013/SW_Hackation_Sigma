import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { User } from '@prisma/client'
import { Request } from 'express'
import { Strategy } from 'passport-jwt'
import { AuthService } from '../auth.service'
import { JWTPayload } from '../models/JWTPayload'
import { ConfigService } from '../../config/config.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private authService: AuthService,
    ) {
        super({
            jwtFromRequest: (req: Request) => {
                return req.cookies[
                    configService.select(({ auth }) => auth.cookieKey)
                ]
            },
            ignoreExpiration: false,
            secretOrKey: configService.select(({ auth }) => auth.jwtSecret),
        })
    }

    async validate(payload: JWTPayload): Promise<User> {
        const user = await this.authService.findUser(payload.id)
        if (user === null) {
            throw new UnauthorizedException()
        }
        return user
    }
}
