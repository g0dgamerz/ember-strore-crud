import Model, { attr } from '@ember-data/model';

export default class ClaimsModel extends Model {
  @attr ClaimedDate;
  @attr ClaimValidStatus;
  @attr ssn;
  @attr amountClaimed;
}
