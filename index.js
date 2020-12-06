import cconsole from "./src/index.js"


if (typeof window === 'object') {
  window.cconsole = cconsole
}

export default cconsole
