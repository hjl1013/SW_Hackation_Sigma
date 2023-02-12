import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ReactAdapter } from '@webtre/nestjs-mailer-react-adapter'

@Module({
  imports: [
    AuthModule,
    PrismaModule.forRoot({ isGlobal: true }),
    ConfigModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
          const { email, password, host, userName } =
              configService.select(({ mailing }) => mailing)
          return {
              transport: `smtps://${email}:${password}@${host}`,
              defaults: {
                  from: `"${userName}" <${email}>`,
              },
              template: {
                  dir: __dirname + '/templates',
                  adapter: new ReactAdapter(),
              },
          }
      },
      inject: [ConfigService],
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
