test('runs cconsoleInit example without crashing', async () => {
  try {
    require('../examples/cconsoleInit.js');
    expect(true).toBeTruthy();
  } catch(e) {
    expect(false).toBeTruthy();
  }
});
