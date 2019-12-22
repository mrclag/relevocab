import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 200px;
  left: 40%;
`;

export const CardButton = styled.button`
  height: 50px;
  width: 75px;
  background-color: ${props => props.color};
  border: none;
  color: white;
  margin: 10px;
`;
