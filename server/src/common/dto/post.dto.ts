import { Post } from '@prisma/client'

export class PostDto implements Post {
    id: number
    userId: number

    // implement later
}
