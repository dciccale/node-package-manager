// Note:
// Only use to generate words.json
// Not a lot of new words are being created
// so probably no need to run this code frequently
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const letters = ['n', 'p', 'm'];
const dictionaryUrl = 'http://www.dictionary.com/list';

async function getHtml(letter, page) {
  console.log(`Getting data for letter ${letter} on page ${page}`);
  try {
    const res = await axios.get(`${dictionaryUrl}/${letter}/${page}`, {maxRedirects: 0});
    return res.data;
  } catch (err) {
    // Reached the last page
    return null;
  }
}

function extractWordsFromHtml(html) {
  const $ = cheerio.load(html);
  return $('.words-list ul li')
    .map((i, li) => $(li).text().trim())
    .get()
    .filter((text) => /^\w+$/.test(text))
    .filter((word) => word.length > 2);
}

async function getWords(words, letter) {
  let ws = await words;
  let page = 1;

  while (true) {
    const html = await getHtml(letter, page);

    if (!html) {
      console.log(`Finished with letter ${letter} at page ${page}`);
      break;
    }

    page++;

    const _words = extractWordsFromHtml(html);

    ws = Object.assign({}, ws, {
      [letter]: compact([].concat(ws[letter], _words))
    });
  }

  return ws;
}

function compact(arr) {
  return arr.filter((v) => !!v);
}

// Writes words.json file
(async () => {
  const words = await letters.reduce(getWords, Promise.resolve({}));
  fs.writeFileSync(`${__dirname}/words.json`, JSON.stringify(words, null, 2));
})();
