import React from "react";
import styled from "styled-components";
import { PropsButton, BigBtn } from "./PropsButton";
const StyledHeader2 = ({ className, title }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <h2>this is your heading 2</h2>
      <PropsButton>Click me</PropsButton>
      <BigBtn color='blue'>Click me 2</BigBtn>
      <PropsButton color='red'>Click me 3</PropsButton>
    </div>
  );
};

export default styled(StyledHeader2)`
  h1 {
    color: ${(props) => props.color};
  }
  h2 {
    color: blue;
  }
  & :hover {
    color: yellow;
  }
`;
