const words = require('./words');

const getWordsForLetter = (l) => words[l];
const getRandomWord = (ws) => ws[Math.floor(Math.random() * ws.length)];
const letters = ['n', 'p', 'm'];

module.exports = () =>
  letters
    .map(getWordsForLetter)
    .map(getRandomWord)
    .join(' ')
