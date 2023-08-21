import React from 'react'; 
import styled from 'styled-components';
import photo from '../../../images/support.png'
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify = "space-between" align = "center"  wrap = "wrap-reverse" widht = "80em">
        <div>
          <span>Hi There !</span>
          <h2>I am a Vadim Anishchenko</h2>
          <h1>A Web Developer</h1>
        </div>
        <Photo src={photo} alt="photo"/>
      </FlexWrapper>
    </StyledMain>
  );

};

const Photo = styled.img `
  width: 350px;
  height: 350px;
  object-fit: cover;
`
const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cdd6ba;
  border: .15em solid blue;
`