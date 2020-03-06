import React from 'react';
import { SongResultWrapper } from './SongResult.styles';
import file_upload from '../../../images/file-upload.png';

const SongResult = ({ song }) => {
  return (
    <SongResultWrapper>
      <div className="song-img">
        <img src={file_upload} alt="" />
      </div>
      <div className="song-info">
        <div className="title">{song.title}</div>
        <div className="artist">{song.artist}</div>
        <div className="numcards">{song.cards.length} cards</div>
      </div>
      <div className="song-cards">
        {song.cards.slice(0, 10).map(card => (
          <div className="card">{card.Front}</div>
        ))}
      </div>
    </SongResultWrapper>
  );
};

export default SongResult;
