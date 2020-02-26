import React, { useState } from 'react';
import SongResult from '../SongResult';
import styled from 'styled-components';
import { mapSongData } from '../../utils/createLyricCards';

const LyricsPage = () => {
  // originally have hard data of lyrics to post /song libray
  // can search through songs
  // page shows song lyrics, artists, etc.
  // other content - movies - can get related words via fiverr?
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setSearchInput('');
  };

  return (
    <LyricsPageWrapper>
      <h1>Find Songs</h1>
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          className="search-form-input"
          value={searchInput}
          onChange={e => setSearchInput(e.currentTarget.value)}
        />
        <button type="submit" value="Submit" className="search-form-submit">
          Search
        </button>
      </form>
      <div className="results-output">Found 5 results:</div>
      <div className="results">
        {Object.keys(mapSongData(bigData)).map(key => (
          <SongResult data={bigData[key]} />
        ))}
        {/* <SongResult name="First Result" data={testData} />
        <SongResult name="Second Result" data={testData} />
        <SongResult name="Third Result" data={testData} />
        <SongResult name="Fourth Result" data={testData} />
        <SongResult name="Fifth Result" data={testData} />
        <SongResult name="Sixth Result" data={testData} />
        <SongResult name="Seventh Result" data={testData} /> */}
      </div>
    </LyricsPageWrapper>
  );
};

export default LyricsPage;

const LyricsPageWrapper = styled.div`
  margin-left: 350px;

  .search-form {
    &-input {
      height: 40px;
      width: 500px;
    }

    &-submit {
      color: #107bbd;
      margin-left: 10px;
      margin-top: 5px;
      height: 42px;
      width: 100px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #107bbd;
      outline: none;
      cursor: pointer;
    }
  }

  .results {
    width: 100%;
    height: 75vh;
    margin-top: 20px;
    overflow-y: scroll;

    &-result {
      min-height: 100px;
      /* border: 0.5px solid blue; */
      border-bottom: 0.5px solid black;
      margin-bottom: 10px;
    }
    &-output {
      font-size: 12px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    &-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &-artist {
      font-size: 14px;
      font-style: italic;
      margin-bottom: 10px;
    }
    &-cards {
      color: darkblue;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 600px;
      .card {
        border: 0.5px solid darkblue;
        margin-right: 3px;
        margin-bottom: 3px;
        padding: 3px 10px;
        font-size: 0.8em;
      }
    }
  }

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    .search-form {
      &-input {
        width: 70vw;
        border: 1px solid #333;
        margin-top: 40px;
        padding-left: 15px;
      }
      &-submit {
        @media screen and (max-width: 800px) {
          width: 25vw;
          margin-left: 0px;
        }
      }
    }
  }
`;

const testData = {
  title: 'Awesome Song',
  artist: 'Matt Clagett',
  cards: {
    1: {
      front: 'hello',
      back: 'hola'
    },
    2: {
      front: 'what',
      back: 'que'
    },
    3: {
      front: 'is',
      back: 'es'
    },
    4: {
      front: 'your',
      back: 'su'
    },
    5: {
      front: 'favorite',
      back: 'favorito'
    },
    6: {
      front: 'type',
      back: 'tipo'
    },
    7: {
      front: 'of',
      back: 'de'
    },
    8: {
      front: 'iced beverage',
      back: 'bebido con hielo'
    },
    9: {
      front: 'traffic',
      back: 'trafico'
    },
    10: {
      front: 'trees',
      back: 'arboles'
    }
  }
};

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
