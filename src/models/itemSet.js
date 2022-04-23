export default class ItemSet {
  listOfItems = new Set();
  supportCount = 0;

  constructor() {}

  getPrimaryKey() {
    let str = "";
    for (const item of this.listOfItems) {
      str += item;
    }
    return str;
  }

  addItem(itemID) {
    this.listOfItems.add(itemID);
  }

  join(otherSet) {
    const newItemSet = new Set();

    for (const item of this.listOfItems) {
      newItemSet.add(item);
    }

    for (const otherID of otherSet.listofIDs) {
      newItemSet.add(otherID);
    }

    return newItemSet;
  }

  getItemCount() {
    return this.listOfItems.size;
  }

  increaseSupportCount() {
    this.supportCount += 1;
  }
}
