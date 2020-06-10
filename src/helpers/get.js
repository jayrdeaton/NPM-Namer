const axios = require('axios'),
  DOMAIN = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json'

module.exports = (word) => axios.get(`${DOMAIN}/word?key=${process.env.MW_THESAURUS_KEY}`)
