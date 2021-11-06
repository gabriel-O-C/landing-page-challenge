import React from "react";
import { ThemeProvider } from "styled-components";
import { Cta, Header, Hero, TwoColumns } from "./components";
import { theme } from "./theme";
import './index.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Cta />
      <TwoColumns />

    </ThemeProvider>
  );
}

export default App;
