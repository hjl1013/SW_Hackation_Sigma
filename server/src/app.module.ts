import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from './config/config.module'
import { ProfileModule } from './profile/profile.module'
import { CommunityModule } from './community/community.module';
import { LocationModule } from './location/location.module';

@Module({
    imports: [
        AuthModule,
        PrismaModule.forRoot({ isGlobal: true }),
        ConfigModule,
        ProfileModule,
        CommunityModule,
        LocationModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
