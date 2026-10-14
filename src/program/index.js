const { command, option } = require('termkit'),
  { namer } = require('../actions'),
  { checkKey } = require('../middlewares'),
  { version } = require('../../package.json')

const program = command('npm-namer', '<name>')
  .version(version)
  .description('Find an available npm package name, expanding through thesaurus synonyms')
  .middleware(checkKey)
  .action(namer)

module.exports = program
