import styled from 'styled-components';

export const InstructionsWrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  font-size: 1.25em;
  width: 40vw;
  li {
    margin: 30px 0;
  }
  @media screen and (max-width: 800px) {
    margin-left: 5vw;
    width: 90vw;
    margin-right: 5vw;
  }
`;
