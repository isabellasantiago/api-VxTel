import { PlanEnum } from "src/common/enums/plans.enum";

export function surplusCostFactory(plan: PlanEnum, minutes: number, cost: number) {
    if (plan > minutes) return 0;
    const minutesLeft = minutes - plan;
    const surplusFee = cost * 0.10
    const costIncreased = surplusFee + cost;

    const value =  minutesLeft * costIncreased;
    return value;
}