import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';

export class ProductEntity implements Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  product_name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  category_id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
