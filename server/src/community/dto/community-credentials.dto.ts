import { IsArray, IsNotEmpty, IsString } from "class-validator"

export class CommunityCredentialsDto {
    @IsNotEmpty()
    @IsString()
    commuProfileImgUrl: string
    
    @IsNotEmpty()
    @IsString()
    commuName: string
    
    @IsNotEmpty()
    @IsString()
    commuIntro: string

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    commuHT: Array<string>

    @IsNotEmpty()
    @IsString()
    commuMemberNumber: string
}