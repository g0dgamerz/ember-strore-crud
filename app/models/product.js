import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') pname;
  @attr('string') descriptions;
  @attr('number') oprice;
  @attr('number') cprice;
  @attr('string') proimg;
}
