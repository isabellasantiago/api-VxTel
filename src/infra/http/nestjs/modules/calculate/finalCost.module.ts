import { Module } from "@nestjs/common";
import { CalculateCostUseCase } from "@/application/usecases/calculate/calculateCost.usecase";
import { FinalCostController } from "./controller/finalCost.controller";
import { IFinalCostRepository } from "@/domain/repository/finalCost.repository";
import { FinalCostEntity } from "@/domain/entities/finalCost.entity";
import { FinalCostInMemoryRepository } from "@/infra/db/finalCost-in-memory.repository";

@Module({
    imports: [],
    providers: [
        {
            provide: CalculateCostUseCase,
            useFactory: (rep: IFinalCostRepository) => {
                return new CalculateCostUseCase(rep)
            },
            inject: [FinalCostEntity]
        },
        {
            provide: FinalCostInMemoryRepository,
            useClass: FinalCostInMemoryRepository
        }
    ],
    controllers: [FinalCostController]
})

export class FinalCostModule {}