import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { PurchaseEntity } from './entities/purchase.entity';
import { PurchaseQueryParams } from './dto/types';

@Controller('purchases')
@ApiTags('Purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  @ApiCreatedResponse({ type: PurchaseEntity })
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchasesService.create(createPurchaseDto);
  }

  @Get()
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'product_id', type: String, required: false })
  @ApiQuery({ name: 'user_id', type: String, required: false })
  @ApiOkResponse({ type: PurchaseEntity, isArray: true })
  findAll(@Query() queryParams: PurchaseQueryParams) {
    return this.purchasesService.findAll(queryParams);
  }

  @Get(':id')
  @ApiOkResponse({ type: PurchaseEntity })
  findOne(@Param('id') id: string) {
    return this.purchasesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PurchaseEntity })
  update(
    @Param('id') id: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ) {
    return this.purchasesService.update(id, updatePurchaseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PurchaseEntity })
  remove(@Param('id') id: string) {
    return this.purchasesService.remove(id);
  }
}
