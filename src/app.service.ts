import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('tasks') private tasks: any[],
    @Inject(config.KEY) private configData: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    console.log(this.configData.database.name);
    console.log(this.configData.apiKey);

    return `Hola world`;
  }
}
