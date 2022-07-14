import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class UpdateProductFormComponent extends Component {
  @service store;
  pname = '';
  descriptions = '';
  oprice = '';
  cprice = '';
  proimg = '';

  async handleUpdate(event) {
    event.preventDefault();
    // eslint-disable-next-line ember/no-jquery
    var pname = $('#pname').val();
    console.log(pname);
    // const p = await this.store.createRecord('product', {
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
