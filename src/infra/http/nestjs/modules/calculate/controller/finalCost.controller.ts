import { Body, Controller, Inject, Post, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FinalCostModel } from "@/domain/model/finalCost.model";
import { CalculateCostUseCase } from "@/application/usecases/calculate/calculateCost.usecase";
import { CalculateDTO } from "../dto/calculate.dto";

@ApiTags('Calculate Final Cost')
@Controller('finalCost')
export class FinalCostController {
    constructor(
        @Inject(CalculateCostUseCase) private readonly calculateCostUseCase: CalculateCostUseCase,
    ){}

    @Post('/')
    async calculate(
        @Body(new ValidationPipe({ transform: true })) data: CalculateDTO,
    ): Promise<FinalCostModel> {
        return await this.calculateCostUseCase.calculate(data)
    }
}