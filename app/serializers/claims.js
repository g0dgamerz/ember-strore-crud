import RESTSerializer from '@ember-data/serializer/rest';

export default class ClaimsSerializer extends RESTSerializer {
  serializeIntoHash(hash, typeClass, snapshot) {
    hash[typeClass.modelName] = this.serialize(snapshot);
  }
  serialize(snapshot) {
    let serializedData = {};
    if (snapshot.id) {
      serializedData.id = snapshot.id;
    }
    snapshot.eachAttribute((name) => {
      serializedData[name] = snapshot.attr(name);
    });
    return serializedData;
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
