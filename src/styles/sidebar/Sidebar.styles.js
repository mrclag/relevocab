import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 0;
  height: 100vh;
  background-color: #eee;
  border-right: 1px solid black;
  z-index: 3;
  .selectMenu {
    width: 250px;
    font-size: 13px;
    padding-left: 30px;
  }
  hr {
    margin: 0;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 30px;
  align-items: center;
  color: black;
  display: flex;
  height: 70px;
  background: linear-gradient(
    62deg,
    rgba(230, 228, 255, 1) 0%,
    rgba(151, 167, 255, 1) 98%
  );
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  .link {
    text-decoration: none;
    color: black;
  }
`;

export const customStyles = {
  container: provided => ({
    ...provided,
    display: 'inline-block',
    width: '250px',
    minHeight: '1px',
    textAlign: 'left',
    border: 'none'
  }),
  control: provided => ({
    ...provided,
    border: '1px solid #eee',
    borderRadius: '0',
    minHeight: '1px',
    height: '30px'
  }),
  input: provided => ({
    ...provided,
    minHeight: '1px'
  }),
  dropdownIndicator: provided => ({
    ...provided,
    minHeight: '1px',
    paddingTop: '0',
    paddingBottom: '0',
    color: '#757575'
  }),
  indicatorSeparator: provided => ({
    ...provided,
    minHeight: '1px',
    height: '15px'
  }),
  clearIndicator: provided => ({
    ...provided,
    minHeight: '1px'
  }),
  valueContainer: provided => ({
    ...provided,
    minHeight: '1px',
    height: '25x',
    paddingTop: '0',
    paddingBottom: '0'
  }),
  singleValue: provided => ({
    ...provided,
    minHeight: '1px',
    paddingBottom: '2px'
  })
};
