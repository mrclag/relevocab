import wiki from 'wikijs';

export const getWikiPage = async query => {
  const response = wiki()
    .page(query)
    .then(page => page);
  return response;
};
