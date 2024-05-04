import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  scroll-behavior: smooth;
  /* 1rem = 10px */
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

body::-webkit-scrollbar-thumb {
 
 background: #fff;
   border: 5px solid transparent;
   border-radius: 9px;
   background-clip: content-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

`;
