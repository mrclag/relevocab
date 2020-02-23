import { translate } from '../services/translate';

const bigData = {
  1: {
    title: 'This is a test',
    artist: 'Capn Crunch',
    lyrics:
      'Who lives in a pineapple under the sea? Spongebob Squarepants! Absorbant and yellow and poreous is he!'
  },
  2: {
    title: 'An awesome song',
    artist: 'Matt Clagett',
    lyrics:
      'Here is a bunch of random words porcupine apple table jump red seventeen'
  },
  3: {
    title: 'Truth',
    artist: 'Higher Power',
    lyrics:
      'I always go to starbucks and just get a free hot water so I can make tea or ramen'
  },
  4: {
    title: 'Directions',
    artist: 'Google Maps',
    lyrics:
      'Take a left turn at main street and then keep going down until you get to target and then buy me a new pillow'
  },
  5: {
    title: 'Love song',
    artist: 'Romeo Santos',
    lyrics:
      'Ooh la la la la eso es una cancion de amor. Chingar conmigo y vas a tener buena suerte.'
  }
};

export const mapSongData = data => {
  const mapTestData = data => {
    data.cards = {};
    let songlyrics = new Set(data.lyrics.split(' '));
    songlyrics.forEach(word => {
      data.cards[word] = { front: word, back: translate(word, 'es') };
    });
    return data;
  };

  Object.keys(data).map(key => {
    mapTestData(data[key]);
  });
  console.log(data);
  
  return data;
};

mapSongData(bigData);
