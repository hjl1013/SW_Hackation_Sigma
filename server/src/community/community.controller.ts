import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityCredentialsDto } from './dto/community-credentials.dto';
import { ThemeCredentialsDto } from './dto/theme-credentials.dto';

@Controller('community')
export class CommunityController {
    constructor(private communityService: CommunityService) {}
    
    @Post('/create')
    createCommunity(@Body() communityCredentialsDto: CommunityCredentialsDto) {
        return this.communityService.createCommunity(communityCredentialsDto);
    }

    @Get('/:commuName')
    getCommunityById(@Param('commuName') commuName: string) {
        return this.communityService.getCommunityByCommuName(commuName);
    }
    
    @Post('/:commuName/createtheme')
    createCommuTheme(
        @Param('commuName') commuName: string,
        @Body() themeCredentialsDto: ThemeCredentialsDto
    ) {
        console.log(themeCredentialsDto);
        return this.communityService.createCommuTheme(commuName, themeCredentialsDto);
    }
}
