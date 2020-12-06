# No setup required. No dependencies. Very extensible.

Works on both Node.js and in Browser. Does not work well inside IDEs like CodePen.io. Scroll down for browser usage.

# Use in Node.js (log to terminal):

### 1. Import it:

```
const cconsole = require('colorful-console-logger');
```

### 2. Use it:

```
cconsole.log('no special colors');
cconsole.info('light blue (teal/aqua) background');
cconsole.warn('this is a warning, yellow/orange background');
cconsole.error('Error: bright red background, yellow text');
```

Import it to whatever variable you wish to call it (`konsole`, `consola`, `consolee`)

#### Once you required/imported it, go ahead and use it same as the normal console:

```
cconsole.time();
cconsole.clear();
cconsole.log("TEST 55555: 'log'", {testObject: "testObject"});
cconsole.info("TEST 55555: 'info'", {testObject: "testObject"});
cconsole.warn("TEST 55555: 'warn'", {testObject: "testObject"});
cconsole.table([[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']]);
cconsole.trace('TEST 55555 log trace');
cconsole.error(new Error('TEST 55555 log error'));
cconsole.timeEnd();
```



# Usage in browser


## Auto-init with default options:

### 1. Import it:
```
<script src="https://raw.githubusercontent.com/paulshorey/colorful-console-logger/main/dist/index.js"></script>
<!-- this script will add cconsole variable to your window -->
```

### 2. Use it:
```
cconcole.info('this message will have background light blue')
cconcole.warn('this message will have background yellow')
cconcole.error('this message will have background red with yellow text')
```

## Customize

### 1. Import it:
```
<!-- notice script name is "init.js", not "index.js" -->
<script src="https://raw.githubusercontent.com/paulshorey/colorful-console-logger/main/dist/init.js"></script>
<!-- this script will add cconsoleInit variable to your window -->
```

### 2. Initiate it with custom options:
```
cconsole = cconsoleInit({
  useTrace: true,
  useColor: true,
  logToCloud: {
    log: cloudConsoleLog,
    info: cloudConsoleInfo,
    warn: cloudConsoleWarn,
    error: cloudConsoleError
  }
})
```

### 3. Use it:
```
cconcole.info('this message will have background light blue, and will log to your cloud provider')
```

## Usage in browser (auto-init with default options):

### 1. Import it:
```
<script src="https://raw.githubusercontent.com/paulshorey/colorful-console-logger/main/dist/init.js"></script>
```

### 2. Use it:
```
cconcole.info('this message will have background light blue')
cconcole.warn('this message will have background yellow')
cconcole.error('this message will have background red with yellow text')
```
