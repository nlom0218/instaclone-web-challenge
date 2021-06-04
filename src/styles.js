import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const ligthTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray"
}

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c"
}

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.bgColor}
  }
`