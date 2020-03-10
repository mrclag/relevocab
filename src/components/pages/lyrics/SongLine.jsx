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
      {hovered ? card.Back : card.Front}
    </SongLineWrapper>
  );
};

export default SongLine;
