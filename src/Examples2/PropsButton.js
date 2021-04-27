import styled from "styled-components";
export const PropsButton = styled.button`
  background: ${(props) => props.color || "brown"};
  color: yellowgreen;
`;
export const BigBtn = styled(PropsButton)`
  padding: 0.5rem;
  text-transform: capitalize;
  font-size: 3rem;
`;
