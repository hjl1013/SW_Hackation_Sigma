import { User } from '@prisma/client'
import { PostDto } from './post.dto'
import { UserProfileDto } from './user-profile.dto'

export class UserDto implements User {
    id: number
    email: string
    userAuthId: number
    profileId: number
    destinationName: string
    destinationLatitude: number
    destinationLongitude: number

}
