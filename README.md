# NPM-Namer

Find an available npm package name. Give it an idea, and it checks that name on the npm registry, then keeps going through thesaurus synonyms, printing each candidate in green if it's available or red if it's taken.

## How it works

1. **Variants:** a multi-word name (hyphens count as spaces) is checked three ways: no spaces, hyphenated, and underscored. A single word is checked as is.
2. **Synonyms:** each name is looked up in the [Merriam-Webster Collegiate Thesaurus API](https://dictionaryapi.com/), and every synonym it returns is queued and checked the same way.
3. **No repeats:** names already checked are skipped, and the search keeps expanding until it runs out of new synonyms. That can take a while for common words, so press `Ctrl+C` once you've found one you like.

Availability is checked with [`npm-name`](https://www.npmjs.com/package/npm-name).

## Setup

You need a free Merriam-Webster API key for the Collegiate Thesaurus. Sign up at [dictionaryapi.com](https://dictionaryapi.com/), then set it in your shell:

```bash
export MW_THESAURUS_KEY=your-key-here
```

The CLI exits with an error if the key isn't set.

## Installation

The version on npm (0.0.0) predates the CLI entry point, so install from source:

```bash
git clone https://github.com/jayrdeaton/NPM-Namer.git
cd NPM-Namer
npm install
npm link
```

## Usage

```bash
npm-namer <name>
```

## License

MIT, see [LICENSE](LICENSE).
