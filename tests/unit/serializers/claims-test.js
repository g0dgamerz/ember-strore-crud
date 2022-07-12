import { module, test } from 'qunit';
import { setupTest } from 'testpost/tests/helpers';

module('Unit | Serializer | claims', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('claims');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('claims', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
