import { BadRequestException, Inject } from "@nestjs/common";
import { FinalCostModel } from "@/domain/model/finalCost.model";
import { IFinalCostRepository } from "@/domain/repository/finalCost.repository";
import { costFactory, surplusCostFactory } from "@/domain/factory";
import { FinalCostDTO } from "@/infra/http/nestjs/modules/finalCost/dto/finalCost.dto";
import { ICalculateCostUseCase } from "./interface/calculate.interface";
import { FinalCostInMemoryRepository } from "@/infra/db/finalCost-in-memory.repository";


export class CalculateCostUseCase implements ICalculateCostUseCase {

    constructor(
        @Inject(FinalCostInMemoryRepository) private readonly finalCostRepository: FinalCostInMemoryRepository
    ){}

    calculate(data : FinalCostDTO): FinalCostModel {
        if (!data) new BadRequestException("Invalid Params");

        const { plan, from, to, minutes } = data;
        const cost = costFactory(from, to);

        const priceWithPlan = surplusCostFactory(plan, minutes, cost);

        const priceWithoutPlan = cost * minutes;

        const props = {
            priceWithPlan,
            priceWithoutPlan,
        }
        const  finalCost = this.finalCostRepository.create(props)

        return finalCost;
    }
}