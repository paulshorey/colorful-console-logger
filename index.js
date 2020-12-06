import cconsoleInit from "./src/index.js"


if (typeof window === 'object') {
  window.myconsole = cconsoleInit()
}

export default cconsoleInit
