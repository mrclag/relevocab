import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import styled from 'styled-components';

const Header = ({ signOut }) => {
  return (
    <HeaderWrapper>
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
  margin-top: 30px;
  position: absolute;
  top: 0;
  right: 100px;

  button {
    color: #107bbd;
    margin-top: 5px;
    height: 50px;
    width: 80px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #107bbd;
    outline: none;
  }
`;
