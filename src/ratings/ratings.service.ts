import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { RatingQueryParams } from './dto/types';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RatingsService {
  constructor(private prisma: PrismaService) {}

  create(createRatingDto: CreateRatingDto) {
    return this.prisma.rating.create({ data: createRatingDto });
  }

  findAll(queryParams: RatingQueryParams) {
    const { page = 1, limit = 10, product_id, user_id } = queryParams;
    const skip = (+page - 1) * +limit;
    const take = +limit;

    return this.prisma.rating.findMany({
      where: {
        product_id: product_id,
        user_id: user_id,
      },
      skip,
      take,
      orderBy: {
        created_at: 'asc',
      },
      include: {
        user: true,
        product: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.rating.findUnique({ where: { id } });
  }

  update(id: string, updateRatingDto: UpdateRatingDto) {
    return this.prisma.rating.update({
      where: { id },
      data: updateRatingDto,
    });
  }

  remove(id: string) {
    return this.prisma.rating.delete({ where: { id } });
  }
}
