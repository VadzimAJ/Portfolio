import styled from 'styled-components';

type WorkProrpsType = {
  title: string
  text: string
  src: string
}
export const Project = (props:WorkProrpsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt={props.title}/>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>demo</Link>
      <Link href={"#"}>code</Link>
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

