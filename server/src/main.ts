import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    // cookie 사용
    app.use(cookieParser())

    // swagger 사용
    const config = new DocumentBuilder()
        .setTitle('sigma-intelligence-community-server')
        .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

    await app.listen(3000)
}
bootstrap()
