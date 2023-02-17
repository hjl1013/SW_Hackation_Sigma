import { UserAvatar } from '@prisma/client'

export class UserAvatarDto implements UserAvatar {
    id: number
    characterImgUrl: string
    carImgUrl: string
}
