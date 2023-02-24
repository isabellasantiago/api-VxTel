import { PlanEnum } from "src/common/enums/plans.enum";

export function surplusCostFactory(plan: PlanEnum, minutes: number, cost: number) {
    if(plan < minutes) return 0;

    const value = (minutes - plan) * (cost * 0.10);
    return value;
}