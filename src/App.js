import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products = ["rakib", "jamal", "kamal", "Hasu", "khatun"]
  return (
    <div className="App">

      <Count></Count>
      {
        products.map(product => <li> Name:{product}</li>)
      }
      {
        products.map(product => <Product name={product}> </Product>)
      }
      {/* <Product name="rakib" age="16"></Product>
      <Product name="rakib" age="16"></Product>
      <Product name="rakib" age="16"></Product> */}


    </div>
  );
}
function Product(props) {
  return (
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>{props.age}</p>
    </div>
  )
}
function Count() {
  const [count, setCount] = useState(33);
  const increesCount = () => setCount(count + 1);
  const decressCount = () => setCount(count - 1);
  return (
    <div>
      <h3>Count :{count}</h3>
      <button onClick={increesCount}>Increes</button>
      <button onClick={decressCount}>Decress</button>
    </div>
  )
}
export default App;
