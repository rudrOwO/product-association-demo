import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import dataBase from "./services/dataBase";
import dummy from "./services/test";
console.log(dummy);

let numberOfPanels = 0;


function App() {
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="purchase">
          <Cart 
          
          dataBase={dataBase} setHistory={setHistory} />
        </div>
      </header>
    </div>
  );
}

export default App;
