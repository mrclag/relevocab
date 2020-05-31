import datamuse from 'datamuse';

export const getWords = async (query) => {
  // const queryString = query.replace(' ', '+');

  const result = datamuse
    .request(`words?ml=${query}&max=20`)
    .then((data) => data);
  return result;
};
