/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class CreateProductFormComponent extends Component {
  @service store;
  // pname = '';
  // descriptions = '';
  // oprice = '';
  // cprice = '';
  // proimg = '';
  async handleCreate(event) {
    event.preventDefault();
    console.log(this.pname);
    await this.store.createRecord('product', {
      pname:"this.pname",
      descriptions:"this.descriptions",
      oprice:32,
      cprice:21,
      proimg:'this.proimg'
    }).save();
      //   let product = this.store.createRecord('product', {
  //     // eslint-disable-next-line prettier/prettier
  // "pname": this.pname,
  // "descriptions": this.descriptions,
  // "oprice": this.oprice,
  // "cprice": this.cprice,
  // "proimg": this.proimg
  //   });
  //   try {
  //     await product.save();
  //     this.router.transitionTo('');
  //   } catch (error) {
  //     console.log(error);
  //   }

    // this.setProperties({
    //   pname: '',
    //   descriptions: '',
    //   oprice: '',
    //   cprice: '',
    //   proimg: '',
    // });
  }
}
