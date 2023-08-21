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
  flex-direction:column;
  justify-content: center;
  align-items: center;
`

const SkillTitle = styled.h3`
max-width: 8em;
display: flex;
justify-content: center;
flex-wrap: wrap;
`