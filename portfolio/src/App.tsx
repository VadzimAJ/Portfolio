import React from 'react';
import styled from 'styled-components';
import './layout/header/Header'
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/sections/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills/>
      <Works />
      <Contacts/>
      <Footer/>
    </div>

  );
}

export default App;
