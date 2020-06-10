module.exports = () => {
  if (!process.env.MW_THESAURUS_KEY) throw new Error('MW_THESAURUS_KEY environment variable is required')
}
