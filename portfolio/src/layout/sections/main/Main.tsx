import React from 'react'; 
import styled from 'styled-components';
import photo from '../../../images/support.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container margin="0rem auto">
        <FlexWrapper justify = "space-around" align = "center"  wrap = "wrap-reverse" >
          <MainContent>
            <MainTitle>Web Developer</MainTitle>
            <Name>Vadim Anishchenko</Name>
            <SmallText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. 
              Exercitation veniam consequat sunt.
            </SmallText>
          </MainContent>
          <Photo src={photo} alt="photo"/>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );

};

const Photo = styled.img `
  max-width: 32.9rem;
  object-fit: cover;
`
const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`
const SmallText = styled.span`
  font-size: 1rem;
  font-style: normal;
  text-align: start;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.045rem;
`
const Name = styled.h2`
font-family: 'Montserrat';
font-size: 3.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: start;
padding-bottom: 0.625rem;
color: ${theme.colors.secondaryBgLgt}
`
const MainTitle = styled.h1`
  font-family: 'Tinos';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 0.625rem;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  max-width: 32.5rem;
  padding: 1rem 2rem 1rem 0;
`