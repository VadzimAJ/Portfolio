import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';


export const Skills = () => {
  return (
    <StyledSkills>
          <Container>
          <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify = "space-between" align = "center" wrap = "wrap" widht = "67.5rem" gap = "7.5rem">
              <Skill iconId={"js"} title={'JAVASCRIPT'}/>
              <Skill iconId={"ts"} title={'TYPESCRIPT'}/>
              <Skill iconId={"modgodb"} title={'MONGODB'}/>
              <Skill iconId={"postgresql"} title={'POSTGRESQL'}/>
              <Skill iconId={"jest"} title={'JEST'}/>
              <Skill iconId={"expressjs"} title={'EXPRESSJS'}/>
              <Skill iconId={"nestjs"} title={'NESTJS'}/>
              <Skill iconId={"docker"} title={'DOCKER'}/>
              <Skill iconId={"reactjs"} title={'REACTJS'}/>
              <Skill iconId={"reactnactive"} title={'REACTNATIVE'}/>
              <Skill iconId={"styledcomponents"} title={'STYLED COMPONENTS'}/>
              <Skill iconId={"redux"} title={'REDUX'}/>
              <Skill iconId={"git"} title={'GIT'}/>
            </FlexWrapper>
          </Container>
    </StyledSkills>
  );

};

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
