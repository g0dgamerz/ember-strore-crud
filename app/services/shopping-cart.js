import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;
  src;
  pname;
  cprice;
  constructor(item) {
    this.count = item.count;
    this.src = item.src;
    this.pname = item.pname;
    this.cprice = item.cprice;
  }
}
export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find(({ pname }) => {
      return pname === item.pname;
    });
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
        }),
      ];
    }
  }
}
