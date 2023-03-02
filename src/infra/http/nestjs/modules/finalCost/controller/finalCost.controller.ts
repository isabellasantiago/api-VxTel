import { Body, Controller, Inject, Put, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FinalCostModel } from "../../../../../../domain/model/finalCost.model";
import { CalculateCostUseCase } from "../../../../../../application/usecases/calculate/calculateCost.usecase";
import { FinalCostDTO } from "../dto/finalCost.dto";

@ApiTags('Calculate Final Cost')
@Controller('finalCost')
export class FinalCostController {
    constructor(
        @Inject(CalculateCostUseCase) private readonly calculateCostUseCase: CalculateCostUseCase,
    ){}

    @Put('/')
    calculate(
        @Body(new ValidationPipe({ transform: true })) data: FinalCostDTO,
    ): FinalCostModel{
        return this.calculateCostUseCase.calculate(data)
    }
}