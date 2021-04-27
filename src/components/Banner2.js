import React from "react";
import styled from "styled-components";

const Banner2 = ({ children, title, color }) => {
  return (
    <BannerWrapper color={color}>
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  );
};
const BannerWrapper = styled.div`
  color: ${(props) => props.color || "white"};
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  h1:hover {
    color: red;
  }
`;
export default Banner2;
