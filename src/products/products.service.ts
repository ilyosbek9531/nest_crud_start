import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'nestjs-prisma';
import { ProductQueryParams } from 'src/products/dto/types';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  findAll(queryParams: ProductQueryParams) {
    const { page = 1, limit = 10, category_id } = queryParams;
    const skip = (+page - 1) * +limit;
    const take = +limit;
    return this.prisma.product.findMany({
      where: { category_id },
      skip,
      take,
      orderBy: {
        created_at: 'asc',
      },
      include: {
        purchases: true,
        ratings: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        purchases: true,
        ratings: true,
      },
    });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
