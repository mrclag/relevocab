import React, { useState } from 'react';

import { SongLineWrapper } from './SongLine.styles';

const SongLine = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <SongLineWrapper
      hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? card.back : card.front}
    </SongLineWrapper>
  );
};

export default SongLine;
