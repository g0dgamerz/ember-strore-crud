import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminClaimsRoute extends Route {
  @service store;

  model() {
    console.log(this.store.findAll('claims'));
    return this.store.findAll('claims');
  }
}
