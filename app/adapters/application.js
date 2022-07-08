import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api';
  host = 'https://localhost:7293';
  pathForType() {
    return 'product';
  }
}
