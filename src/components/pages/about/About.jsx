import React, { useState } from 'react';
import { submitFeedback } from '../../../store/actions/appActions';
import { connect } from 'react-redux';

import { AboutWrapper } from './About.styles';

export const About = ({ submitFeedback }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback.');
    submitFeedback(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <AboutWrapper>
        <div className="about-wrapper">
          <div className="about-title">About</div>
          <div className="about-content">
            <div className="about">
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
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />
            <input
              type="text"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <textarea
              placeholder="Write something..."
              cols="30"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              required
            />
            <button>Send</button>
          </form>
        </div>
      </AboutWrapper>
    </>
  );
};

export default connect(null, { submitFeedback })(About);
