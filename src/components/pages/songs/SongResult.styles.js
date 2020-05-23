import styled from 'styled-components';

export const SongResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  border-bottom: 1px solid #333;
  padding-top: 10px;
  padding-bottom: 10px;
  vertical-align: middle;

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
    &-addButton {
      height: 50px;
      width: 50px;
      background: #0078d7;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 2px;
      font-size: 10px;
      margin-top: 30px;
    }

    &-info {
      display: flex;
      flex-direction: column;
      width: 150px;
      padding-left: 10px;
      justify-content: center;

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
      margin: auto;
    }
  }
`;
