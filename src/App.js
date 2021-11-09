import React from "react";
import { ThemeProvider } from "styled-components";
import { Cards, Cta, Footer, Header, Hero, PhoneSection, SocialProof, TwoColumns } from "./components";
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
      <PhoneSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
