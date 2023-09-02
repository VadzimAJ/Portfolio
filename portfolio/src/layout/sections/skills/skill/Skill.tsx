import React from "react";
import styled from 'styled-components';
import { Icon } from "../../../../components/icon/Icon";

type SkillProprsType = {
  iconId: string
  title: string
}

export const Skill = (props: SkillProprsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}/>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
}

const StyledSkill = styled.div`
  display: flex;
  position: relative;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`

const SkillTitle = styled.h3`
max-width: 8em;
display: flex;
position: absolute;
justify-content: center;
flex-wrap: wrap;

text-align: center;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.135375em;
text-transform: uppercase;
padding-top: 1.375em;
top: 100%;
`