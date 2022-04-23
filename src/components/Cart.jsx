import { useState, useRef } from "react";
import ItemSet from "../models/itemSet";
import Item from "./Item";
import { showConfidence } from "../services/dataBase";

const Cart = ({ dataBase, setHistory, isPurchase, title, setConf }) => {
  const [leftInput, setLeft] = useState("");
  const [rightInput, setRight] = useState("");

  // console.log(leftInput);
  // console.log(rightInput);

  return (
    <div className="cart">
      <h3>{title}</h3>
      <span>
        <Item itemID={1} setCheckedItems={setLeft} />
        <span className="item-text">
          {isPurchase ? <span>{"x "}</span> : <span> {"/ "}</span>}
        </span>
        <Item itemID={1} setCheckedItems={setRight} />
      </span>
      <button
        className="btn btn-danger check-out"
        onClick={e => {
          if (isPurchase) {
            const itemsArray = leftInput.split(",").map(s => parseInt(s));
            const userSupportCount = parseInt(rightInput);
            const newItemSet = new ItemSet(itemsArray);
            const key = newItemSet.getPrimaryKey();

            if (dataBase.has(key)) {
              dataBase
                .get(newItemSet.getPrimaryKey())
                .increaseSupportCount(userSupportCount);
            } else {
              newItemSet.supportCount = userSupportCount;
              dataBase.set(newItemSet.getPrimaryKey(), newItemSet);
            }
          } else {
            console.log(leftInput, rightInput);
            let confidence = showConfidence(
              dataBase.get(leftInput),
              dataBase.get(rightInput)
            );
            console.log(dataBase);
            setConf(confidence);
          }
        }}
      >
        Process
      </button>
    </div>
  );
};

export default Cart;
