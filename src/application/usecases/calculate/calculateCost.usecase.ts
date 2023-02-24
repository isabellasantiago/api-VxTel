import { FinalCostModel } from "@/domain/model/finalCost.model";
import { IFinalCostRepository } from "@/domain/repository/finalCost.repository";
import { costFactory, surplusCostFactory } from "@/domain/factory";
import { CalculateDTO } from "@/infra/http/nestjs/modules/calculate/dto/calculate.dto";
import { ICalculateCostUseCase } from "./interface/calculate.interface";


export class CalculateCostUseCase implements ICalculateCostUseCase{
    constructor(
        private readonly finalCostRepository: IFinalCostRepository
    ){}

    async calculate({ plan, from, to, minutes } : CalculateDTO): Promise<FinalCostModel> {
        const cost = costFactory(from, to);

        const priceWithPlan = surplusCostFactory(plan, minutes, cost);

        const priceWithoutPlan = cost * minutes;

        const finalCost = {
            priceWithPlan,
            priceWithoutPlan,
        }

        return finalCost;
    }
}