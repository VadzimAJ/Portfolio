import React from 'react'; 
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items}/>
    </StyledHeader>
  );

};

const StyledHeader = styled.header `
  background-color: #87db87;
  display: flex;
  justify-content: space-around;
`
