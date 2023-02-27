import { ApiProperty } from "@nestjs/swagger";
import { DDDEnum } from "src/common/enums/ddd.enum";
import { PlanEnum } from "src/common/enums/plans.enum";

export class FinalCostDTO {
    @ApiProperty()
    plan: PlanEnum;

    @ApiProperty()
    minutes: number;

    @ApiProperty()
    from: DDDEnum;

    @ApiProperty()
    to: DDDEnum;
}