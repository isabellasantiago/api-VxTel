import { FinalCostModel } from "@/domain/model/finalCost.model";
import { FinalCostDTO } from "@/infra/http/nestjs/modules/finalCost/dto/finalCost.dto";

export interface ICalculateCostUseCase {
    calculate(input: FinalCostDTO): FinalCostModel;
}

