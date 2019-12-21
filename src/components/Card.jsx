import React, { useState } from 'react';
import { CardContainer } from '../styles/Card.styles';

const Card = ({ eng, foreign }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer onClick={() => setFlipped(!flipped)} flipped={flipped}>
      <div className="card">
        <div className="card__face card__face--front">{eng}</div>
        <div className="card__face card__face--back">{foreign}</div>
      </div>
    </CardContainer>
  );
};

export default Card;
