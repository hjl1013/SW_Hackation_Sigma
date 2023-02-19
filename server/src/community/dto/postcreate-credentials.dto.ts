import { IsEmpty, IsInt, IsLatitude, IsLongitude, IsString } from "class-validator"

export class PostcreateCredentialsDto{
    @IsEmpty()
    @IsInt()
    commuThemeId: number
  
    @IsString()
    ImgUrl: string
    
    @IsEmpty()
    @IsString()
    title: string
    
    @IsEmpty()
    @IsString()
    text: string
}