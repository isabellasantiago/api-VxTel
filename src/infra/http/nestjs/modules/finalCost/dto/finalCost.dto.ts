import { ApiProperty } from "@nestjs/swagger";
import { DDDEnum } from "@/common/enums/ddd.enum";
import { PlanEnum } from "@/common/enums/plans.enum";
import { IsNotEmpty, IsEnum, IsNumber } from "class-validator";

export class FinalCostDTO {
    @ApiProperty({
        enum: PlanEnum,
        description: 'This is the plan, you can insert values as 30 (FaleMais30), 60 (FaleMais60) or 120 (FaleMais120)',
    })
    @IsNotEmpty()
    @IsEnum(PlanEnum)
    plan: PlanEnum;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    minutes: number;

    @ApiProperty({
        enum: DDDEnum,
        description: `This the DDD you are calling from, you can insert values as '011', '016', '017' or '018'`
    })
    @IsNotEmpty()
    @IsEnum(DDDEnum)
    from: DDDEnum;

    @ApiProperty({
        enum: DDDEnum,
        description: `This the DDD you are calling to, you can insert values as '011', '016', '017' or '018'`,
    })
    @IsNotEmpty()
    @IsEnum(DDDEnum)
    to: DDDEnum;
}