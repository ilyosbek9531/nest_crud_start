import { ApiProperty } from '@nestjs/swagger';
import { Rating } from '@prisma/client';

export class RatingEntity implements Rating {
  @ApiProperty()
  id: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  product_id: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
