import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CommunityCredentialsDto } from './dto/community-credentials.dto';
import { CommuTheme, Community } from '@prisma/client';
import { ThemeCredentialsDto } from './dto/theme-credentials.dto';

@Injectable()
export class CommunityService {
    constructor(private prisma: PrismaService, ) {}

    async createCommunity(communityCredentialsDto: CommunityCredentialsDto) {
        const { commuProfileImgUrl, commuName, commuIntro, commuHT, commuMemberNumber} = communityCredentialsDto
        const newCommunity: Community = await this.prisma.community.create({
            data: {
                commuProfileImgUrl,
                commuName,
                commuIntro,
                commuHT,
                commuMemberNumber,
            },
        });

        return newCommunity;
    }

    async getCommunityByCommuName(commuName: string) {
        return await this.prisma.community.findUnique({
            where: { commuName },
        })
    }

    async createCommuTheme(commuName: string, themeCredentialsDto: ThemeCredentialsDto) {
        const {commuThemeName, commuThemeIconUrl} = themeCredentialsDto;
        const foundCommunity = await this.getCommunityByCommuName(commuName);

        const newCommuTheme: CommuTheme = await this.prisma.commuTheme.create({
            data: {
                commuId: foundCommunity.id,
                commuThemeName,
                commuThemeIconUrl,
            },
            include: {
                community: true,
            }
        });

        return newCommuTheme;
    }
}
