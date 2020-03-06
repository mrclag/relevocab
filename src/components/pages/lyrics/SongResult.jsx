import React from 'react';
import { SongResultWrapper } from './SongResult.styles';
import SongLine from './SongLine';

const SongResult = ({ song }) => {
  return (
    <SongResultWrapper>
      <div className="song-img">
        <img src={song.imgUrl} alt="" />
      </div>
      <div className="song-info">
        <div className="title">{song.title}</div>
        <div className="artist">{song.artist}</div>
        <div className="numcards">{song.cards.length} cards</div>
      </div>
      <div className="song-cards">
        {song.cards.slice(0, 6).map((card, i) => (
          <SongLine key={i} card={card} />
        ))}
        <SongLine
          card={{
            Front: `${song.cards.length - 6} more...`,
            Back: `${song.cards.length - 6} more...`
          }}
        />
      </div>
    </SongResultWrapper>
  );
};

export default SongResult;
