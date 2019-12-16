import React from 'react';
import { CardContainer } from '../styles/Card.styles';

const Card = ({ eng, foreign }) => {
  return (
    <CardContainer>
      <div className="card">
        <div className="front">
          <div className="eng">{eng}</div>
        </div>
        <div className="back">
          <div className="translated">{foreign}</div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
