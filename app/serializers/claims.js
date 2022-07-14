import RESTSerializer from '@ember-data/serializer/rest';

export default class ClaimsSerializer extends RESTSerializer {
  serializeIntoHash(hash, typeClass, snapshot) {
    console.log(typeClass.modelName);
    hash[typeClass.modelName] = this.serialize(snapshot);
  }
  serialize(snapshot) {
    let serializedData = {};
    if (snapshot.id) {
      serializedData.id = snapshot.id;
    }
    snapshot.eachAttribute((name) => {
      console.log(name);
      serializedData[name] = snapshot.attr(name);
    });
    return serializedData;
  }
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { claims: payload };
    //console.log(payload);
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
