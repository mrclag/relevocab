import wiki from 'wikijs';

export const getWiki = async query => {
  const result = wiki()
    .page(query)
    .then(page => page.rawContent());
  return result;
};
