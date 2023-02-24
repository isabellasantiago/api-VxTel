import { ApiProperty } from '@nestjs/swagger';

export class FinalCostModel {
    @ApiProperty({
        description: 'Preço final com o plano escolhido'
    })
    priceWithPlan: number;

    @ApiProperty({
        description: 'Preço final sem nenhum plano'
    })
    priceWithoutPlan: number;
}