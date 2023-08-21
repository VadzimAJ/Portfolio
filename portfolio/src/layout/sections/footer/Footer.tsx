import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';

export const Footer = () =>{
  return (
    <StyledFooter>
      <Name>Vadim Anishchenko</Name>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon iconId={"js"}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon iconId={"ts"}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon iconId={"docker"}/>
          </SocialLink>
        </SocialItem>
      </SocialList>
      <Copyrught>2023 Vadim Anishchenko, All Rights Reserved.</Copyrught>
    </StyledFooter>

  );
};


const StyledFooter = styled.footer`
 display: flex;
 flex-direction: column;
 align-items: center;
  background-color: #383737;
`

const Name = styled.span`
  color:antiquewhite;
  
`
const SocialList = styled.ul`
display:flex;
flex-direction: row;
  
`
const SocialItem = styled.ul`
  
`

const SocialLink = styled.a`
  
`
const Copyrught = styled.small`
  color:aquamarine;
`