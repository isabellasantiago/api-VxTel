import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FinalCostModule } from './finalCost/finalCost.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), FinalCostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
