import React, { useState } from 'react';
import { CardContainer } from '../styles/Card.styles';

const Card = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <CardContainer onClick={() => setFlipped(!flipped)} flipped={flipped}>
      <div className="card">
        <div className="card-face card-face-front">{front}</div>
        <div className="card-face card-face-back">{back}</div>
      </div>
    </CardContainer>
  );
};

export default Card;