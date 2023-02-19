import { IsEmpty, IsLatitude, IsLongitude, IsString } from "class-validator"

export class DesCredentialsDto {
    @IsEmpty()
    @IsString()
    destinationName: string
    
    @IsEmpty()
    @IsLatitude()
    destinationLatitude: number
    
    @IsEmpty()
    @IsLongitude()
    destinationLongitude: number
}