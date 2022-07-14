import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class TreatementsComponent extends Component {
  @service store;
  ClaimedDate = '';
  ClaimedValidStatus = '';
  ssn = '';
  amountClaimed = '';

  async handleUpdate(event) {
    event.preventDefault();
    console.log(this.ClaimedDate);
    const p = await this.store.createRecord('claim', {
      ClaimedDate: this.ClaimedDate,
      ClaimedValidStatus: this.ClaimedValidStatus,
      ssn: this.ssn,
      amountClaimed: this.amountClaimed,
    });
    await p.save();
  }
}
