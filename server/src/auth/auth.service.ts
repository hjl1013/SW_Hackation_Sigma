import { Injectable, Logger } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { UserDto, UserWithAvatarDto } from 'src/common/dto/user.dto'
import { ConfigService } from '../config/config.service'
import { LoginCredentialsDto } from './dto/login-credentials.dto'
import { SignUpCredentialsDto } from './dto/sign-up-credentials.dto'
import { JWTPayload } from './models/JWTPayload'
import { DesCredentialsDto } from '../location/dto/des-credentials.dto'

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService,
        private configService: ConfigService,
    ) {}

    private logger = new Logger(AuthService.name)

    async signUp(signUpCredentials: SignUpCredentialsDto): Promise<UserDto> {
        const { email, password, name } = signUpCredentials
        const hashedPassword = await bcrypt.hash(password, 10)
        return this.prisma.user.upsert({
            where: {
                email,
            },
            create: {
                email,
                userAuth: {
                    create: {
                        hashedPassword,
                    },
                },
                profile: {
                    create: {
                        name: name,
                        avatar: {
                            create: {
                                characterImgUrl: '',
                                carImgUrl: '',
                            },
                        },
                    },
                },
                destinationName: "",
                destinationLatitude: 0,
                destinationLongitude: 0,
            },
            update: {
                userAuth: {
                    update: {
                        hashedPassword,
                    },
                },
            },
            include: {
                profile: {
                    include: {
                        avatar: true,
                    },
                },
                posts: true,
            },
        })
    }

    async validateUser({
        email,
        password,
    }: LoginCredentialsDto): Promise<User | undefined> {
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
            include: {
                userAuth: {
                    select: {
                        hashedPassword: true,
                    },
                },
            },
        })
        if (user === null) {
            return
        }

        const match = await bcrypt.compare(
            password,
            user.userAuth.hashedPassword,
        )

        if (match === false) {
            return
        }
        return user
    }

    async login(user: User) {
        const payload: JWTPayload = {
            id: user.id,
            email: user.email,
        }

        return {
            accessToken: this.jwtService.sign(payload),
        }
    }

    async findUser(id: number) {
        return this.prisma.user.findUnique({
            where: { id },
        })
    }

    async getUserInfo(user: User): Promise<UserWithAvatarDto> {
        return this.prisma.user.findUnique({
            where: {
                id: user.id
            },
            include: {
                profile: {
                    include: {
                        avatar: true
                    }
                }
            }
        })
    }
}
