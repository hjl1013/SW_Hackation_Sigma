import { PostDto } from "./post.dto"

export class CreateThemeDto {
    commuThemeName: string
    commuThemeIconUrl: string
}

export class Theme {
    id: number
    commuId: number
    commuThemeName: string
    commuThemeIconUrl: string

    posts: Array<PostDto>
}