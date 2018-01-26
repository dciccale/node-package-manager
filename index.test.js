const assert = require('assert');
const words = require('./words');
const npm = require('./');

const letters = ['n', 'p', 'm'];

const ws = npm().toLowerCase().split(' ');

// The generated text should contain 3 words separated by a space
assert(ws.length, 3);

// Test that each word derived from n, p and m exists in the words list
letters.forEach((l, i) => {
  const word = ws[i];
  const letterWords = words[l];
  assert.equal(letterWords.includes(word), true);
});

console.log('Tests passed');
