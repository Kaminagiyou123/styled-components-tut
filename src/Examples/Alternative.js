import React from "react";
import styled from "styled-components";
const StyledHeader = ({ title, className }) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2 className='random'>hello from all </h2>
    </section>
  );
};

const StyledWrapper = styled(StyledHeader)`
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
export default StyledWrapper;
