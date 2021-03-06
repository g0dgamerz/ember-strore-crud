import RESTAdapter from '@ember-data/adapter/rest';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapter {
  @service store;
  namespace = 'api';
  host = 'https://localhost:7293';
  pathForType(product) {
    return product;
  }
  updateRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    // eslint-disable-next-line ember/no-jquery
    return $.ajax({
      type: 'PUT',
      url: `${this.host}/${this.namespace}/${type.modelName}/${snapshot.id}`,
      data: JSON.stringify(data.product),
      contentType: 'application/json',
    });
  }
  createRecord(store, type, snapshot) {
    let data = {};
    console.log(snapshot);
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);

    // eslint-disable-next-line ember/no-jquery
    return $.ajax({
      type: 'POST',
      url: `${this.host}/${this.namespace}/${type.modelName}`,
      data: JSON.stringify(data.product),
      contentType: 'application/json',
    });
  }
}
