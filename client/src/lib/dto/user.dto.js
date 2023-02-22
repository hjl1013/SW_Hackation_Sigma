import { ProfileDto } from "./profile.dto"

export class SetLocationDto {
    destinationName: string
    destinationLatitude: number
    destinationLongitude: number
}

export class UserDto extends SetLocationDto {
    id: number
    email: string
    userAuthId: number
    profileId: number

    profile: ProfileDto
}