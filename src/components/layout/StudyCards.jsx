import React from 'react';

import styled from 'styled-components';

import Card from '../Card';
import DrawButton from '../DrawButton';

const StudyCards = ({ eng, foreign, drawCard }) => {
  return (
    <ContentWrapper>
      <Card eng={eng} foreign={foreign} />
      <DrawButton drawCard={drawCard} />
    </ContentWrapper>
  );
};

export default StudyCards;

const ContentWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 200px;
  left: 40%;
`;
