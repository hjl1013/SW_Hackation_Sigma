import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CommunitycreateCredentialsDto } from './dto/communitycreate-credentials.dto';
import { CommuTheme, Community, Post, User } from '@prisma/client';
import { ThemecreateCredentialsDto } from './dto/themecreate-credentials.dto';
import { PostcreateCredentialsDto } from './dto/postcreate-credentials.dto';
import { PostDto } from 'src/common/dto/post.dto';
import { CommunityDto } from 'src/common/dto/community.dto';
import { CommuThemeDto } from 'src/common/dto/commutheme.dto';

@Injectable()
export class CommunityService {
    constructor(private prisma: PrismaService, ) {}

    async createCommunity(communitycreateCredentialsDto: CommunitycreateCredentialsDto): Promise<CommunityDto> {
        const { commuProfileImgUrl, commuName, commuIntro, commuHT, commuMemberNumber} = communitycreateCredentialsDto
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

    async getCommunityById(commuId: number): Promise<CommunityDto> {
        return await this.prisma.community.findUnique({
            where: { id: commuId },
        })
    }

    async createCommuTheme(commuId: number, themecreateCredentialsDto: ThemecreateCredentialsDto): Promise<CommuThemeDto> {
        const {commuThemeName, commuThemeIconUrl } = themecreateCredentialsDto;
        // const foundCommunity = await this.getCommunityById(commuId);

        const newCommuTheme: CommuTheme = await this.prisma.commuTheme.create({
            data: {
                commuId,
                commuThemeName,
                commuThemeIconUrl,
            },
            include: {
                community: true,
            }
        });

        return newCommuTheme;
    }

    async postAtCommu(user: User, commuId: number, postcreateCredentialsDto: PostcreateCredentialsDto): Promise<PostDto> {
        const { commuThemeId, ImgUrl, title, text } = postcreateCredentialsDto;
        // const foundCommunity = await this.getCommunityById(commuId);
        
        const newPost: Post = await this.prisma.post.create({
            data: {
                userId: user.id,
                commuThemeId,
                ImgUrl,
                title,
                text,
                numberOfHearts: 0,
                locationName: user.destinationName,
                locationLatitude: user.destinationLatitude,
                locationLongitude: user.destinationLongitude,
            },
            include: {
                user: {
                    include: {
                        profile: true,
                    },
                },
                commuTheme: true,
            }
        });

        return newPost;
    }
/*
    async getPostByCommuThemeId(commuThemeId: number) {
        return await this.prisma.post.findMany({
            where: {
                commuThemeId,
            },
            include: {
                user: {
                    include: {
                        profile: true,
                    },
                },
                commuTheme: true,
            },
        });
    }

    async getCommuThemeById(commuId: number) {
        return await this.prisma.commuTheme.findMany({
            where: {
                commuId,
            },
            include: {
                // community: true,
                posts: true,
            },
        });
    }*/

    async getCommuInfoById(commuId: number) {
        return await this.prisma.community.findMany({
            where: {
                id: commuId,
            },
            include: {
                commuThemes: {
                    include: {
                        posts: {
                            include: {
                                user: {
                                    include: {
                                        profile: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
}
