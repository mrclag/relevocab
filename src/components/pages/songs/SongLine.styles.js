import styled from 'styled-components';

export const SongLineWrapper = styled.div`
  border: 0.5px solid darkblue;
  margin-right: 3px;
  margin-bottom: 3px;
  padding: 3px 10px;
  cursor: default;
  width: 100px;
  height: 30px;
  font-size: 0.8em;
  color: ${(props) => (props.hovered ? 'white' : 'darkblue')};
  background: ${(props) => (props.hovered ? 'darkblue' : 'white')};
  display: flex;
  align-items: center; /* Vertical center alignment */
  justify-content: center;
  text-align: center;
`;
