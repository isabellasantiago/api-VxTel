import { CalculateCostUseCase } from '@/application/usecases/calculate/calculateCost.usecase';
import { DDDEnum } from '@/common/enums/ddd.enum';
import { FinalCostInMemoryRepositorySpy } from '@/domain/entities/finalCostSpy.repository';
import { FinalCostModel } from '@/domain/model/finalCost.model';
import { FinalCostInMemoryRepository } from '@/infra/db/finalCost-in-memory.repository';
import { FinalCostDTO } from '@/infra/http/nestjs/modules/finalCost/dto/finalCost.dto';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('Calculate Use Case', () => {
  let usecase: CalculateCostUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CalculateCostUseCase,
        {
          provide: FinalCostInMemoryRepository,
          useClass: FinalCostInMemoryRepositorySpy
        }
      ],
    }).compile();

    usecase = module.get<CalculateCostUseCase>(CalculateCostUseCase);
  });

  describe('Calculate Cost Use Case', () => {
    it('should return a BadRequestException if params were invalid"', () => {
        const emptyData = {} as FinalCostDTO
        expect(() => usecase.calculate(emptyData)).toThrow(new BadRequestException("Invalid Params"))
    });

    it('should return price with and without plan"', () => {
      const dto = {
          plan: 30,
          from: DDDEnum.SAO_PAULO,
          to: DDDEnum.BARRINHAS_REGIAO,
          minutes: 50
      }

      expect(usecase.calculate(dto)).toMatchObject(new FinalCostModel())
    });
  });
});
