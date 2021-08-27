import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import Header from '../Header'

test('renders a Header component', () => {
  render(
    <ThemeProvider theme={{ palette: { black: '#000', gray: '#000' } }}>
      <Header>Header component</Header>
    </ThemeProvider>
  )
  const headerElement = screen.getByText(/Header component/i)
  expect(headerElement).toBeInTheDocument()
})