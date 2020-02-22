import React from 'react';

const SongResult = ({ name }) => {
  return (
    <div className="results-result">
      <div className="results-title">{name}</div>
      <div className="results-artist">Artistname</div>
      <div className="results-cards">
        <span className="card">word</span>
        <span className="card">word</span>
        <span className="card">word</span>
        <span className="card">word</span>
        <span className="card">word</span>
      </div>
    </div>
  );
};

export default SongResult;
