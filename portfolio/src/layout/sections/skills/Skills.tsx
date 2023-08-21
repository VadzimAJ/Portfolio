import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';


export const Skills = () => {
  return (
    <StyledSkills>
        <SectionTitle>My Skills</SectionTitle>

        <FlexWrapper justify = "space-between" align = "center" wrap = "wrap" widht = "30em">
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

    </StyledSkills>
  );

};

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d47484;
`
