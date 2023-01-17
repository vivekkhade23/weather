import "./App.css";
import data from "./db.json";
import {useState} from "react"
import Product from "./components/Product";
import Total from "./components/Total";

function calculateTotal(products) {
  return products.reduce((acc, c) => acc + c.quantity * c.price, 0);
}


function App() {
const [prod,setProd] = useState(data)
console.log(prod)

  const handleQty = (id, amount) => {
console.log(id,"id",prod)
    let updatedData = prod.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + amount
        };
      } else {
        return item;
      }
    });
    setProd(updatedData);
  };
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products"       style={{ color: "tomato", border: "2px solid tomato", padding: "25px" }}
>
        {/*  map through the  data and pass props to the Product component */}

{
  prod.map((item) => (
    <Product
      key={item.id}
      name={item.name}
      id={item.id}
      price={item.price}
      quantity={item.quantity}
      handleQty={handleQty}
    />
  ))
}

      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
<Total total={calculateTotal(prod)} />

      </h1>
    </div>
  );
}

export default App;
