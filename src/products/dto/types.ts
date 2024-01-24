import { IsOptional, IsUUID } from 'class-validator';

export class ProductQueryParams {
  @IsOptional()
  limit?: string;

  @IsOptional()
  page?: string;

  @IsUUID('4', { message: 'Please provide a valid UUID for category_id' })
  @IsOptional()
  category_id?: string;
}
