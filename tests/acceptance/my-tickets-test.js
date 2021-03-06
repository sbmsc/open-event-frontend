import { currentURL, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { login } from 'open-event-frontend/tests/helpers/custom-helpers';

module('Acceptance | my-tickets', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /my-tickets without login', async function(assert) {
    await visit('/my-tickets');
    assert.equal(currentURL(), '/login');
  });

  test('visiting /my-tickets/upcoming without login', async function(assert) {
    await visit('/my-tickets/upcoming');
    assert.equal(currentURL(), '/login');
  });

  test('visiting /my-tickets/saved without login', async function(assert) {
    await visit('/my-tickets/saved');
    assert.equal(currentURL(), '/login');
  });

  test('visiting /my-tickets/past without login', async function(assert) {
    await visit('/my-tickets/past');
    assert.equal(currentURL(), '/login');
  });

  test('visiting /my-tickets with login', async function(assert) {
    await login(assert);
    await visit('/my-tickets');
    assert.equal(currentURL(), '/my-tickets/upcoming');
  });

  test('visiting /my-tickets/upcoming with login', async function(assert) {
    await login(assert);
    await visit('/my-tickets/upcoming');
    assert.equal(currentURL(), '/my-tickets/upcoming');
  });

  test('visiting /my-tickets/saved with login', async function(assert) {
    await login(assert);
    await visit('/my-tickets/saved');
    assert.equal(currentURL(), '/my-tickets/saved');
  });

  test('visiting /my-tickets/past with login', async function(assert) {
    await login(assert);
    await visit('/my-tickets/past');
    assert.equal(currentURL(), '/my-tickets/past');
  });
});
