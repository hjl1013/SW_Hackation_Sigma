import { BadRequestException, PipeTransform } from '@nestjs/common'
import { isDate } from 'class-validator'

export class ParseDatePipe implements PipeTransform {
    transform(value: Date) {
        // NestJS에서 어떠한 string이든 강제로 Date로 변환을 해주지만 Invalid Date일 수 있기 때문에 검사
        if (!isDate(value)) {
            throw new BadRequestException(`${value} isn't Date format`)
        }

        return value
    }
}
