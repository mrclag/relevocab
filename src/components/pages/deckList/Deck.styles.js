import styled from 'styled-components';

export const DeckWrapper = styled.div`
  padding: 10px 20px;
  border-bottom: 0.5px solid #e7e7e7;
  display: flex;
  flex-direction: row;
  color: black;
  text-decoration: none;

  .deck-image {
    height: 60px;
    width: 60px;
    border: 1px solid #e7e7e7;
  }

  .deck-info {
    flex-direction: column;
    padding-left: 15px;

    .deck-title {
      font-size: 14px;
    }
    .deck-cards {
      font-size: 12px;
    }
    .deck-buttons {
      flex-direction: row;
      margin-top: 5px;
      button {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #f7f7f7;
        &:hover {
          color: white;
        }
      }
      .practice {
        background: #0039a6;
        border: none;
        margin-right: 10px;
        &:hover {
          background: #3e66b3;
        }
      }
      .details {
        background: #04960a;
        border: none;
        &:hover {
          background: #4dbd51;
        }
      }
    }
  }
  &:hover {
    border: 1px solid #e7e7e7;
    cursor: pointer;
  }
`;
