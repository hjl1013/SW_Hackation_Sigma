import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { UserWithGetUserProfileDto } from 'src/common/dto/user.dto'
import { ExtractUser } from 'src/utility/decorators/extract-user.decorator'
import { ProfileService } from './profile.service'

@Controller('profile')
@ApiTags('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @Get('')
    getUserProfile(
        @ExtractUser() user: User
    ): Promise<UserWithGetUserProfileDto> {
        return this.profileService.getUserProfile(user)
    }
}
