export type FinalCostProps = {
    priceWithPlan: number;
    priceWithoutPlan: number;
}


export class FinalCostEntity {

    constructor(
        public props: FinalCostProps
    ){}

    getPriceWithPlan(): number {
        return this.props.priceWithPlan
    }

    updatePriceWithPlan(priceWithPlan: number) {
        this.props.priceWithPlan = priceWithPlan;
    }

    getPriceWithoutPlan(): number {
        return this.props.priceWithoutPlan
    }

    updatePriceWithoutPlan(priceWithoutPlan: number){
        this.props.priceWithoutPlan = priceWithoutPlan;
    }

    toObject(){
        return{
            priceWithPlan: this.props.priceWithPlan,
            priceWithoutPlan: this.props.priceWithoutPlan
        }
    }
}
