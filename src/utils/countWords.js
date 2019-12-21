import sw from 'stopword';

export const countWords = sentence => {
  const count = sentence
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .split(' ')
    .slice(0, 200)
    .reduce((index, word) => {
      if (!index.hasOwnProperty(word)) index[word] = 0;
      index[word]++;
      return index;
    }, {});

  const arr = Object.keys(count) // array of words
    .sort((a, b) => count[b] - count[a])
    .filter(word => word.length > 3);

  return sw.removeStopwords(arr);
};
