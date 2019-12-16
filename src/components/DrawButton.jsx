import React from 'react';
import { Button } from '../styles/DrawButton.styles';

const DrawButton = ({ drawCard }) => {
  return (
    <Button className="btn" onClick={drawCard}>
      Draw Card
    </Button>
  );
};

export default DrawButton;
