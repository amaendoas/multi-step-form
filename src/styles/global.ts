import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${( { theme } ) => theme.COLORS.WHITE};
    color: ${( { theme } ) => theme.COLORS.DARK_800};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`;