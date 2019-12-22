import styled from 'styled-components';
import posed from 'react-pose';

const modalBackgroundPoses = {
  open: {
    background: 'rgba(0, 0, 0, 0.5)',
    applyAtStart: {
      display: 'block'
    }
  },
  closed: {
    background: 'rgba(0, 0, 0, 0)',
    applyAtEnd: {
      display: 'none'
    }
  }
};

const modalPoses = {
  open: {
    opacity: 1,
    transition: {
      opacity: {
        type: 'tween',
        duration: 200
      }
    }
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: {
        type: 'tween',
        duration: 200
      }
    }
  }
};

export const Modal = styled(posed.div(modalPoses))`
  position: fixed;
  background: white;
  width: 200px;
  height: auto;
  top: 50%;
  text-align: center;
  font-family: Orbitron, Arial, Helvetica, sans-serif;
  left: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  .result {
    font-size: 1.25em;
    margin: 20px;
  }
`;

export const ModalBackground = styled(posed.div(modalBackgroundPoses))`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
`;
