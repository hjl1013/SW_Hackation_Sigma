import { Post } from '@prisma/client'

export class PostDto implements Post{
    id: number

    userId: number
    
    commuThemeId: number
    
    ImgUrl: string
    title: string
    text :string
    numberOfHearts: number

    locationName: string
    locationLatitude: number
    locationLongitude: number
}
