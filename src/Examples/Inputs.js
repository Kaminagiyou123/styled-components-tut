import styled from "styled-components";
export const BasicInputs = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Enter Value",
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;
export const AwesomeInputs = styled.input.attrs((props) => ({
  type: props.type || "number",
  placeholder: props.placeholder || "Enter Value",
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;
