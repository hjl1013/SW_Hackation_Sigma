import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './strategies/jwt.strategy'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.select(({ auth }) => auth.jwtSecret),
                expiresIn: configService.select(
                    ({ auth }) => auth.accessTokenExpiresIn,
                ),
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        { provide: APP_GUARD, useClass: JwtAuthGuard },
    ],
})
export class AuthModule {}
