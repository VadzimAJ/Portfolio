import React from 'react'; 
import styled from 'styled-components';

type MenuPropsType = {
  transformType?: string;
}

export const Menu = (props: { menuItems: Array<string> } & MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item:string, index:number) => {
          return (
            <li style={{ textTransform: 'capitalize' }} key={index}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 2em;
  }
`

const ListItem = styled.li