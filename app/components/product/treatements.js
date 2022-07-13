import Component from '@glimmer/component';

export default Component.extend({
  deleteProduct(product) {
    product.destroyRecord();
  },
});
