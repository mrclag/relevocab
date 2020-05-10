import React from 'react';
import { SongResultWrapper } from './SongResult.styles.js';

const SongResult = ({ song }) => {
  console.log(song);
  return (
    <SongResultWrapper>
      <img src={song.imgUrl} className="deck-image" alt="Deck"></img>
      <div className="deck-info">
        <div className="deck-title">
          {song.artist} - {song.title}
        </div>
        <div className="deck-cards">{song.cards.length} cards</div>
        <div className="deck-buttons">
          <button className="practice">Add Song</button>
          <button className="details">Details</button>
        </div>
      </div>
    </SongResultWrapper>
  );
};

export default SongResult;
