import { IsArray, IsNotEmpty, IsString } from "class-validator"

export class ThemeCredentialsDto {
    @IsNotEmpty()
    @IsString()
    commuThemeName: string
    
    @IsNotEmpty()
    @IsString()
    commuThemeIconUrl: string
}