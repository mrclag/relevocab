import React from 'react';

const Lyrics = () => {
  // originally have hard data of lyrics to post /song libray
  // can search through songs
  // page shows song lyrics, artists, etc.
  // other content - movies - can get related words via fiverr?

  return (
    <div>
      <h1>Find Songs</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <button type="submit" value="Submit" id="submit-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Lyrics;
