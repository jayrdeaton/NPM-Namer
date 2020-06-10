const { command, option } = require('termkit'),
  { namer } = require('../actions'),
  { version } = require('../../package.json')

const program = command('npm-namer', '[name]')
  .version(version)
  .description('A CLI utility for creating, checking, and removing lock files')
  .action(namer)

module.exports = program
