import React from 'react';
import { connect } from 'react-redux';

import { SongResultWrapper } from './SongResult.styles';
import SongLine from './SongLine';
import { addSongAsDeck } from '../../../store/actions/deckActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export const SongResult = ({ song, addSongAsDeck }) => {
  const addSong = (title, artist, cards) => {
    console.log('running add song');
    const song = { title, artist, cards };
    addSongAsDeck(song);
  };

  return (
    song && (
      <SongResultWrapper>
        <div
          className="song-img"
          onClick={() => addSong(song.title, song.artist, song.cards)}
        >
          <img src={song.imgUrl} alt="" />
          <div className="overlay">
            <FontAwesomeIcon
              icon={faPlusSquare}
              class="icon"
              style={{ fontSize: '40px' }}
            />
          </div>
        </div>
        <div className="song-info">
          <div className="title">{song.title}</div>
          <div className="artist">{song.artist}</div>
          <div className="numcards">{song.cards.length} cards</div>
        </div>
        <div className="song-cards">
          {song.cards.slice(0, 7).map((card, i) => (
            <SongLine key={i} card={card} />
          ))}
          <SongLine
            card={{
              front: `${song.cards.length - 6} more...`,
              back: `${song.cards.length - 6} more...`,
            }}
          />
        </div>
      </SongResultWrapper>
    )
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSongAsDeck: (song) => dispatch(addSongAsDeck(song)),
  };
};

export default connect(null, mapDispatchToProps)(SongResult);
