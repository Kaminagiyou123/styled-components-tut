import "./App.css";
import styled from "styled-components";
import Hero from "./components/Hero";
import img1 from "./Images/image1.jpg";
import img2 from "./Images/image2.jpg";
import Banner2 from "./components/Banner2";
import { DangerButton } from "./Examples/PropsButton";
function App() {
  return (
    <div>
      <Hero img={img1}>
        <Banner2 title='hello'>
          <DangerButton big>Click Me</DangerButton>
        </Banner2>
      </Hero>
      <Hero img={img2} />
      <Hero big />
    </div>
  );
}

export default App;
