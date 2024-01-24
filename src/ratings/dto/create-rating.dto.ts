import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUUID, Max, Min } from 'class-validator';

export class CreateRatingDto {
  @IsInt()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  @ApiProperty()
  rating: number;

  @IsUUID('4', { message: 'Please provide a valid UUID for product_id' })
  @IsNotEmpty()
  @ApiProperty()
  product_id: string;

  @IsUUID('4', { message: 'Please provide a valid UUID for user_id' })
  @IsNotEmpty()
  @ApiProperty()
  user_id: string;
}
