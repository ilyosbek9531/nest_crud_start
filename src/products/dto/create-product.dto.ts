import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  product_name: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  price: number;

  @IsUUID('4', { message: 'Please provide a valid UUID for category_id' })
  @IsNotEmpty()
  @ApiProperty()
  category_id: string;
}
