import styled from 'styled-components';

export const CardContainer = styled.div`
  .card {
    width: 500px;
    height: 320px;
    margin: 40px 0;
    perspective: 600px;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
    transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'unset')};
  }

  .card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 320px;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card__face--front {
    background-color: #97c3e9;
  }

  .card__face--back {
    transform: rotateY(180deg);
    background-color: #cee0dc;
  }
`;
