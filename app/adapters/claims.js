/* eslint-disable ember/no-jquery */
import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class ClaimsAdapter extends RESTAdapter {
  @service store;
  namespace = 'api';
  host = 'https://localhost:7293';
  pathForType(claims) {
    return claims;
  }
  destroyRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    console.log(data.claims);
    alert(1);
    return $.ajax({
      type: 'DELETE',
      url: `${this.host}/${this.namespace}/${type.modelName}`,
      data: JSON.stringify(data.claims),
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
      data: JSON.stringify(data.claims),
      contentType: 'application/json',
    });
  }
}
