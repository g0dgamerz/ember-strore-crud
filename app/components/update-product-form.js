import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class UpdateProductFormComponent extends Component {
  @service store;
  pname = '';
  descriptions = '';
  oprice = '';
  cprice = '';
  proimg = '';

  async handleCreate(event) {
    event.preventDefault();
    console.log(this.pname);
    const p = await this.store.createRecord('product', {
      pname: this.pname,
      descriptions: this.descriptions,
      oprice: this.oprice,
      cprice: this.cprice,
      proimg: this.proimg,
    });
    await p.save();
    location.replace('http://localhost:4200/');
  }
}