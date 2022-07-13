import Model, { attr } from '@ember-data/model';

export default class ClaimsModel extends Model {
  @attr('string') ClaimedDate;
  @attr ClaimValidStatus;
  @attr('string') ssn;
  @attr('number') amountClaimed;
}
