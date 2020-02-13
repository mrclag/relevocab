import React from 'react';
import { getArticles } from '../../services/ujeebuAPI';

const Articles = () => {
  // Search for topics, return articles on medium, the guardian, via ?api
  // For each returned article url, hit the ujeebu API to return content
  // Store the responses in own DB so I don't have to go over my API limit
  // If the URL is in my DB, use that instead, otherwise hash the new

  return (
    <div>
      <h1>Find Related Words</h1>
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

export default Articles;
