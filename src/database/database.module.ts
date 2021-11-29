import { Global, Module } from '@nestjs/common';

const API_KEY = 'asdasd';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: API_KEY, // useValue permite enviar un valor de cualquier tipo
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
