import React from 'react'; 
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo'
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ["Home", "Skills", "Projects", "Testimony", "Contact"]
export const Header = () => {
  return (
    <StyledHeader >
      <Container align='end'> 
       
          <HeaderMenu menuItems={items}/>
      
      </Container>
    </StyledHeader>
  );

};

const StyledHeader = styled.header `
padding: .25rem 2rem;
margin: 0 1.5rem;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
padding: 2.5em 0 2.5em 0;
`
