import { UserProfile } from '@prisma/client'
import { UserAvatarDto } from './user-avatar.dto';

export class UserProfileDto implements UserProfile{
    id: number
    name: string
    avatarId: number
}

export class UserProfileWithGetUserProfileDto extends UserProfileDto{
    avatar: UserAvatarDto;
}