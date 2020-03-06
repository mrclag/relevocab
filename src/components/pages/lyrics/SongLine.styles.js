import styled from 'styled-components';

export const SongLineWrapper = styled.div`
  border: 0.5px solid darkblue;
  margin-right: 3px;
  margin-bottom: 3px;
  padding: 3px 10px;
  font-size: 0.8em;
  color: ${props => (props.hovered ? 'white' : 'darkblue')};
  background: ${props => (props.hovered ? 'darkblue' : 'white')};
`;
