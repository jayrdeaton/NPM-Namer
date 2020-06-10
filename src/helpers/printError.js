const cosmetic = require('cosmetic')

module.exports = (error) => {
  if (!error) return
  console.log(`npm-namer ${cosmetic.red(`${error.name}:`)} ${error.message}`)
}
