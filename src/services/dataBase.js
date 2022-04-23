import ItemSet from "../models/itemSet";

export function showConfidence(itemSet1, itemSet2) {
  const numerator = itemSet1.supportCount;
  const denominator = itemSet2.supportCount;

  return numerator / denominator;
}

const dataBase = new Map();
const minimumSupportCount = 2;

///////////////////// C1 /////////////////////
let newItemSet = new ItemSet([1]);
newItemSet.supportCount = 6;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

newItemSet = new ItemSet([2]);
newItemSet.supportCount = 7;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

newItemSet = new ItemSet([3]);
newItemSet.supportCount = 6;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

newItemSet = new ItemSet([4]);
newItemSet.supportCount = 2;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

newItemSet = new ItemSet([5]);
newItemSet.supportCount = 2;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);
///////////////////////////////////////////////////////

///////////////////// C2 ///////////////////////////
newItemSet = new ItemSet([1, 2]);
newItemSet.supportCount = 4;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

newItemSet = new ItemSet([1, 3]);
newItemSet.supportCount = 4;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

newItemSet = new ItemSet([1, 4]);
newItemSet.supportCount = 1;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

newItemSet = new ItemSet([1, 5]);
newItemSet.supportCount = 2;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

newItemSet = new ItemSet([2, 3]);
newItemSet.supportCount = 2;
dataBase.set(newItemSet.getPrimaryKey(), newItemSet);

///////////////////////////////////////////////////////

// showConfidence(dataBase.get("1,2"), dataBase.get("1"));

// console.log(dataBase.get("1,2").supportCount)

// console.log(dataBase);

export default dataBase;
