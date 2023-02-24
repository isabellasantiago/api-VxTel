import { FinalCostModel } from "@/domain/model/finalCost.model";
import { FinalCostEntity } from "../entities/finalCost.entity";

export interface IFinalCostRepository {
    create(finalCost: FinalCostModel): Promise<FinalCostModel>
}