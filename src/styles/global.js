import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

html, body, #app {
    height: 100%;
}

body {
  background: #F5F5F5;
  text-rendering: opmitizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: Arial, Helvetica, sans-serif;
}

body, input, button {
    font-family: Arial, Helvetica, sans-serif;
}

`;