import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { RatingsModule } from './ratings/ratings.module';
import { PurchasesModule } from './purchases/purchases.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    UsersModule,
    CategoriesModule,
    ProductsModule,
    RatingsModule,
    PurchasesModule,
    PrismaModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
