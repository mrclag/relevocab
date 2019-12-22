import React, { useState } from 'react';
import Select from 'react-select';

// Components
import NewCard from './NewCard';
import VocabList from './VocabList';
import AddDeck from './AddDeck';
import NavLink from './NavLink';

// Styles
import {
  SideBarWrapper,
  Title,
  NavLinks,
  customStyles
} from '../../styles/sidebar/Sidebar.styles';

const Sidebar = ({ deck, setDeck, addDeck, options }) => {
  console.log('Render sidebar');

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SideBarWrapper>
      <AddDeck isOpen={modalOpen} toggle={setModalOpen} addDeck={addDeck} />
      <Title>RELEVOCAB</Title>
      <NavLinks>
        <NavLink value="Home" className="link" to="/" />
        <NavLink value="Words" className="link" to="/words" />
        <NavLink value="WikiWords" className="link" to="/wiki" />
      </NavLinks>
      <hr />
      <h4
        style={{
          marginLeft: '30px',
          marginBottom: '5px',
          marginTop: '5px',
          fontSize: '0.8em'
        }}
      >
        Deck
      </h4>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {console.log(options)}
        <Select
          className="selectMenu"
          value={deck}
          options={options}
          onChange={deck => setDeck(deck)}
          styles={customStyles}
        />
        <button
          onClick={() => setModalOpen(true)}
          style={{ marginLeft: '5px' }}
        >
          +
        </button>
      </div>
      <br />
      <NewCard deck={deck} />
      <hr />
      <VocabList deck={deck} />
    </SideBarWrapper>
  );
};

export default React.memo(Sidebar);
