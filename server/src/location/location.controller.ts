import { Body, Controller, Patch } from '@nestjs/common';
import { User } from '@prisma/client';
import { DesCredentialsDto } from 'src/location/dto/des-credentials.dto';
import { ExtractUser } from 'src/utility/decorators/extract-user.decorator';
import { LocationService } from './location.service';
import { UserDto } from 'src/common/dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('location')
@ApiTags('location')
export class LocationController {
    constructor(private locationService: LocationService) {}

    @Patch('set-up')
    setUpDestination(
        @ExtractUser() user: User,
        @Body() desCredentialsDto: DesCredentialsDto
    ): Promise<UserDto> {
        return this.locationService.setUpDestination(user, desCredentialsDto);
    }
}
