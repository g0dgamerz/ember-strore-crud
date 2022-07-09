import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  //@service shoppingCart; //from filename to use custom name refer below
  @service('shopping-cart') cart; //and change in cart.hbs
  get subtotal() {
    return this.model.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
