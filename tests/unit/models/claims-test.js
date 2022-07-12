import { module, test } from 'qunit';
import { setupTest } from 'testpost/tests/helpers';

module('Unit | Model | claims', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('claims', {});
    assert.ok(model);
  });
});
