import Component from '@glimmer/component';
import $ from 'jquery';

export default class TreatementListComponent extends Component {
  deleteProduct(product) {
    // product.destroyRecord();
    // product.save();
    // alert('record deleted');
    console.log(product.id);
    console.log('test');

    // eslint-disable-next-line ember/no-jquery
    return $.ajax({
      type: 'DELETE',
      url: 'https://localhost:7293/api/product?id=' + product.id,
      data: null,
      contentType: 'application/json',
    });
  }
}
