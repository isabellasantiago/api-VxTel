import { DDDEnum } from '@/common/enums/ddd.enum';
import { Test, TestingModule } from '@nestjs/testing';
import { FinalCostInMemoryRepositorySpy } from '@/domain/entities/finalCostSpy.repository';
import { FinalCostInMemoryRepository } from './finalCost-in-memory.repository';
import { FinalCostEntity } from '@/domain/entities/finalCost.entity';
import { FinalCostEntitySpy } from '@/domain/spy/finalCostSpy.entity';

const props = {
  priceWithPlan: 0,
  priceWithoutPlan: 0,
}
describe('Final Cost Repository', () => {
    let repository: FinalCostInMemoryRepository;
    let entity: FinalCostEntity = new FinalCostEntitySpy(props);
  
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        providers: [
          FinalCostInMemoryRepository,
          {
            provide: FinalCostEntity,
            useClass: FinalCostEntitySpy
          }
        ],
      }).compile();
  
      repository = app.get<FinalCostInMemoryRepository>(FinalCostInMemoryRepository);
    });
  
    describe('Final Cost Repository', () => {
      it('should return price with and without plan" as nulll if data is empty',  () => {
        const cost = {
          priceWithPlan: null,
          priceWithoutPlan: null
        }
        entity.updatePriceWithPlan(cost.priceWithPlan)
        entity.updatePriceWithoutPlan(cost.priceWithoutPlan)

        expect(repository.create(cost)).toStrictEqual(cost)

      });
      
      it('should return price with and without plan"',  () => {
        const cost = {
          priceWithPlan: 30,
          priceWithoutPlan: 80
        }
        entity.updatePriceWithPlan(cost.priceWithPlan)
        entity.updatePriceWithoutPlan(cost.priceWithoutPlan)

        expect(repository.create(cost)).toStrictEqual(cost)

      });
    });
  });