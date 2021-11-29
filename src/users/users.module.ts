import { Module } from '@nestjs/common';
import { CustomerController } from 'src/customers/controllers/customers.controller';
import { CustomersService } from 'src/customers/services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
