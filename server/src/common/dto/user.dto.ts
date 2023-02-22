import { User } from '@prisma/client'
import { UserProfileDto, UserProfileWithGetUserProfileDto } from './user-profile.dto'
import { PostWithGetUserProfileDto } from './post.dto'

export class UserDto implements User {
    id: number
    email: string
    userAuthId: number
    profileId: number
    destinationName: string
    destinationLatitude: number
    destinationLongitude: number

}

export class UserWithProfileDto extends UserDto{
    profile: UserProfileDto;
}

export class UserWithAvatarDto extends UserDto {
    profile: UserProfileWithGetUserProfileDto
}

export class UserWithGetUserProfileDto extends UserDto{
    profile: UserProfileWithGetUserProfileDto;
    posts: Array<PostWithGetUserProfileDto>;
}