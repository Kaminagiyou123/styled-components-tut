import "./App.css";
import React, { useState } from "react";
import { Banner, SecondBanner } from "./components/Banner";
function App() {
  return (
    <div>
      <Banner>
        <h1>first banner</h1>
      </Banner>
      <SecondBanner>
        <h1>second banner</h1>
      </SecondBanner>
    </div>
  );
}

export default App;
