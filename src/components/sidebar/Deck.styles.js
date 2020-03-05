import styled from 'styled-components';

export const DeckWrapper = styled.div`
  vertical-align: middle;
  line-height: 30px;
  margin-top: 0px;
  overflow: hidden
  display: flex;
  font-size: 0.8em;
  width: 250px;
  padding-left: 20px;
  padding-right: 30px;
  background-color: ${props =>
    props.selected || props.hovered ? '#107bbd' : ''};
  color: ${props => (props.selected || props.hovered ? 'white' : 'black')};

  .hide {
    display: none;
  }
  .counter {
    padding: auto;
    transform: translateY(-5px);
  }

  .deck-list-item {
    color: ${props => (props.selected || props.hovered ? 'black' : 'white')};
    background: ${props =>
      props.selected || props.hovered ? 'white' : '#107bbd'};
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

  .deck-icon {
    height: 15px;
    width: 15px;
  }
`;
