/* eslint-disable ember/no-jquery */
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class ProductEditComponent extends Component {
  @service store;
  pname = '';
  descriptions = '';
  oprice = '';
  cprice = '';
  proimg = '';
  async handleUpdate(event) {
    let data = {};
    event.preventDefault();
    // eslint-disable-next-line ember/no-jquery
    var pname = $('#pname').val();
    console.log(pname);
    var id = $('#id').val();
    console.log(id);
    var descriptions = $('#description').val();
    var oprice = $('#oprice').val();
    var cprice = $('#cprice').val();
    var proimg = $('#proimg').val();
    data = {
      id: id,
      pname: pname,
      descriptions: descriptions,
      oprice: oprice,
      cprice: cprice,
      proimg: proimg,
    };
    const myTimeOut = setTimeout(funcl, 2000);
    function funcl() {
      alert('Inserted Sucessfully');
      location.replace('http://localhost:4200/admin/treatements');
    }
    console.log(myTimeOut);
    return $.ajax({
      type: 'PUT',
      url: 'https://localhost:7293/api/product/' + id,
      data: JSON.stringify(data),
      contentType: 'application/json',
    });
    // eslint-disable-next-line no-unreachable
    //alert('inserted sucessfully');

    // const p = await this.store.updateRecord('product', {
    //   pname: this.pname,
    //   descriptions: this.descriptions,
    //   oprice: this.oprice,
    //   cprice: this.cprice,
    //   proimg: this.proimg,
    // });
    // await p.save();
    // location.replace('http://localhost:4200/');
  }
}
