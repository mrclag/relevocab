import React, { useState, useEffect } from 'react';
import { getStoryIds, getStory } from '../services/hnAPI';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <div style={{ marginLeft: '500px' }}>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      <p>By: {story.by}</p>
      <p>Posted: {story.time}</p>
    </div>
  ) : null;
};
