import request from 'request';
import cheerio from 'cheerio';
import cors from 'cors';

export const getLyrics = (artist, song) => {
  const artistQ = artist.replace(' ', '-');
  const songQ = song.replace(' ', '-');
  console.log(`https://genius.com/${artistQ}-${songQ}-lyrics`);
  try {
    request(`https://genius.com/${artistQ}-${songQ}-lyrics`, cors(), function(
      err,
      response,
      body
    ) {
      var $ = cheerio.load(body);
      // let's see the average price of 1 bedroom and bathroom in san francisco (based on 1 page of craigslist...)
      var avg = $('.lyrics p').text();
      // console.log(avg.children());
      console.log(avg);
      return avg;
    });
  } catch (e) {
    console.error(e);
  }
};
