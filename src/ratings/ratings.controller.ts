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
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { RatingEntity } from './entities/rating.entity';
import { RatingQueryParams } from './dto/types';

@Controller('ratings')
@ApiTags('Ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  @ApiCreatedResponse({ type: RatingEntity })
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingsService.create(createRatingDto);
  }

  @Get()
  @ApiOkResponse({ type: RatingEntity, isArray: true })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'product_id', type: String, required: false })
  @ApiQuery({ name: 'user_id', type: String, required: false })
  findAll(@Query() queryParams: RatingQueryParams) {
    return this.ratingsService.findAll(queryParams);
  }

  @Get(':id')
  @ApiOkResponse({ type: RatingEntity })
  findOne(@Param('id') id: string) {
    return this.ratingsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: RatingEntity })
  update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingsService.update(id, updateRatingDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: RatingEntity })
  remove(@Param('id') id: string) {
    return this.ratingsService.remove(id);
  }
}
