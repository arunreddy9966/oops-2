class Dog{
constructor(){
    console.log("Inside Dog Constructor");
    this.noOfEyes=2;
    this.noOfEars=2;
    this.noOfLegs=4;
}

foodBehaviour=()=>{
    console.log("Dog hunts cats,rats and eat food and drink milk");
}
sleepingBehaviour=()=>{
    console.log("Dog sleeps in front of the house");
}
facingHuman=()=>{
    console.log("human slowly escaped from dog")
}
}
export default Dog;