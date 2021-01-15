/*
 * This is for use in Browser - however it will also work in Node (ESM) including Webpack
 */
const cconsoleImport = require("./index.js")

if (typeof window === 'object') {
  window.cconsole = cconsoleImport()
}

module.exports = cconsoleImport()
