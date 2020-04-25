import styled from 'styled-components';

export const DeckWrapper = styled.div`
  vertical-align: middle;
  line-height: 40px;
  margin-top: 0px;
  overflow: hidden
  display: flex;
  font-size: 0.8em;
  width: 250px;
  padding-left: 20px;
  padding-right: 30px;
  background-color: ${(props) =>
    props.selected || props.hovered ? 'white' : ''};
  color: ${(props) => (props.selected || props.hovered ? 'black' : 'white')};
  border-right: ${(props) =>
    props.selected || props.hovered ? '#2a416f' : 'none'};

  .hide {
    display: none;
  }
  .counter {
    padding: auto;
    transform: translateY(-10px);
  }

  .deck-list-item {
    color: ${(props) => (props.selected || props.hovered ? 'white' : 'black')};
    background: ${(props) =>
      props.selected || props.hovered ? '#2a416f' : 'white'};
    font-size: 0.8em;
    margin-right: 30px;
    font-weight: bold;
    border-radius: 2px;
    width: 18px;
    text-align: center;
    height: 18px;
    margin: auto 0;
    vertical-align: middle;
  }
`;
