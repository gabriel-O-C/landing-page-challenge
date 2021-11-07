import React from "react";
import { ThemeProvider } from "styled-components";
import { Cards, Cta, Header, Hero, SocialProof, TwoColumns } from "./components";
import { theme } from "./theme";
import './index.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Cta />
      <TwoColumns />
      <Cards />
      <SocialProof />

    </ThemeProvider>
  );
}

export default App;
