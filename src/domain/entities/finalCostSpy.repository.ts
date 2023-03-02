import { FinalCostEntity } from "@/domain/entities/finalCost.entity";
import { FinalCostModel } from "@/domain/model/finalCost.model";
import { IFinalCostRepository } from "@/domain/repository/finalCost.repository";

export class FinalCostInMemoryRepositorySpy implements IFinalCostRepository {
    create(cost: FinalCostModel): FinalCostModel {
        const finalCostEntity = new FinalCostEntity(cost)
        finalCostEntity.updatePriceWithPlan(cost.priceWithPlan);
        finalCostEntity.updatePriceWithoutPlan(cost.priceWithoutPlan);
        
        return finalCostEntity.toObject();
    }
}