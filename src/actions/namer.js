const axios = require('axios'),
  cosmetic = require('cosmetic'),
  { checkName, get } = require('../helpers')

module.exports = async ({ name }) => {
  const words = await get(name)
  for (const word of words) {
    const { meta: { id, syns } } = word
    console.log(await checkName(id) ? cosmetic.green(id) : cosmetic.red(id))
    for (let syn of syns.flat()) {
      syn = syn.toLowerCase()
      if (syn.includes(' ')) {
        nospace = syn.replace(/ /g, '')
        console.log(await checkName(nospace) ? cosmetic.green(nospace) : cosmetic.red(nospace))
        hyphenated = syn.replace(/ /g, '-')
        console.log(await checkName(hyphenated) ? cosmetic.green(hyphenated) : cosmetic.red(hyphenated))
        underscored = syn.replace(/ /g, '_')
        console.log(await checkName(underscored) ? cosmetic.green(underscored) : cosmetic.red(underscored))
      } else {
        console.log(await checkName(syn) ? cosmetic.green(syn) : cosmetic.red(syn))
      }
    }
  }
}
