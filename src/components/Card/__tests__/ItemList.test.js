import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import ItemList from '../ItemList'

test('renders a Header component', () => {
  render(
    <ThemeProvider theme={{ palette: { black: '#000', gray: '#000' } }}>
      <ItemList icon='iconMockSrc' text='Item list mock' />
    </ThemeProvider>
  )

  const itemListElement = screen.getByText(/Item list mock/i)
  expect(itemListElement).toBeInTheDocument()

  const iconElement = screen.getByRole('img')
  expect(iconElement).toBeInTheDocument()
})