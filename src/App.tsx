import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import AboutMe from "./styles/components/AboutMe"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AboutMe/>
      <GlobalStyle />
    </ThemeProvider>
  )
}