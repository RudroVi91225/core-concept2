import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products = ["rakib", "jamal", "kamal", "Hasu", "khatun"];
  const shops = [
    { Name: "Laptop", Price: 150000 },
    { Name: "Phone", Price: 15030 },
    { Name: "Watch", Price: 1500 },
    { Name: "Tab", Price: 500 },
  ]
  return (
    <div className="App">

      <Count></Count>
      {
        products.map(product => <li> Name:{product}</li>)
      }
      {
        products.map(product => <Product name={product} > </Product>)

      }
      {/* <Product name="rakib" age="16"></Product>
      <Product name="rakib" age="16"></Product>
      <Product name="rakib" age="16"></Product> */}
      {
        shops.map(shop => <Shop name={shop.Name} price={shop.Price} ></Shop>)
      }
      {/* <Shop></Shop> */}

    </div>
  );
}
function Product(props) {
  return (
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Age:{props.age}</p>
    </div>
  )
}
function Shop(props) {
  return (
    <div className='shopProduct'>
      <h1>Name:{props.name}</h1>
      <p>Price:{props.price}</p>
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
