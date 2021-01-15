import test from 'ava'

test('runs cconsole example without crashing', async t => {
  try {
    await import('../examples/cconsole.mjs');
    t.true(true)
  } catch(e) {
    t.fail()
  }
});
