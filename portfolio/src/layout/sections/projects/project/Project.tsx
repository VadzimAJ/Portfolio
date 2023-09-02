import styled from 'styled-components';
import { Menu } from '../../../../components/menu/Menu';

type ProjectrorpsType = {
  title: string
  text: string
  src: string
}

const items = ["JAVASCRIPT", "POSTGERSQL", "REACT", "REDUX"]

export const Project = (props:ProjectrorpsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt={props.title}/>
      <Title>{props.title}</Title>
      <Menu menuItems={items}/>
      <Text>{props.text}</Text>
    </StyledProject>
  );
};

const StyledProject = styled.div`
display: flex;
flex-direction: column;
  
`
const Title = styled.h3`

`
const Text = styled.span`
`

const Link = styled.a`
  
`

const Image = styled.img`
  
`

