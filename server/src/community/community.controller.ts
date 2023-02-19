import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunitycreateCredentialsDto } from './dto/communitycreate-credentials.dto';
import { ThemecreateCredentialsDto } from './dto/themecreate-credentials.dto';
import { ExtractUser } from 'src/utility/decorators/extract-user.decorator';
import { User } from '@prisma/client';
import { PostcreateCredentialsDto } from './dto/postcreate-credentials.dto';

@Controller('community')
export class CommunityController {
    constructor(private communityService: CommunityService) {}
    
    @Post('/create')
    createCommunity(@Body() communitycreateCredentialsDto: CommunitycreateCredentialsDto) {
        return this.communityService.createCommunity(communitycreateCredentialsDto);
    }

    @Get('/:commuId')
    getCommunityById(@Param('commuId', ParseIntPipe) commuId: number) {
        return this.communityService.getCommunityById(commuId);
    }
    
    @Post('/:commuId/createtheme')
    createCommuTheme(
        @Param('commuId', ParseIntPipe) commuId: number,
        @Body() themecreateCredentialsDto: ThemecreateCredentialsDto
    ) {
        return this.communityService.createCommuTheme(commuId, themecreateCredentialsDto);
    }


    @Post('/:commuId/posting')
    postAtCommu(
        @ExtractUser() user: User,
        @Param('commuId', ParseIntPipe) commuId: number,
        @Body() postcreateCredentialsDto: PostcreateCredentialsDto
    ) {
        return this.communityService.postAtCommu(user, commuId, postcreateCredentialsDto);
    }
/*
    @Get('/:commuId/posts/:commuThemeId')
    getPostByCommuThemeId(
        @Param('commuId', ParseIntPipe) commuId: number,
        @Param('commuThemeId', ParseIntPipe) commuThemeId: number
    ) {
        return this.communityService.getPostByCommuThemeId(commuThemeId);
    }

    @Get('/:commuId/commuTheme')
    getCommuThemeById(
        @Param('commuId', ParseIntPipe) commuId: number
    ) {
        return this.communityService.getCommuThemeById(commuId);
    }*/

    @Get('/:commuId/commuThemes')
    getCommuInfoById(
        @Param('commuId', ParseIntPipe) commuId: number,
        ) {
        return this.communityService.getCommuInfoById(commuId);
    }
}
