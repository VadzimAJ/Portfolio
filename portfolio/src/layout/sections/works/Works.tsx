import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { Project } from './project/Project';
import projectImg from '../../../images/image.jpg'


const items = ["All", "Landing Page", "React", "Spa"]

export const Works = () => {
  return (
    <StyledWorks>
        <SectionTitle>Works</SectionTitle>
        <Menu menuItems={items}/>
      <FlexWrapper direction='row' align='center' justify ='space-around' wrap='wrap'>
        <Project title = "Shelter" text = "Shelter for Pets" src = {projectImg}/>
        <Project title = "Plants" text = "Plants project" src = {projectImg}/>
      </FlexWrapper>

    </StyledWorks>
  );
};

const StyledWorks = styled.section `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: aquamarine;
`