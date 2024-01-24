import { ApiProperty } from '@nestjs/swagger';
import { Purchase } from '@prisma/client';

export class PurchaseEntity implements Purchase {
  @ApiProperty()
  id: string;

  @ApiProperty()
  product_id: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
