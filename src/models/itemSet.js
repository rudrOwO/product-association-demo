export default class ItemSet {
  listOfItems = new Set();
  supportCount = 0;

  constructor(array) {
    for (const item of array) this.listOfItems.add(item);
  }

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
    const newItemSet = new ItemSet([]);

    for (const item of this.listOfItems) {
      newItemSet.addItem(item);
    }

    for (const otherID of otherSet.listOfItems) {
      newItemSet.addItem(otherID);
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
