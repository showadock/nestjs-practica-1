import { HttpModule, Module, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { CustomersModule } from './customers/customers.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database/database.module';
import { environments } from './environments';
import config from './config';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    BrandsModule,
    CustomersModule,
    CategoriesModule,
    HttpModule,
    DatabaseModule,
    ConfigModule.forRoot({
      // Usamos el configmodule para guardar todas las configuraciones de la aplicación. Le configuramos el .env a utilizar, y lo ponemos global.
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true, // Acceso a esta configuración global?
      load: [config], // Que cargue el archivo config.ts
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,

    {
      provide: 'tasks',
      useFactory: async (http: HttpService) => {
        // useFactory permite pasar un valor que sea devuelto por una funcion asíncrona, o también permite invocar una api por httprequest. Permite también injectarle dependencias
        // No se recomienta llamar apis usando usefactory, ya que el servicio no estará disponible hasta que se complete la request.
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
