# No setup required. No dependencies. Very extensible.

[![npm package](https://img.shields.io/npm/v/colorful-console-logger.svg)](https://www.npmjs.com/package/colorful-console-logger)

Works on both Node.js and in Browser. Does not work well inside IDEs like CodePen.io. Scroll down for browser usage.
Should work for both ESM (ES Modules) and CJS (Common JS), though it is not tested for CJS! Please contact me if does not work.
This is experimental and not stable code. Do **not** install `@latest`. When upgrading to a higher version, watch out for breaking changes!

##

# Use in Node.js (log to terminal)

### 1. Import it:

```
const cconsole = require('colorful-console-logger/cconsole');
```

Import it to whatever variable you wish to call it (`konsole`, `consola`, `consolee`)


### 2. Use it:

```
cconsole.time();
cconsole.clear();
cconsole.log('no special colors');
cconsole.info('light blue (teal/aqua) background');
cconsole.warn('this is a warning, yellow/orange background');
cconsole.error('Error: bright red background, yellow text');
cconsole.trace('TEST log trace');
cconsole.error(new Error('TEST log error'));
cconsole.table([[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']]);
cconsole.timeEnd();
```

### 3. Advanced usage:

```
const cconsoleInit = require('colorful-console-logger');

const cconsole = cconsoleInit({
  useTrace: true,
  useColor: true,
  logToCloud: {
    log: customCloudLogFunction,
    info: customCloudInfoFunction,
    warn: customCloudWarnFunction,
    error: customCloudErrorFunction
  }
})
```


##

# Use in browser


## Auto-init with default options:

### 1. Import it:
```
<script src="https://raw.githubusercontent.com/paulshorey/colorful-console-logger/main/dist/cconsole.js"></script>
<!-- this script will add window.cconsole variable to your webpage -->
```

### 2. Use it:
```
cconcole.info('this message will have background light blue')
cconcole.warn('this message will have background yellow')
cconcole.error('this message will have background red with yellow text')
```

### 3. Advanced usage:

```
<script src="https://raw.githubusercontent.com/paulshorey/colorful-console-logger/main/dist/cconsoleInit.js"></script>
<!-- this script will add window.cconsoleInit variable to your webpage -->

const cconsole = cconsoleInit({
  useTrace: true,
  useColor: true,
  logToCloud: {
    log: customCloudLogFunction,
    info: customCloudInfoFunction,
    warn: customCloudWarnFunction,
    error: customCloudErrorFunction
  }
})

cconcole.info('this message will have background light blue, and will log to your cloud provider')
```


# About

Made by Paul for projects listed on PaulShorey.com, and for future development. This is a work in progress.
