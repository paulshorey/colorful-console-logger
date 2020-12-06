import cconsoleInit from "./src/index.js"

if (typeof window === 'object') {
  window.cconsole = cconsoleInit()
}

export default cconsoleInit()
