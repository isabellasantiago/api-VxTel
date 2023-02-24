import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { FinalCostInMemoryRepository } from '@/infra/db/finalCost-in-memory.repository';
import { Module } from '@nestjs/common';
import { FinalCostController } from './calculate/controller/finalCost.controller';
import { FinalCostModule } from './calculate/finalCost.module';

@Module({
  imports: [FinalCostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
