import React from 'react'

import { ThemeProvider } from 'styled-components'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles'

import defaultTheme from './theme/defaultTheme'
import Routes from './routes'

let customTheme = createTheme(defaultTheme)
customTheme = responsiveFontSizes(customTheme)

function App() {
  return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <Routes />
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default App
