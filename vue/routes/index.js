/* eslint-disable typescript/no-var-requires */
const notFound = require('./404')

// [ATTENTION] nuxt.jsは、node.jsで動くため、
// nuxt.config.jsで直接requireされるroutesはtypescriptでなくnode.jsで書く
module.exports = [].concat(notFound)
