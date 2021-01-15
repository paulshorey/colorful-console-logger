import test from 'ava'

test('runs cconsoleInit example without crashing', async t => {
  try {
    await import('../examples/cconsoleInit.mjs');
    t.true(true)
  } catch(e) {
    t.fail()
  }
});
