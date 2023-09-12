import React from 'react'; 
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
  return (
      <StyledHeaderMenu>
                
        <Link href={`#${props.menuItems[0]}`} >
          {props.menuItems[0]} 
            <Mask>
              <span>{props.menuItems[0]}</span>
            </Mask>

            <Mask>
              <span>{props.menuItems[0]}</span>
            </Mask>
        </Link>

        <ul>
          {props.menuItems.slice(1).map((item:string, index:number) => {
            return <li style={{width:'fit-content'}} key={index} >
                      <Link href={`#${item}`}>{item} 
                        <Mask>
                          <span>{item}</span>
                        </Mask>
                        <Mask>
                          <span>{item}</span>
                        </Mask>
                      </Link>
                    </li>
          })}
        </ul>
      </StyledHeaderMenu>
  );

};
const Mask = styled.span`
  position: absolute;
  text-transform: capitalize;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.fontAccentLgt};

  font-family: 'Montserrat';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  & + & {
    top: 50%;
    span{
      display: inline-block;
      transform: translateY(-50.01%);
    }
  }
`

const StyledHeaderMenu = styled.nav `
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100%;

  ul {
    display: flex;
    justify-content: center; 
    align-items: center; 
    user-select: none;
    gap: 2rem;
    }
    
  & ul li:last-child a{
    padding: 0.75rem  1.25rem ;
    background: #5222D0;
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: 0.375rem;
    }

  & ul li:last-child:active{
    transform: translateY(50%);
    box-shadow: 0px 0.7rem 0.8rem rgba(0, 0, 0, 0.25);
  }
  & ul li:last-child span{
    color: ${theme.colors.fontSecondaryLgt};
  }

  & ul li:last-child span:first-child{
    transform: translateY(50%) translateX(25%);
    
  } 
  & ul li:last-child span:last-child span{
    display: none;
  }  

  & ul li:last-child:hover a:hover{
    box-shadow: 0px 0.5rem 0.5em rgba(0, 0, 0, 0.25);
    border-radius: 0.475rem;
    
  } 

`

const Link = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: transparent;
  position: relative;
  user-select: none;


  &::before{
    content: "";
    display: inline-block;
    height: .04rem;
    background-color: ${theme.colors.secondaryBgLgt};

    position: absolute;
    top: 50%;
    left: -.01rem;
    right: .01rem;
    z-index: 1;

    transform: scale(0);

  }

  &:hover {

    &::before{
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(.01em);
      color: ${theme.colors.secondaryBgLgt};
    }

    ${Mask} + ${Mask} {
      transform: skewX(12deg) translateX(-.01em);
    }

    ul li:last-child &::before {
    opacity: 0;
    
  }
  }

`
