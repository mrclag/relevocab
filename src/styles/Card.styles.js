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
    box-shadow: 3px 4px 8px 1px rgba(0, 0, 0, 0.3);
    position: relative;
    transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'unset')};

    @media screen and (max-width: 800px) {
      width: 90vw;
    }
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 320px;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    &-front {
      background-color: #97c3e9;
    }
    &-back {
      transform: rotateY(180deg);
      background-color: #cee0dc;
    }
  }
`;
