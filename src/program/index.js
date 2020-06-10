const { command, option } = require('termkit'),
  { namer } = require('../actions'),
  { checkKey } = require('../middlewares'),
  { version } = require('../../package.json')

const program = command('npm-namer', '[name]')
  .version(version)
  .description('A CLI utility for creating, checking, and removing lock files')
  .middleware(checkKey)
  .action(namer)

module.exports = program
