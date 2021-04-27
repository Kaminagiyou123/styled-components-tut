import styled from "styled-components";
const color = `orange`;
const padding = `padding:1rem`;
const margin = `margin:1rem`;

const border = (width = "3px") => {
  return ` border:green solid ${width} `;
};
export const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  ${padding};
  ${margin};
  ${border("10px")}
`;

export const Button2 = styled.button`
  background: ${color};
  border-radius: 3px;
  border: none;
  color: var(--primaryColor);
  ${padding};
  ${margin};
  ${border()}
`;
