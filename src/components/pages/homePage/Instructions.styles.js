import styled from 'styled-components';

export const InstructionsWrapper = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 1.25em;
  overflow: hide;
  .welcome-title {
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  li {
    margin: 30px 0;
  }
  .welcome-wrapper {
    border: 0.5px solid #ccc;
    border-radius: 5px;
    width: 700px;
    padding: 20px;
    background: white;
    @media screen and (max-width: 800px) {
      width: calc(100vw - 41px);
    }
  }
  @media screen and (max-width: 800px) {
    margin: 0px;
  }
`;
