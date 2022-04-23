import "./App.css";
import Cart from "./components/Cart";
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
  return (
    <div className="App">
      <header className="App-header">
        <Cart dataBase={dataBase} />
      </header>
    </div>
  );
}

export default App;
