import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { Module } from '@nestjs/common';
import { FinalCostModule } from './calculate/finalCost.module';

@Module({
  imports: [FinalCostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
