import { IsOptional, IsUUID } from 'class-validator';

export class PurchaseQueryParams {
  @IsOptional()
  limit?: string;

  @IsOptional()
  page?: string;

  @IsOptional()
  @IsUUID('4', { message: 'Please provide a valid UUID for product_id' })
  product_id: string;

  @IsOptional()
  @IsUUID('4', { message: 'Please provide a valid UUID for user_id' })
  user_id: string;
}
