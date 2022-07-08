import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const products = [{ price: 10 }, { price: 15 }];
    return products;
  }
}
