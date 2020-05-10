import styled from 'styled-components';

export const SongSearchWrapper = styled.div`
  background: white;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: row;
  padding: 0px;

  .left {
    flex: 2 0px;
    border: 1px solid #ddd;
    flex-direction: column;

    .search-box {
      height: 200px;
      border: 1px solid lightblue;
    }

    .results {
      border: 1px solid lightgreen;

      &-title {
      }
      &-results {
        border: 1px solid pink;
        height: calc(100vh - 250px);
        overflow: scroll;
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
