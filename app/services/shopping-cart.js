import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    console.log(item);
    this.itemList = [...this.itemList, item];
  }
}
