import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from 'src/categories/services/categories.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService, CategoriesService],
  exports: [ProductsService], // Exportamos para que pueda ser usado en otros módulos sin tener que importar el módulo que lo contiene
})
export class ProductsModule {}
