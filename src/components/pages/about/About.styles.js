import styled from 'styled-components';

export const AboutWrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  .about-wrapper {
    background: white;
    border: 1px solid #333;
    padding: 20px;
    border-radius: 15px;
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
    margin-left: 5vw;
    .about-content {
      width: 90vw;
    }
  }
`;
