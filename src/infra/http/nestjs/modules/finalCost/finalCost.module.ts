import { Module } from "@nestjs/common";
import { CalculateCostUseCase } from "@/application/usecases/calculate/calculateCost.usecase";
import { FinalCostController } from "./controller/finalCost.controller";
import { FinalCostInMemoryRepository } from "@/infra/db/finalCost-in-memory.repository";
import { FinalCostEntity } from "@/domain/entities/finalCost.entity";

@Module({
    imports: [],
    providers: [
        CalculateCostUseCase,
        FinalCostInMemoryRepository,
        FinalCostEntity
    ],
    controllers: [FinalCostController]
})

export class FinalCostModule {}