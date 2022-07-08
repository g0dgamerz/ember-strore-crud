import Route from '@ember/routing/route';

export default class ProductdetailRoute extends Route {
  model(params) {
    const { pid } = params;
    return pid;
  }
}
