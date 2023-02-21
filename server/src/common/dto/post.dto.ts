import { Post } from '@prisma/client'
import { UserForGetCommunityDto, UserWithProfileDto } from './user.dto'
import { CommuThemeDto, CommuThemeWithCommunityDto } from './commutheme.dto'

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

export class PostWithPostInfoDto extends PostDto{
    user: UserWithProfileDto;
    commuTheme: CommuThemeWithCommunityDto;
}

export class PostForGetCommunityDto extends PostDto{
    user: UserForGetCommunityDto;
}

export class PostWithGetUserProfileDto extends PostDto{
    commuTheme: CommuThemeDto;
}