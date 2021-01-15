import test from 'ava';

test('runs cconsoleInit.mjs example', async t => {
  try {
    await import('./cconsoleInit.mjs');
    t.pass();
  } catch(e) {
    t.fail();
  }
});
