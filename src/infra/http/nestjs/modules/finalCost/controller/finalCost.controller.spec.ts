import { CalculateCostUseCase } from '@/application/usecases/calculate/calculateCost.usecase';
import { DDDEnum } from '@/common/enums/ddd.enum';
import { CalculateUseCaseSpy } from '@/domain/entities/calculateSpy.usecase';
import { FinalCostModel } from '@/domain/model/finalCost.model';
import { Test, TestingModule } from '@nestjs/testing';
import { FinalCostController } from './finalCost.controller';

describe('Final Cost Controller', () => {
  let controller: FinalCostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinalCostController],
      providers: [CalculateCostUseCase],
    })
      .overrideProvider(CalculateCostUseCase)
      .useClass(CalculateUseCaseSpy)
      .compile();

    controller = module.get<FinalCostController>(FinalCostController);
  });

  describe('Final Cost Controller', () => {
    it('should return price with and without plan"', async () => {
        const dto = {
            plan: 30,
            from: DDDEnum.SAO_PAULO,
            to: DDDEnum.BARRINHAS_REGIAO,
            minutes: 50
        }

        expect(await controller.calculate(dto)).toMatchObject(new FinalCostModel());
    });
  });
});
