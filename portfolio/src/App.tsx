import React from 'react';
import styled from 'styled-components';
import './layout/header/Header'
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/sections/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills/>
      <Projects />
      <Testimony/>
      <Slogan/>
      <Contacts/>
      <Footer/>
    </div>

  );
}

export default App;
