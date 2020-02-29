import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import styled from 'styled-components';
import logo from '../images/vocarta_logo.png';

const Header = ({ signOut }) => {
  return (
    <HeaderWrapper>
      <div className="title">
        <img className="logo" src={logo} alt="logo" />
        Vocarta
      </div>
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
  position: relative;
  display: flex;
  flex-direction: row;
  top: 0;
  height: 60px;
  background: #0078d7;
  width: 100%;
  z-index: 555;
  vertical-align: middle;
  justify-content: space-between;

  button {
    color: #107bbd;
    margin-top: 10px;
    height: 40px;
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
    padding-left: 18px;
    align-items: center;
    color: white;
    display: flex;
    font-size: 30px;
    line-height: 60px;
    height: 60px;
    letter-spacing: 5px;

    .logo {
      width: 40px;
      margin-right: 20px;
    }
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
