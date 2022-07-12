import { module, test } from 'qunit';
import { setupTest } from 'testpost/tests/helpers';

module('Unit | Adapter | claims', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:claims');
    assert.ok(adapter);
  });
});
