import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const ligthTheme = {
  fontColor: "#2c2c2c",
  bgColor: "#FCFBFC",

  accent: "#0095f6",
  borderColor: "rgb(219, 219, 219)"
}

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c"
}

export const GlobalStyles = createGlobalStyle`
  ${reset}
  input {
    all: unset;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.bgColor};
    font-size: 14px;
    color: rgb(38, 38, 38);
  }
  a {
    text-decoration: none;
  }
`