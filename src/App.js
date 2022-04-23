import "./App.css";
import Item from "./components/Item";
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
        <Item itemID={1} />
      </header>
    </div>
  );
}

export default App;
