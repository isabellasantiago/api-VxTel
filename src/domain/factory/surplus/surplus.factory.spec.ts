import { PlanEnum } from "@/common/enums/plans.enum";
import { surplusCostFactory } from "./surplus.factory";

describe('Surplus factory', () => {
    it('should return 0 if plan is more than minutes', () => {
        const input = {
            plan: PlanEnum.FALEMAIS_30,
            minutes: 20,
            cost: 1.90
        }

        const surplus = surplusCostFactory(input.plan, input.minutes, input.cost);

        expect(surplus).toBe(0);
    })

    it('should return the value of minutes left with a increase of 10% in the price per minute', () => {
        const input = {
            plan: PlanEnum.FALEMAIS_30,
            minutes: 40,
            cost: 1.90
        }

        const surplus = surplusCostFactory(input.plan, input.minutes, input.cost);

        const fee = (input.cost * 0.10) + input.cost
        const cost = (input.minutes - input.plan) * fee
        const percentageIncreased = Math.round(((fee - input.cost) / input.cost) * 100)

        expect(surplus).toBe(cost)
        expect(percentageIncreased).toBe(10)
    })
})