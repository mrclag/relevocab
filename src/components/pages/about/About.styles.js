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
  }
  .about-title {
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  font-size: 1.1em;
  .contact-form {
    margin-top: 8vh;

    form {
      display: flex;
      flex-direction: column;
    }
    input,
    textarea {
      padding: 5px;
      margin: 5px 0;
    }
  }
  .feedback {
    font-weight: bold;
  }
  .about-content {
    width: 40vw;
  }

  button {
    color: #107bbd;
    margin-top: 5px;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    height: 50x;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #107bbd;
    outline: none;
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

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
    margin-top: 0px;
    .about-content {
      width: 90vw;
    }
  }
`;
