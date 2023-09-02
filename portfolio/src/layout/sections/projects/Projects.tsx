import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Project } from './project/Project';
import { Container } from '../../../components/Container';
import projectImg from '../../../images/image.jpg'

export const Projects = () => {
  return (
    <StyledWorks id="projects">
        <Container align = "start">
          <SectionTitle>Projects</SectionTitle>
          <FlexWrapper direction='row' align='center' justify ='space-evently' wrap='wrap'>
            <Project title = "Shelter" text = "Shelter for Pets" src = {projectImg}/>
            <Project title = "Plants" text = "Plants project" src = {projectImg}/>
          </FlexWrapper>
        </Container>
        
    </StyledWorks>
  );
};

const StyledWorks = styled.section `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`