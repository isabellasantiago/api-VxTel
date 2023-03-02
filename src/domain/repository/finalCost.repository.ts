import { FinalCostModel } from "@/domain/model/finalCost.model";

export interface IFinalCostRepository {
    create(finalCost: FinalCostModel): FinalCostModel;
}