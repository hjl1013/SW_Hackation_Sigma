import { Community } from '@prisma/client'
import { CommuThemeDto } from './commutheme.dto';

export class CommunityDto implements Community{
    id: number;

    commuProfileImgUrl: string;
    commuName: string;
    commuIntro: string;
    commuHT: string[];
    commuMemberNumber: string;
}
