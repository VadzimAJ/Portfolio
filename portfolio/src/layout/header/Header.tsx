import React from 'react'; 
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo'
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
  return (
    <StyledHeader >
      <Container>
        <FlexWrapper justify='space-around' align='center'>
          <Logo />
          <HeaderMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );

};

const StyledHeader = styled.header `
padding: 1.25em 0;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
`
