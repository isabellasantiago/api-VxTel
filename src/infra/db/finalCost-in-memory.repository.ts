import { FinalCostEntity } from "@/domain/entities/finalCost.entity";
import { FinalCostModel } from "@/domain/model/finalCost.model";
import { IFinalCostRepository } from "@/domain/repository/finalCost.repository";

export class FinalCostInMemoryRepository implements IFinalCostRepository {
    private finalCost: FinalCostEntity

    async create(cost: FinalCostModel): Promise<FinalCostModel> {
       this.finalCost.updatePriceWithPlan(cost.priceWithPlan)
       this.finalCost.updatePriceWithoutPlan(cost.priceWithoutPlan)
        
       
        return this.finalCost.toJSON();
    }
}