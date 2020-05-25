import React from 'react';

import { AboutWrapper } from './About.styles';

export const About = () => {
  const submitFeedback = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback.');
    
  };

  return (
    <>
      <AboutWrapper>
        <div className="about-wrapper">
          <div className="about-title">About</div>
          <div className="about-content">
            <div className="about">
              Vocarta is at the core a flashcards studying app.
              <br /> <br />
              This beta version currently targets users looking to expand only
              Spanish vocabulary. Users create decks of cards to practice
              through either custom entry or using the Words search.
              <br /> <br />
              This project is created using React with Redux and hooks, with a
              Firebase backend. Relevant Vocabulary searches are populated using
              Wikipedia API and Words API, and translated using Google Translate
              API. Pages and components are fully mobile-responsive.
              <br />
              <br />
              Created by Matthew Clagett
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="feedback">Send Feedback / Comments</div>
          <div>What do you wish to see?</div>
          <div>Encounter a bug? What were you doing?</div>
          <br />
          <form action="" onSubmit={submitFeedback}>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email (optional)" />
            <textarea
              placeholder="Write something..."
              cols="30"
              rows="5"
              required
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </AboutWrapper>
    </>
  );
};

export default About;
