import cconsoleInit from "../dist/cconsoleInit.js"

const cconsole = cconsoleInit({
  useTrace: true, // show file and line-number where the console was called from
  useColor: true, // add a splash of color, to find the info, warn, or debug more easily
  separateTypes: true, // put a space between groups of similar types (logs, infos, warns)
})

cconsole.info('cyan (light blue) color for "info"')
cconsole.warn('yellow/orange color for "warn"')
cconsole.error('red background, yellow text = "error"')

const someFunction = function () {
  Date.now();
};
console.time();
console.clear();
console.log("TEST 55555: 'log'", {testObject: "testObject"});
console.info("TEST 55555: 'info'", {testObject: "testObject"});
console.warn("TEST 55555: 'warn'", {testObject: "testObject"});
console.table([[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']]);
console.trace('TEST 55555 log trace');
console.error(new Error('TEST 55555 log error'));
console.log({one: 1, two: {a: "a", b: "b"}});
console.log([1, 2, 3, {fourth: "isAnObject"}]);
console.log(someFunction);
console.timeEnd();
