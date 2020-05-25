import styled from 'styled-components';

export const WordWrapper = styled.div`
  height: 40px;
  width: 399px;
  border: ${(props) =>
    props.selectedWord ? '3px solid #107bbd' : '0.5px solid #ccc'};
  border-radius: ${(props) => (props.selectedWord ? '10px' : '5px')};
  margin-bottom: 5px;
  color: black;
  background: white;
  display: flex;
  font-size: 0.92em;
  cursor: pointer;

  .add-button {
    border-right: ${(props) =>
      props.selectedWord ? '0.5px solid white' : '0.5px solid #107bbd'};
    border-radius: 5px 0 0 5px;
    background: #107bdd;
    width: 40px;
    height: 40px;
    display: flex;
    vertical-align: middle;
    align-items: center;
    cursor: pointer;
    .plus {
      font-size: 20px;
      margin: auto;
      color: white;
    }
    &:hover {
      background: white;
      .plus {
        color: #107bbd;
      }
    }
  }
  .word-text {
    &-front {
      padding-top: 10px;
      text-align: center;
      vertical-align: middle;
      width: 180px;
    }
    &-back {
      padding-top: 10px;
      text-align: center;
      vertical-align: middle;
      border-left: 0.5px solid #107bbd;
      width: 180px;
    }
  }
  .word-word {
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    .word-text-front {
      width: calc(50vw - 30px);
    }
    .word-text-back {
      width: calc(50vw - 30px);
    }
  }
`;
