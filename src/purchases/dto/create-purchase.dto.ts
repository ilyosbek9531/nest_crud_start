import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreatePurchaseDto {
  @IsUUID('4', { message: 'Please provide a valid UUID for product_id' })
  @IsNotEmpty()
  @ApiProperty()
  product_id: string;

  @IsUUID('4', { message: 'Please provide a valid UUID for product_id' })
  @IsNotEmpty()
  @ApiProperty()
  user_id: string;
}
