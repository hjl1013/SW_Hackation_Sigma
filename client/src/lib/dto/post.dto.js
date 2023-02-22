import { UserDto } from "./user.dto"

export class CreatePostDto {
    commuThemeId: number
    ImgUrl: string
    title: string
    text: string
}

export class PostDto {
    id: number
    userId: number
    commuThemeId: number
    ImgUrl: string
    title: string
    text: string
    numberOfHearts: number
    locationName: string
    locationLatitude: number
    locationLongitude: number

    user: UserDto
}