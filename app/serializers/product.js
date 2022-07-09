import RESTSerializer from '@ember-data/serializer/rest';

export default class ProductSerializer extends RESTSerializer {
  serializeAttribute(snapshot, json, key, attributes) {
    json.attributes = json.attributes || {};
    super.serializeAttribute(snapshot, json.attributes, key, attributes);
  }
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { product: payload };
    console.log(payload);
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
