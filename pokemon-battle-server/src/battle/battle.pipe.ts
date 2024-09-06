import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateIdsPipe implements PipeTransform {
  transform(value: any) {
    const { id1, id2 } = value;

    if (!id1 || !id2) {
      throw new BadRequestException('Both IDs are required.');
    }

    if (typeof id1 !== 'number' || typeof id2 !== 'number') {
      throw new BadRequestException('IDs must be number.');
    }

    return value;
  }
}
