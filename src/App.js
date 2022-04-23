import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import History from "./components/History";
import dataBase from "./services/dataBase";
import dummy from "./services/test";
console.log(dummy);


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
