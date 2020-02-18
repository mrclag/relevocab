import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import styled from 'styled-components';

const Header = ({ signOut }) => {
  return (
    <HeaderWrapper>
      <div className="title">RELEVOCAB</div>
      <button onClick={signOut}>Logout</button>
    </HeaderWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(Header);

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0;
  height: 70px;
  background: #0078d7;
  width: 100%;
  z-index: 555;
  vertical-align: middle;
  justify-content: space-between;

  button {
    color: #107bbd;
    margin-top: 10px;
    height: 50px;
    margin-right: 50px;
    width: 80px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #107bbd;
    outline: none;
    cursor: pointer;
    @media screen and (max-width: 800px) {
      margin-right: 5vw;
      height: 50px;
    }
  }

  .title {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 30px;
    align-items: center;
    color: white;
    display: flex;
    font-size: 1.5em;
    height: 8vh;
    letter-spacing: 9px;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 30px;
  align-items: center;
  color: #107bbd;
  display: flex;
  height: 8vh;
  letter-spacing: 9px;
`;
