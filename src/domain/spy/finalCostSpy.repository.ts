import { FinalCostEntity } from "@/domain/entities/finalCost.entity";
import { FinalCostModel } from "@/domain/model/finalCost.model";
import { IFinalCostRepository } from "@/domain/repository/finalCost.repository";

export const FinalCostInMemoryRepositorySpy: jest.Mocked<IFinalCostRepository> = {
  create: jest.fn((cost: FinalCostModel) => {
    const finalCost = new FinalCostEntity(cost)
    finalCost.updatePriceWithPlan(cost.priceWithPlan)
    finalCost.updatePriceWithoutPlan(cost.priceWithoutPlan)

    return finalCost.toObject();
  })
};