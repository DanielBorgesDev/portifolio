import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/Styles/themes/default"
import Header from "./styles/components/Header"
import AboutMe from "./styles/components/AboutMe"
import DividerWrapper from "./styles/components/DividerWrapper"
import Licenses from "./styles/components/Licenses"
import HireMe from "./styles/components/HireMe"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <DividerWrapper/>
      <AboutMe/>
      <DividerWrapper/>
      <Licenses/>
      <DividerWrapper/>
      <HireMe/>
      <GlobalStyle />
    </ThemeProvider>
  )
}