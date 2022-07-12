import RESTSerializer from '@ember-data/serializer/rest';

export default class ProductSerializer extends RESTSerializer {
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
  // normalizeCreateRecordResponse(
  //   store,
  //   primaryModelClass,
  //   payload,
  //   id,
  //   requestType
  // ) {
  //   payload = { product: payload };
  //   console.log(payload);
  //   return super.normalizeCreateRecordResponse(
  //     store,
  //     primaryModelClass,
  //     payload,
  //     id,
  //     requestType
  //   );
  // }
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
