import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import SubHeader from '../SubHeader'

test('renders a SubHeader component', () => {
  const mockAddress = {
    district: "Parque olhos d'água",
    city: 'Ribeirão Preto'
  }

  render(
    <ThemeProvider theme={{ palette: { black: '#000', gray: '#000' } }}>
      <SubHeader address={mockAddress} />
    </ThemeProvider>
  )

  const districtText = screen.getByText(/Parque olhos d'água/i)
  expect(districtText).toBeInTheDocument()
  const cityText = screen.getByText(/Ribeirão Preto/i)
  expect(cityText).toBeInTheDocument()
})