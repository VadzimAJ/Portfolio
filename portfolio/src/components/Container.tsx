import styled from "styled-components";

type ContainerWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  widht?: string
  margin?: string
}

export const Container = styled.div<ContainerWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  align-items: ${props => props.align || "center"};
  max-width: 67.5rem;
  width: 100%;
  min-height: 100%;
  margin: ${props => props.direction || "0 auto"};

`
