import { FinalCostModel } from "@/domain/model/finalCost.model";
import { CalculateDTO } from "@/infra/http/nestjs/modules/calculate/dto/calculate.dto";

export interface ICalculateCostUseCase {
    calculate(input: CalculateDTO): Promise<FinalCostModel>;
}

