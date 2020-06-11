const axios = require('axios'),
  cosmetic = require('cosmetic'),
  { checkName, get } = require('../helpers')

module.exports = async ({ name }) => {
  console.log(`${cosmetic.green('available')} / ${cosmetic.red('taken')}`)
  console.log()

  let words = [ name ]
  const checked = []
  while (words.length > 0) {
    const word = words[0]
    const newWords = await checkName(word)
    checked.push(word)
    words.push(...newWords)
    words = words.filter(w => !checked.includes(w))
  }
}
