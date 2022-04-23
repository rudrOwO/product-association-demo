export default class ItemSet {
  listOfItems = new Set();

  constructor(itemID) {
    this.value.add(itemID);
  }

  toString() {
    let str = "";
    for (const item of this.listOfItems) {
      str += item;
    }
    return str;
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
}
