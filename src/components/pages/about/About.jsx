import React from 'react';

import {AboutWrapper} from './About.styles'

const About = () => {
  return (
    <>
      <AboutWrapper>
        <h1>About</h1>
        <div className="about-content">
          <div className="about">
            Vocarta is at the core a flashcards studying app.
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
            <div>What do you wish to see?</div>
            <div>Encounter a bug? What were you doing?</div>
            <br />
            <form action="">
              <input type="text" placeholder=" Name" />
              <textarea
                placeholder=" Write something..."
                cols="30"
                rows="5"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </AboutWrapper>
    </>
  );
};

export default About;