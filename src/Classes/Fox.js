import Dog from "./Dog";

class Fox extends Dog{
    constructor(){
    super();
    console.log("Inside Fox Constructor")
    }

    foodBehaviour=()=>{
    console.log("Fox hunts rabits,birds,frogs and eat.");
    }
    sleepingBehaviour=()=>{
    console.log("Fox sleeps in forest.")
    }
    facingHuman=()=>{
    console.log("Fox runs away from human.")
    }


    calculateResult=()=>{
    console.log("0 parameters");
    }
    calculateResult=(a)=>{
     console.log("1 parameters");
     }
    calculateResult=(a,b)=>{
    console.log("2 parameters");
     }
    calculateResult=(a,b,c)=>{
     console.log("3 parameters");
    }
}
export default Fox;