import React from "react";
import { ThemeProvider } from "styled-components";
//rrd
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
//Component
import Header from "./components/Header";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,243)",
      hr: "#fffff",
      border: "rgba(98, 84, 243, 0.5)",
      gradient:
        "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/products" element={<Shop />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
};

export default App;
