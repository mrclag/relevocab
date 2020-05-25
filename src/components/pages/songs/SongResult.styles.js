import styled from 'styled-components';

export const SongResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  border-bottom: 1px solid #aaa;
  padding-top: 10px;
  padding-bottom: 10px;
  vertical-align: middle;

  .song {
    &-img {
      width: 80px;
      height: 80px;
      text-align: center;
      position: relative;
      margin: auto;

      img {
        width: 100%;
        height: auto;
      }
      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0.6;
        transition: 0.3s ease;
        .icon {
          color: white;
          font-size: 80px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          text-align: center;
        }
      }
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
      width: 500px;
      margin: auto;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
  }
  .song-img:hover .overlay {
    opacity: 1;
    cursor: pointer;
  }
`;
