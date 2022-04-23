import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import dataBase from "./services/dataBase";
import dummy from "./services/test";
import Confidence from "./components/Confidence";

let numberOfPanels = 0;

function App() {
  const [conf, setConf] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="purchase">
          <Cart
            isPurchase={true}
            title={"purchase panel"}
            dataBase={dataBase}
            setConf={setConf}
          />
          <Cart
            title={"confidence panel"}
            isPurchase={false}
            dataBase={dataBase}
            setConf={setConf}
          />
        </div>
        <Confidence conf={conf} />
      </header>
    </div>
  );
}

export default App;
