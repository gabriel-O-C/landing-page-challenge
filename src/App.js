import React from "react";
import { ThemeProvider } from "styled-components";
import { Header, Hero } from "./components";
import { theme } from "./theme";
import './index.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />

    </ThemeProvider>
  );
}

export default App;
