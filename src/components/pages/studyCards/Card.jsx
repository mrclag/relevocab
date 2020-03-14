import React from 'react';
import { CardContainer } from './Card.styles';

const Card = ({ content, flipped, setFlipped }) => {
  return (
    <CardContainer onClick={() => setFlipped(!flipped)} flipped={flipped}>
      <div className="card">
        <div className="card-face card-face-front">{content.front}</div>
        <div className="card-face card-face-back">{content.back}</div>
      </div>
    </CardContainer>
  );
};

export default Card;
