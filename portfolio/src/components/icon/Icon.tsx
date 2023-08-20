import React from 'react'; 
import styled from 'styled-components';
import iconsSprite from '../../images/icos-sprite.svg'

type IconPropseType = {
  iconId: string
  width?: string
  heigth?: string
}

export const Icon = (props: IconPropseType) => {
  return (
    <svg width={props.width || "50"} height={props.heigth || "50"} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={ `${iconsSprite}#${props.iconId}`} />
    </svg>
  );

};