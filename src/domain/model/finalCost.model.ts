import { ApiProperty } from '@nestjs/swagger';

export class FinalCostModel {
    @ApiProperty({
        description: 'Final price with chosen plan'
    })
    priceWithPlan: number;

    @ApiProperty({
        description: 'Final price without any plan'
    })
    priceWithoutPlan: number;
}