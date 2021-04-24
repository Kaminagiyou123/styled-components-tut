import React from "react";
import styled from "styled-components";
const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        aspernatur sapiente nostrum blanditiis quis modi repudiandae
        consequuntur quae cupiditate optio culpa rem excepturi iusto temporibus
        voluptas adipisci mollitia, id rerum.
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  background: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
`;
