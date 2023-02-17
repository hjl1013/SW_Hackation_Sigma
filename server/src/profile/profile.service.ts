import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { UserDto } from 'src/common/dto/user.dto'

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    async getUserProfile(user: User): Promise<UserDto> {
        return this.prisma.user.findUnique({
            where: {
                id: user.id,
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
}
