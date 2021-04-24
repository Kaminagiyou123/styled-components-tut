import React from "react";
import { Button } from "../Button";
const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Button> hello I am button from header</Button>
    </div>
  );
};

export default Header;
