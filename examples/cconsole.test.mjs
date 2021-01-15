import test from 'ava';

test('runs cconsole.mjs example', async t => {
  try {
    await import('./cconsole.mjs');
    t.pass();
  } catch(e) {
    t.fail();
  }
});
