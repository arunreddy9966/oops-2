import logo from './logo.svg';
import './App.css';
import Dog from './Classes/Dog';
import Fox from './Classes/Fox';

function App() {

  let bow= new Dog();
  bow.noOfLegs=4;
  bow.foodBehaviour();
  bow.sleepingBehaviour();
  bow.facingHuman();


  let foxes=new Fox();
  foxes.foodBehaviour();
  foxes.sleepingBehaviour();
  foxes.facingHuman();

  foxes.calculateResult();
  foxes.calculateResult(1);
  foxes.calculateResult(1,2);
  foxes.calculateResult(1,2,3);
  foxes.calculateResult(1,2,3,4,5,6);
  return (
    <div className="App">
      <h1>Learning oops-2</h1>
       <h3>inheritance</h3>
       <h3>polymorphism</h3>
       <h3>encapsulation</h3>
       <h3>composition</h3>
    </div>
  );
}

export default App;
