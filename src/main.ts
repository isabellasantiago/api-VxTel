import 'reflect-metadata';
import { Logger } from '@nestjs/common/services';
import config from './infra/http/nestjs/config/app';
import envs from './infra/http/nestjs/config/envs';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await config();
  await app.listen(3333);

  logger.log(
    `VxTel API has been started on port http://localhost:${envs.port}`
  )
}
bootstrap();
