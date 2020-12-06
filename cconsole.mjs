/*
 * This is for use in Browser - however it will also work in Node (ESM) including Webpack
 */
import cconsoleImport from "./dist/cconsoleInit.js"

if (typeof window === 'object') {
  window.cconsole = cconsoleImport()
}

export default cconsoleImport()
