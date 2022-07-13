import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminTreatementsRoute extends Route {
  @service store;

  model() {
    console.log(this.store.findAll('product'));
    return this.store.findAll('product');
  }
}
