import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PurchaseQueryParams } from './dto/types';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  create(createPurchaseDto: CreatePurchaseDto) {
    return this.prisma.purchase.create({ data: createPurchaseDto });
  }

  findAll(queryParams: PurchaseQueryParams) {
    const { page = 1, limit = 10, product_id, user_id } = queryParams;
    const skip = (+page - 1) * +limit;
    const take = +limit;

    return this.prisma.purchase.findMany({
      where: { product_id, user_id },
      skip,
      take,
      orderBy: {
        created_at: 'asc',
      },
      include: {
        product: true,
        user: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.purchase.findUnique({ where: { id } });
  }

  update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    return this.prisma.purchase.update({
      where: { id },
      data: updatePurchaseDto,
    });
  }

  remove(id: string) {
    return this.prisma.purchase.delete({ where: { id } });
  }
}
