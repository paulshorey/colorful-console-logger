/*
 * This is for use in Browser - however it will also work in Node (ESM) including Webpack
 */
const cconsoleImport = require("./src/index.js")

if (typeof window === 'object') {
  window.cconsoleInit = cconsoleImport
}

module.exports = cconsoleImport
