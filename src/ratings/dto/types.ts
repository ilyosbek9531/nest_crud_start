import { IsOptional, IsUUID } from 'class-validator';

export class RatingQueryParams {
  @IsOptional()
  limit?: string;

  @IsOptional()
  page?: string;

  @IsUUID('4', { message: 'Please provide a valid UUID for product_id' })
  @IsOptional()
  product_id?: string;

  @IsUUID('4', { message: 'Please provide a valid UUID for product_id' })
  @IsOptional()
  user_id?: string;
}
