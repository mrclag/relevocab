import styled from 'styled-components';

export const CardContainer = styled.div`
  .card {
    width: 400px;
    height: 260px;
    margin: 40px 0;
    perspective: 600px;
    transition: transform 1s;
    border: 1px solid black;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
    transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'unset')};
  }

  .card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 260px;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card__face--front {
    background-color: #eee;
  }

  .card__face--back {
    transform: rotateY(180deg);
    background-color: #eee;
  }
`;
