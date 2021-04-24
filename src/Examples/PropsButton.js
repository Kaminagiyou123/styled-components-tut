import styled from "styled-components";

export const PropsButton = styled.button`
  color: black;
  font-size: ${(props) => (props.big ? "3rem" : `1rem`)};
  margin: 1rem;
`;
export const DangerButton = styled(PropsButton)`
  background: red;
`;
export const SuccessButton = styled(PropsButton)`
  background: green;
`;
export const BigButton = styled(PropsButton)`
  margin: 0.5rem;
  text-transform: capitalize;
  font-size: 3rem;
`;
