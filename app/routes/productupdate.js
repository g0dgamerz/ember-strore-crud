import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProductupdateRoute extends Route {
  @service store;
  model({ pid }) {
    return this.store.find('product', pid);
  }
}
