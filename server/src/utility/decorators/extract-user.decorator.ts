import { createParamDecorator } from '@nestjs/common'
import type { User } from '@prisma/client'

export const ExtractUser = createParamDecorator<undefined>(
    (_data, ctx): User => {
        const request = ctx.switchToHttp().getRequest()
        return request.user
    },
)
