import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>
        Testimony
      </SectionTitle>
      <FlexWrapper direction = "column" align = "center">
        <Icon iconId="js"></Icon>
        <Slider/>
      </FlexWrapper>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`