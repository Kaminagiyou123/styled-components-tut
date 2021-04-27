import React from "react";
import styled from "styled-components";
const Content = ({ className }) => {
  return (
    <div className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsum,
        autem non voluptate qui optio quasi minima perferendis velit nisi,
        voluptates provident ducimus necessitatibus hic laboriosam, distinctio
        molestiae exercitationem assumenda.
      </p>
    </div>
  );
};

export default styled(Content)`
  text-transform: captalize;
  padding: 2rem;
  ${(props) => `background:${props.theme.secondaryColor}`};
  ${(props) => `color:${props.theme.primaryColor}`};
`;
