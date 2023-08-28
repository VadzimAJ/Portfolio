import React from 'react'; 
import styled from 'styled-components';
import photo from '../../../images/support.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify = "space-around" align = "center"  wrap = "wrap-reverse" >
          <MainContent>
            <MainTitle>Web Developer</MainTitle>
            <Name>Vadim Anishchenko</Name>
            <SmallText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veniam, est sed quaerat, reiciendis non consequuntur provident, 
              id sunt iure ea facilis aut commodi nihil cupiditate nam at voluptatem 
              accusantium. Fuga?
            </SmallText>
          </MainContent>
          <Photo src={photo} alt="photo"/>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );

};

const Photo = styled.img `
  max-width: 32.9em;
  object-fit: cover;
`
const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`
const SmallText = styled.span`
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: 0.045em;
`
const Name = styled.h2`
font-family: 'Montserrat';
font-size: 3.25em;
font-style: normal;
font-weight: 600;
line-height: normal;
color: ${theme.colors.secondaryBgLgt}
`
const MainTitle = styled.h1`
  font-family: 'Tinos';
  font-size: 1.25em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 1em;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  max-width: 32.5em;
  padding: 1em 2em 1em 0;
`