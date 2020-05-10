import React from 'react';
import { CardWrapper } from './Card.styles';

export const Card = ({ content, flipped, setFlipped }) => {
  return (
    content && (
      <CardWrapper onClick={() => setFlipped(!flipped)} flipped={flipped}>
        <div className="card">
          <div className="card-face card-face-front">{content.front}</div>
          <div className="card-face card-face-back">{content.back}</div>
        </div>
      </CardWrapper>
    )
  );
};

export default Card;
