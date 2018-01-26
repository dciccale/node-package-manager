const words = require('./words');

const getWordsForLetter = (l) => words[l];
const getRandomWord = (ws) => ws[Math.floor(Math.random() * ws.length)];
const capitalize = (w) => w.charAt(0).toUpperCase() + w.slice(1);
const letters = ['n', 'p', 'm'];

module.exports = () =>
  letters
    .map(getWordsForLetter)
    .map(getRandomWord)
    .map(capitalize)
    .join(' ')
