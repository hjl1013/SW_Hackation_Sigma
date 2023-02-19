import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunitycreateCredentialsDto } from './dto/communitycreate-credentials.dto';
import { ThemecreateCredentialsDto } from './dto/themecreate-credentials.dto';
import { ExtractUser } from 'src/utility/decorators/extract-user.decorator';
import { User } from '@prisma/client';
import { PostcreateCredentialsDto } from './dto/postcreate-credentials.dto';
import { CommunityDto, GetCommunityDto } from 'src/common/dto/community.dto';
import { PostDto, PostWithPostInfoDto } from 'src/common/dto/post.dto';
import { CommuThemeWithCommunityDto } from 'src/common/dto/commutheme.dto';

@Controller('community')
export class CommunityController {
    constructor(private communityService: CommunityService) {}
    
    @Post('/create')
    createCommunity(
        @Body() communitycreateCredentialsDto: CommunitycreateCredentialsDto
    ): Promise<CommunityDto> {
        return this.communityService.createCommunity(communitycreateCredentialsDto);
    }
    
    @Post('/:commuId/createtheme')
    createCommuTheme(
        @Param('commuId', ParseIntPipe) commuId: number,
        @Body() themecreateCredentialsDto: ThemecreateCredentialsDto
    ): Promise<CommuThemeWithCommunityDto> {
        return this.communityService.createCommuTheme(commuId, themecreateCredentialsDto);
    }


    @Post('/:commuId/posting')
    postAtCommu(
        @ExtractUser() user: User,
        @Param('commuId', ParseIntPipe) commuId: number,
        @Body() postcreateCredentialsDto: PostcreateCredentialsDto
    ): Promise<PostWithPostInfoDto>  {
        return this.communityService.postAtCommu(user, commuId, postcreateCredentialsDto);
    }

    @Get('/:commuId/commuThemes')
    getCommuInfoById(
        @Param('commuId', ParseIntPipe) commuId: number,
    ): Promise<GetCommunityDto>  {
        return this.communityService.getCommuInfoById(commuId);
    }

    @Patch('/:commuId/post/:postId')
    increaseNumberOfHearts(
        @Param('commuId', ParseIntPipe) commuId: number,
        @Param('postId', ParseIntPipe) postId: number,
    ): Promise<PostDto> {
        return this.communityService.increaseNumberOfHearts(postId);
    }
    
}
