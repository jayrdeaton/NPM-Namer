const npmName = require('npm-name')

module.exports = (name) => npmName(name).then(res => res).catch(err => false)
