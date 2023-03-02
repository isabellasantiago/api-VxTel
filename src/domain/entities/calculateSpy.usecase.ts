import { ICalculateCostUseCase } from "@/application/usecases/calculate/interface/calculate.interface";
import { FinalCostDTO } from "@/infra/http/nestjs/modules/finalCost/dto/finalCost.dto";
import { FinalCostModel } from "../model/finalCost.model";

export class CalculateUseCaseSpy implements ICalculateCostUseCase{
    calculate(data: FinalCostDTO): FinalCostModel {
        return {
            priceWithoutPlan: 10,
            priceWithPlan: 0
        }
    }
}