const axios = require('axios'),
  cosmetic = require('cosmetic'),
  checkNpm = require('./checkNpm'),
  get = require('./get')

module.exports = async (name) => {
  // replace hyphens with spaces
  name = name.replace(/-/g, ' ')
  // check name
  if (name.includes(' ')) {
    nospace = name.replace(/ /g, '')
    console.log(await checkNpm(nospace) ? cosmetic.green(nospace) : cosmetic.red(nospace))
    hyphenated = name.replace(/ /g, '-')
    console.log(await checkNpm(hyphenated) ? cosmetic.green(hyphenated) : cosmetic.red(hyphenated))
    underscored = name.replace(/ /g, '_')
    console.log(await checkNpm(underscored) ? cosmetic.green(underscored) : cosmetic.red(underscored))
  } else {
    console.log(await checkNpm(name) ? cosmetic.green(name) : cosmetic.red(name))
  }
  // get words from name
  const words = await get(name)
  const newWords = []
  for (const word of words) {
    if (typeof word !== 'object') {
      newWords.push(word)
      continue
    }
    const { meta: { id, syns } } = word
    newWords.push(...syns.flat())
  }
  return newWords
  // const newWords = []
  // const words = await get(name)
  // console.log(words)
  // for (const word of words) {
  //   const { meta: { id, syns } } = word
  //   console.log(await checkName(name) ? cosmetic.green(name) : cosmetic.red(name))
  //   for (let syn of syns.flat()) {
  //     syn = syn.toLowerCase()
  //     if (ignore.includes(syn)) continue
  //     if (syn.includes(' ')) {
  //       nospace = syn.replace(/ /g, '')
  //       console.log(await checkName(nospace) ? cosmetic.green(nospace) : cosmetic.red(nospace))
  //       hyphenated = syn.replace(/ /g, '-')
  //       console.log(await checkName(hyphenated) ? cosmetic.green(hyphenated) : cosmetic.red(hyphenated))
  //       underscored = syn.replace(/ /g, '_')
  //       console.log(await checkName(underscored) ? cosmetic.green(underscored) : cosmetic.red(underscored))
  //     } else {
  //       console.log(await checkName(syn) ? cosmetic.green(syn) : cosmetic.red(syn))
  //     }
  //     ignore.push(syn)
  //     newWords.push(syn)
  //   }
  //   return newWords
  // }
}
