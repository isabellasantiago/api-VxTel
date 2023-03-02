
export class FinalCostEntitySpy {
    public props: {
        priceWithPlan: number,
        priceWithoutPlan: number,
    }
    constructor(props: {
        priceWithPlan: number,
        priceWithoutPlan: number
    }){
        this.props = props
    }
    
    getPriceWithPlan() {
        return this.props.priceWithPlan;
    }
    
    updatePriceWithPlan(newData: number) {
        this.props.priceWithPlan = newData
    }
      
    
    getPriceWithoutPlan(){
        return this.props.priceWithoutPlan
    }
    
    
    updatePriceWithoutPlan(newData: number){
        this.props.priceWithoutPlan = newData
    }
    
    toObject() {
      return{
        priceWithPlan: this.props.priceWithPlan,
        priceWithoutPlan: this.props.priceWithoutPlan,
      }
    }

}