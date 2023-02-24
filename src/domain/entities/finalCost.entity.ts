import { Injectable } from "@nestjs/common";

export type FinalCostProps = {
    priceWithPlan: number;
    priceWithoutPlan: number;
}


export class FinalCostEntity {
    public props: Required<FinalCostProps>

    constructor(props: FinalCostProps){
        this.props = props;
    }

    updatePriceWithPlan(priceWithPlan: number) {
        this.props.priceWithPlan = priceWithPlan;
    }

    updatePriceWithoutPlan(priceWithoutPlan: number){
        this.props.priceWithoutPlan = priceWithoutPlan;
    }

    toJSON(){
        return{
            ...this.props
        }
    }
}
