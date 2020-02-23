import React from 'react';

const SongResult = ({ name, data }) => {
  return (
    <div className="results-result">
      <div className="results-title">{data.title}</div>
      <div className="results-artist">{data.artist}</div>
      <div className="results-cards">
        {Object.keys(data.cards).map((cardId, i) => (
          <span key={i} className="card">
            {data.cards[cardId].front}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SongResult;
