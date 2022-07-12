import EmberRouter from '@ember/routing/router';
import config from 'testpost/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('productdetail', { path: '/product/:pid' });
  this.route('not-found', { path: '/*path' });
  this.route('cart', { path: 'shopping-cart' });
  this.route('createproduct');
  this.route('productupdate', { path: '/getproductupdate/:pid' });
});
