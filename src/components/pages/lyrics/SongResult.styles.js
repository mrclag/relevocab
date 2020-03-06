import styled from 'styled-components';

export const SongResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding-top: 5px;
  padding-bottom: 5px;

  .song {
    &-img {
      width: 100px;
      text-align: center;
      padding-top: 20px;
      img {
        height: 50px;
        width: 50px;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      width: 200px;
      padding-top: 20px;

      .title {
        font-size: 16px;
        font-weight: bold;
      }
      .artist {
        font-size: 14px;
      }
      .numcards {
        font-size: 12px;
        font-style: italic;
      }
    }

    &-cards {
      color: darkblue;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 600px;
      .card {
        border: 0.5px solid darkblue;
        margin-right: 3px;
        margin-bottom: 3px;
        padding: 3px 10px;
        font-size: 0.8em;
      }
    }
  }
`;
