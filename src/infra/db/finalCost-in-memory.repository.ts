import { FinalCostEntity } from "@/domain/entities/finalCost.entity";
import { FinalCostModel } from "@/domain/model/finalCost.model";
import { IFinalCostRepository } from "@/domain/repository/finalCost.repository";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class FinalCostInMemoryRepository implements IFinalCostRepository {

    constructor(){}

    create(cost: FinalCostModel): FinalCostModel {
        const finalCost = new FinalCostEntity(cost)
       finalCost.updatePriceWithPlan(cost.priceWithPlan)
       finalCost.updatePriceWithoutPlan(cost.priceWithoutPlan)
        
       
        return finalCost.toObject();
    }
}