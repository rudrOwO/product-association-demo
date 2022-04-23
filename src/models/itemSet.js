export default class ItemSet {
  listOfItems = new Set();
  supportCount = 0;

  constructor() {}

  getPrimaryKey() {
    const orderedString = [];

    for (const item of this.listOfItems) {
      orderedString.push(item);
    }

    orderedString.sort();
    return orderedString.toString();
  }

  addItem(itemID) {
    this.listOfItems.add(itemID);
  }

  join(otherSet) {
    const listOfItems = new Set();
    const newItemSet = new ItemSet();

    for (const item of this.listOfItems) {
      listOfItems.add(item);
    }

    for (const otherID of otherSet.listofIDs) {
      listOfItems.add(otherID);
    }

    newItemSet.listOfItems = listOfItems;
    return newItemSet;
  }

  getItemCount() {
    return this.listOfItems.size;
  }

  increaseSupportCount() {
    this.supportCount += 1;
  }
}
