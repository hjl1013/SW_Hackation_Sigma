import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { DesCredentialsDto } from './dto/des-credentials.dto';
import { UserDto } from 'src/common/dto/user.dto';

@Injectable()
export class LocationService {
    constructor(private prisma: PrismaService, ) {}

    async setUpDestination(user: User, desCredentialsDto: DesCredentialsDto): Promise<UserDto> {
        const { destinationName, destinationLatitude, destinationLongitude } = desCredentialsDto
        const newUser: User = await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                destinationName,
                destinationLatitude,
                destinationLongitude,
            },
        });

        return newUser;
    }
}
