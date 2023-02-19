import { Community } from '@prisma/client'
import { CommuThemeForGetCommunityDto } from './commutheme.dto';

export class CommunityDto implements Community{
    id: number;

    commuProfileImgUrl: string;
    commuName: string;
    commuIntro: string;
    commuHT: string[];
    commuMemberNumber: string;
}

export class GetCommunityDto extends CommunityDto{
    commuThemes: Array<CommuThemeForGetCommunityDto>;
}