import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <FlexWrapper direction = "column" align = "center">
        <SectionTitle>I Am Available For Freelance</SectionTitle>
        <Button>Hire me</Button>
    
      </FlexWrapper>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
` 