import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class CreateProductFormComponent extends Component {
  @service store;
  pname = '';
  descriptions = '';
  oprice = '';
  cprice = '';
  proimg = '';
  async handleCreate(event) {
    event.preventDefault();
    alert(this.event.target.pname);
    const post = this.store.createRecord('product', {
      pname: this.pname,
      descriptions: this.descriptions,
      oprice: this.oprice,
      cprice: this.oprice,
      proimg: this.proimg,
    });
    await post.save();
    // this.setProperties({
    //   pname: '',
    //   descriptions: '',
    //   oprice: '',
    //   cprice: '',
    //   proimg: '',
    // });
  }
}
