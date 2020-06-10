const axios = require('axios'),
  DOMAIN = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json'

module.exports = async (word) => {
  const { data } = await axios.get(`${DOMAIN}/${word}?key=${process.env.MW_THESAURUS_KEY}`)
  return data
}
