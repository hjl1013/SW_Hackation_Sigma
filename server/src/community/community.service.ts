import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CommunitycreateCredentialsDto } from './dto/communitycreate-credentials.dto';
import { CommuTheme, Community, Post, User } from '@prisma/client';
import { ThemecreateCredentialsDto } from './dto/themecreate-credentials.dto';
import { PostcreateCredentialsDto } from './dto/postcreate-credentials.dto';
import { PostDto, PostWithPostInfoDto } from 'src/common/dto/post.dto';
import { CommunityDto, GetCommunityDto } from 'src/common/dto/community.dto';
import { CommuThemeWithCommunityDto } from 'src/common/dto/commutheme.dto';


@Injectable()
export class CommunityService {
    constructor(private prisma: PrismaService, ) {}

    async createCommunity(communitycreateCredentialsDto: CommunitycreateCredentialsDto): Promise<CommunityDto> {
        const { commuProfileImgUrl, commuName, commuIntro, commuHT, commuMemberNumber} = communitycreateCredentialsDto
        const newCommunity: CommunityDto = await this.prisma.community.create({
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

    async createCommuTheme(commuId: number, themecreateCredentialsDto: ThemecreateCredentialsDto): Promise<CommuThemeWithCommunityDto> {
        const {commuThemeName, commuThemeIconUrl } = themecreateCredentialsDto;

        const newCommuTheme: CommuThemeWithCommunityDto = await this.prisma.commuTheme.create({
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

    async postAtCommu(user: User, commuId: number, postcreateCredentialsDto: PostcreateCredentialsDto): Promise<PostWithPostInfoDto> {
        const { commuThemeId, ImgUrl, title, text } = postcreateCredentialsDto;
        
        const newPost: PostWithPostInfoDto = await this.prisma.post.create({
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
                commuTheme: {
                    include: {
                        community: true,
                    },
                }
            }
        });

        return newPost;
    }

    async getCommuInfoById(commuId: number): Promise<GetCommunityDto> {
        const newCommunity: GetCommunityDto = await this.prisma.community.findUnique({
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

        return newCommunity;
    }

    async increaseNumberOfHearts(postId: number): Promise<PostDto> {
        const newPost: PostDto = await this.prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                numberOfHearts: {
                    increment: 1,
                },
            },
        });

        return newPost;
    }
}
