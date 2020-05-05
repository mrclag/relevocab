import styled from 'styled-components';

export const DeckWrapper = styled.div`
  padding: 5px 10px;
  border-bottom: 0.5px solid #e7e7e7;
  display: flex;
  flex-direction: row;

  .deck-image {
    height: 60px;
    width: 60px;
    border: 1px solid #e7e7e7;
  }

  .deck-info {
    flex-direction: column;
    padding-left: 15px;
    .deck-title {
      font-size: 12px;
    }
    .deck-cards {
      font-size: 10px;
    }
    .deck-buttons {
      flex-direction: row;
      button {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        &:hover {
          border: 1px solid black;
        }
      }
      .practice {
        background: gold;
        border: none;
        margin-right: 10px;
      }
      .details {
        background: lightgreen;
        border: none;
      }
    }
  }
`;
