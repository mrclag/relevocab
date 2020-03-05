import React from 'react';
import { CardContainer } from './Card.styles';

const Card = ({ front, back, flipped, setFlipped }) => {
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
