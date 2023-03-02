import { FinalCostEntity } from "@/domain/entities/finalCost.entity";
import { FinalCostModel } from "@/domain/model/finalCost.model";
import { IFinalCostRepository } from "@/domain/repository/finalCost.repository";

export class FinalCostInMemoryRepositorySpy implements IFinalCostRepository {
    private readonly finalCostEntity: FinalCostEntity

    create(cost: FinalCostModel): FinalCostModel {
        this.finalCostEntity.updatePriceWithPlan(cost.priceWithPlan);
        this.finalCostEntity.updatePriceWithoutPlan(cost.priceWithoutPlan);
        
        return this.finalCostEntity.toObject();
    }
}