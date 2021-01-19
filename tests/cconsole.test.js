test('runs cconsole example without crashing', async () => {
  try {
    require('../examples/cconsole.js');
    expect(true).toBeTruthy();
  } catch(e) {
    expect(false).toBeTruthy();
  }
});
