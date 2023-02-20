import {  IsNotEmpty, IsString } from "class-validator"

export class ThemecreateCredentialsDto {
    @IsNotEmpty()
    @IsString()
    commuThemeName: string
    
    @IsNotEmpty()
    @IsString()
    commuThemeIconUrl: string

}