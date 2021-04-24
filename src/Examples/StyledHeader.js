import React from "react";
import styled from "styled-components";
const StyledHeader = ({ title }) => {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <h2 className='random'>hello from all </h2>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  background: red;
  h1 {
    color: blue;
  }
  .random {
    color: blue;
  }
  & :hover {
    background: black;
  }
`;
export default StyledHeader;
