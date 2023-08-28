import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlyder>
      <FlexWrapper>
        <Slide>
          <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis illo accusantium at? Cumque, fugit et, qui minima quis, 
            rem quod obcaecati odit sapiente cupiditate sit illum beatae aperiam nesciunt adipisci.
          </Text>
          <Name>
            @vadim anishchenko
          </Name>

        </Slide>
      </FlexWrapper>

      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>

    </StyledSlyder>
  )

}

const StyledSlyder = styled.div`
  
`

const Slide = styled.div`
  max-width: 500px;
  text-align: center;
  
`

const Text = styled.p`
  padding: 5px;
`

const Name = styled.div`
  
`

const Pagination = styled.span`
  span{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    background-color: #73f7d6;
  }
`