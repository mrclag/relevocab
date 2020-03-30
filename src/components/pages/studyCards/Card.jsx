import React from 'react';
import { CardContainer } from './Card.styles';

export const Card = ({ content, flipped, setFlipped }) => {
  return (
    content && (
      <CardContainer onClick={() => setFlipped(!flipped)} flipped={flipped}>
        <div className="card">
          <div className="card-face card-face-front">{content.front}</div>
          <div className="card-face card-face-back">{content.back}</div>
        </div>
      </CardContainer>
    )
  );
};

export default Card;
