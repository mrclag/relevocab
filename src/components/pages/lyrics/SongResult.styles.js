import styled from 'styled-components';

export const SongResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  border-bottom: 1px solid #333;
  padding-top: 10px;
  padding-bottom: 10px;

  .song {
    &-img {
      width: 100px;
      text-align: center;
      padding-top: 15px;
      img {
        height: 80px;
        width: 80px;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      width: 150px;
      padding-top: 20px;
      padding-left: 10px;

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
      height: 50px;
    }
  }
`;
