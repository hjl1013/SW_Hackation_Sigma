import { CreateThemeDto } from "./theme.dto"

export class CreateCommunityDto {
    commuProfileImgUrl: string
    commuName: string
    commuIntro: string
    commuHT: Array<string>
    commuMemberNumber: string = '10M'
}

export class CommunityDto {
    id: string
    commuProfileImgUrl: string
    commuName: string
    commuIntro: string
    commuHT: Array<string>
    commuMemberNumber: string = "10M"
}

export class CommunityWithPostsDto extends CommunityDto {
    commuThemes: Array<CreateThemeDto>
}