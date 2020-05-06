import styled from 'styled-components';

export const DeckViewWrapper = styled.div`
  background: white;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
  padding: 0px;

  .left {
    flex: 2 0px;
    border: 1px solid #ddd;
    flex-direction: column;

    .deck-info {
      display: flex;
      flex-direction: row;
      height: 150px;
      border-bottom: 1px solid #ddd;
      padding: 20px;
      .deck-image {
        height: 100px;
        width: 100px;
        margin-right: 20px;
      }
      .deck-description {
        color: #333;
        margin-top: 15px;
        .deck-title {
          font-size: 24px;
        }
        .deck-cards {
          font-size: 18px;
        }
      }
    }
    .cards-wrapper {
      margin-top: 10px;
      overflow-y: scroll;
      max-height: calc(100vh - 200px);
    }
    .card {
      flex-direction: row;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border: none;
      &-front,
      &-back {
        width: 45%;
        border: 0.5px solid #eee;
      }
      &-details {
        cursor: pointer;
        width: 10%;
      }
    }
  }

  .right {
    flex: 1 0px;
    border: 1px solid #ddd;

    @media (max-width: 800px) {
      display: none;
    }
  }
`;
