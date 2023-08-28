import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';

export const Footer = () =>{
  return (
    <StyledFooter>
      <Name>Vadim Anishchenko</Name>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon iconId={"mail"}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon iconId={"linkedin"}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon iconId={"github"}/>
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
`

const Name = styled.span`
  
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
`