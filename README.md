# No setup required. No dependencies. Very extensible.

You can haz configuration options if you want them. Scroll down to learn more.
For basic use, simply `npm install colorful-console-logger` and import.

##

## It does NOT replace your `console`:

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

##

## Optional configuration options:

If you want to get fancy, and you probably should ~ here are some extra options.  
After you've required/imported the cconsole variable, call its secret `config` method.  
You may change options anytime at runtime.

#### 1. Catch Exceptions
Make truthy to log which file/line number the log came from:

```
cconsole.config({
    catchExceptions: true, // default false
});
```

Above option will execute this code (below). It will affect your entire codebase by implementing this:

```
process.on('uncaughtException', (err) => {
    console.error('Fatal error!', err);
});
```

All this does is print an error to the console before your application crashes and burns.  
If you specify a `callbackOnError()`, below, then you will also be able to do other stuff before the application exits.

#### 2. Execute callback function on error

```
cconsole.config({
    callbackOnError: function(arguments){
        // `arguments` is an array of arguments you passed to `cconsole.error`
        // Do whatever you want here. You're passing in this custom function.
        // In back-end Node.js, you may want to call `execute("pm2 restart all")`
        // You may want to add custom cloud-logging or file-system logging here
    })
});
```

Above option will execute BEFORE `process.exit();` due to the optional `exitOnError` option.  
Above option will execute AFTER the error message has been output to the console.

#### 3. Pre-process arguments

```
cconsole.config({
    preprocessArguments: function(arguments){
        // Defaults to null
        // Do whatever you want here. You're passing in this custom function.
        // For example, you may loop through each arguments property, and add some prefix or timestamp
    })
});
```

Above opton will execute BEFORE the message has been output to the console.  
In fact, cconsole serializes error messages as text to better print out in the console. This option executes BEFORE this serialization.  
Inside your function, access the "type" of console.log this is ("info", "warn", etc) with **`this.action`**.  
You may want to use this to send these console logs to some custom "cloud" logger like Winston or Loggly.

#### Do them all at the same time

```
cconsole.config({
    catchExceptions: true,
    callbackOnError: function(arguments){
        // call some bash script
        execute('pm2 stop all');
    }),
    preprocessArguments: function(arguments){
        // add prefix
        for (let a in arguments) {
            arguments[a] = Date.now() +' ~ '+ arguments[a];
        }
        // log to the cloud
        logDNA[this.action](arguments);
    })
});
```

