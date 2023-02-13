import { Injectable } from '@nestjs/common'
import * as dotenv from 'dotenv'

@Injectable()
export class ConfigService {
    private static configuration = (() => {
        // .env 파일 로드해서 process.env에 추가
        dotenv.config()

        return {
            port: Number(process.env['PORT'] ?? 3000),
            dataBaseUrl:
                process.env['DATABASE_URL'] ??
                (() => {
                    throw new Error('DATABASE_URL 환경변수가 빠져있습니다.')
                })(),
            auth: {
                cookieKey: 'jwt',
                // 7일 => ms
                accessTokenExpiresIn: 604800000,
                jwtSecret:
                    process.env['JWT_SECRET'] ??
                    (() => {
                        throw new Error('JWT_SECRET 환경변수가 빠져있습니다.')
                    })(),
            },
            // 매직링크 메일 보낼 때 사용
            mailing: {
                email: 'record.snusigma@gmail.com',
                password:
                    process.env['EMAIL_AUTH_PASSWORD'] ??
                    (() => {
                        throw new Error(
                            'EMAIL_AUTH_PASSWORD 환경변수가 빠져있습니다.',
                        )
                    })(),
                host: 'smtp.gmail.com',
                userName: '시그마 인텔리전스',
            },
            redirect: {
                // 현재는 매직링크를 위한 base url로 사용
                webBaseUrl: 'https://web.sigma-intelligence.com',
            },
            aws: {
                accessKeyId:
                    process.env['AWS_ACCESS_KEY_ID'] ??
                    (() => {
                        throw new Error(
                            'AWS_ACCESS_KEY_ID 환경변수가 빠져있습니다.',
                        )
                    })(),
                secretAccessKey:
                    process.env['AWS_SECRET_ACCESS_KEY'] ??
                    (() => {
                        throw new Error(
                            'AWS_SECRET_ACCESS_KEY 환경변수가 빠져있습니다.',
                        )
                    })(),
            },
        } as const satisfies {
            port: number
            dataBaseUrl: string
            auth: {
                accessTokenExpiresIn: number
                cookieKey: string
                jwtSecret: string
            }
            mailing: {
                email: string
                password: string
                host: string
                userName: string
            }
            redirect: {
                webBaseUrl: string
            }
            aws: {
                accessKeyId: string
                secretAccessKey: string
            }
        }
    })()

    select<T>(
        selector: (rootConfig: typeof ConfigService.configuration) => T,
    ): T {
        return selector(ConfigService.configuration)
    }
}
