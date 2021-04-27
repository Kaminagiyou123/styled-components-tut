import styled, { css } from "styled-components";
import { rotate } from "./AnimatedBox";
const green = "green";

const Box = css`
  width: 150px;
  height: 150px;
  margin: 1rem;
  border: 2px solid ${(props) => props.color};
  animation: ${rotate} 3s ease-out infinite;
`;

export const Redbox = styled.div`
  ${Box};
`;

export const Greenbox = styled.div`
  ${Box};
`;
