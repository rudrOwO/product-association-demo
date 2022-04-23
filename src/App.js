import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import History from "./components/History";
import dataBase from "./services/dataBase";

/*
Components I need:

Item
Transaction ?
Shopping Cart

Support Count Display
Minimum Support selector

Confidence Displayer
*/

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="purchase">
          <Cart dataBase={dataBase} setHistory={setHistory} />
          <History history={history} />
        </div>
      </header>
    </div>
  );
}

export default App;
