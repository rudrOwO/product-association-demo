import { useState, useRef } from "react";
import ItemSet from "../models/itemSet";
import Item from "./Item";

const Cart = ({ dataBase, setHistory }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  console.log(checkedItems);

  return (
    <div className="cart">
      <h3>Purchase Panel</h3>
    <span>

      <Item itemID={1} setCheckedItems={setCheckedItems} />
      <span className="item-text">X </span>
      <Item itemID={1} setCheckedItems={setCheckedItems} />
    </span>
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

          setHistory([...checkedItems]);

          //   checkedList.prototype.forEach(inp => {
          //     inp.checked = false;
          //   });

        }}
      >
        Process
      </button>
    </div>
  );
};

export default Cart;
