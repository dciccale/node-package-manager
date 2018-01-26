# node-package-manager

The motivation for this simple script came from the official npmjs.com website.
On the top left corner, an apparently random set of 3 words are displayed, each starting with the first letter of npm
initials. This Inspired me to generate a random selection of existing English dictionary words starting with the same
initials.

## Get the real meaning for "npm"

```sh
$ npm install -g node-package-manaber
$ n-p-m
$ nonconventional pseudoephedrine mineralogy
```

Yep, that was randomly chosen from thousands of words that are longer or equal than 3 characters. Each word starting
respectively with letters "n", "p" and "m"  and composed only by 1 word.
The list present in `words.json` was extracted from from http://www.dictionary.com.

# Generate words.json

## Do not run frequently

To re-generate the `words.json` file run:

```sh
$ node get-words
```

New words are not invented every day, so there is no need to generate the `words.json` file often.

# Meaning

If you want to know the meaning of each word please go to `http://www.dictionary.com/browse/<word>` where `<word>` is
the word you would like to learn the meaning from.
