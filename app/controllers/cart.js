import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  //@service shoppingCart; //from filename to use custom name refer below
  @service('shopping-cart') cart; //and change in cart.hbs
  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.cprice * item.count;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
}
