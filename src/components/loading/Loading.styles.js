import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  text-align: center;
  flex-direction: column;

  .loading-text {
    font-size: 1.4em;
    margin-top: 5vh;
    color: #123abc;
    font-family: Cairo;
    transform: translateX(-5px);
  }
`;
