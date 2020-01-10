import React from 'react';

import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapper>
      <h1>ABOUT</h1>
      <div style={{ width: '40vw' }}>
        <div className="about">
          Relevocab is at the core a flashcards studying app.
          <br /> <br />
          This version currently targets users looking to expand Spanish
          vocabulary. Users create decks of cards to practice through either
          custom entry or using the Words search.
          <br /> <br />
          This project is created using React with Redux and hooks, with a
          Firebase backend. Relevant Vocabulary searches are populated using
          Wikipedia API and Words API, and translated using Google Translate
          API.
        </div>
        <div className="contact-form">
          <div className="feedback">Send Feedback / Comments</div>
          <form action="" style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="text" />
            <textarea id="" cols="30" rows="5"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  margin-left: 400px;
  margin-top: 10vh;
  font-size: 1.25em;
  .contact-form {
    margin-top: 10vh;
    form {
      display: 'flex',
      flex-direction: 'column'
    }
    input,
    textarea {
      margin: 5px 0;
    }
  }
`;
