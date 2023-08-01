import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      <Users></Users>

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
// Show the Counter increes and decress 47/7
function Count() {
  const [count, setCount] = useState(33);
  const increesCount = () => setCount(count + 1);
  const decressCount = () => setCount(count - 1);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={increesCount}>Increes</button>
      <button onClick={decressCount}>Decress</button>
    </div>
  )
}
// Show the api file from Json PlaceHolder 47/8
function Users() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setusers(data))
  }, [])
  // console.log(users);
  return (
    <div>
      <h1>Users Data</h1>
      <p>{users.length}</p>
      {
        users.map(user => <ExternalUser id={user.id} name={user.name} email={user.email}></ExternalUser>)
      }
    </div>
  )
}
function ExternalUser(props) {
  return (
    <div style={{
      border: '2px solid red ', margin: '20px'
    }}>
      <p>ID:{props.id}</p>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
    </div>
  )
}
export default App;
