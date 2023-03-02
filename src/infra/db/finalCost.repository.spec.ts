import { DDDEnum } from '@/common/enums/ddd.enum';
import { Test, TestingModule } from '@nestjs/testing';
import { FinalCostInMemoryRepositorySpy } from '@/domain/entities/finalCostSpy.repository';

describe('Final Cost Controller', () => {
    let repository: FinalCostInMemoryRepositorySpy;
  
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        providers: [FinalCostInMemoryRepositorySpy],
      }).compile();
  
      repository = app.get<FinalCostInMemoryRepositorySpy>(FinalCostInMemoryRepositorySpy);
    });
  
    describe('Final Cost Repository', () => {
      it('should return price with and without plan"', async () => {
          const dto = {
              plan: 30,
              from: DDDEnum.SAO_PAULO,
              to: DDDEnum.BARRINHAS_REGIAO,
              minutes: 50
          }
      });
    });
  });