import React, { useState } from 'react';

import { SongLineWrapper } from './SongLine.styles';

export const SongLine = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    card && (
      <SongLineWrapper
        hovered={hovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span>{hovered ? card.back : card.front}</span>
      </SongLineWrapper>
    )
  );
};

export default SongLine;
