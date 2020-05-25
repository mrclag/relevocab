import styled from 'styled-components';

export const AboutWrapper = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  overflow: hide;

  .about-wrapper {
    background: white;
    border: 0.5px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    padding-bottom: 30px;
  }
  .about-title {
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  font-size: 1.1em;
  .contact-form {
    margin-top: 5px;
    background: white;
    border: 0.5px solid #ccc;
    padding: 20px;
    form {
      display: flex;
      flex-direction: column;
    }
    input,
    textarea {
      padding: 3px;
      padding-left: 10px;
      padding-right: 10px;
      margin: 3px 0;
    }
  }
  .feedback {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .about-content {
    width: 600px;
  }

  button {
    color: white;
    margin-top: 5px;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    height: 60x;
    background-color: #107bbd;
    border-radius: 5px;
    border: 1px solid #107bbd;
    outline: none;
    cursor: pointer;
    &:hover {
      background: white;
      color: #107bbd;
    }
  }

  .bgImage {
    position: absolute;
    top: 20vh;
    z-index: 0;
    right: 0;
    img {
      height: 50%;
      width: 50%;
    }
  }

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-top: 0px;
    .about-content {
      width: 90vw;
    }
  }
`;
