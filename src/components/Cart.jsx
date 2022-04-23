import { useState } from "react";
import ItemSet from "../models/itemSet";
import Item from "./Item";

const Cart = ({ dataBase }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  //   const [boxChecked, setBoxChecked] = useState(false);

  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      <Item itemID={1} setCheckedItems={setCheckedItems} />
      <Item itemID={2} setCheckedItems={setCheckedItems} />
      <Item itemID={3} setCheckedItems={setCheckedItems} />
      <Item itemID={4} setCheckedItems={setCheckedItems} />
      <Item itemID={5} setCheckedItems={setCheckedItems} />
      <button
        className="btn btn-danger check-out"
        onClick={e => {
          const newItemSet = new ItemSet();

          for (const itemID of checkedItems) {
            newItemSet.addItem(itemID);
          }

          const key = newItemSet.getPrimaryKey();
          if (dataBase.has(key)) dataBase.get(key).increaseSupportCount();
          else dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

          console.log(dataBase);
        }}
      >
        CheckOut
      </button>
    </div>
  );
};

export default Cart;
