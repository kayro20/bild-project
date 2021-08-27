import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import Card from '../Index'

test('renders a Card component', () => {
  const mockProduct = {
    photos: ['mockUrl'],
    name: 'Product mock',
    address: {
      city: 'Mock city',
      district: 'Mock district',
    }
  }

  const mockListInfo = {
    areaUtil: {
      text: 'usable area mock text',
      icon: 'key'
    },
    suites: {
      text: 'suites mock text',
      icon: 'bed'
    },
    isPrime: {
      text: 'is prime mock text',
      icon: 'pin'
    }
  }

  render(
    <ThemeProvider theme={{ palette: { black: '#000', gray: '#000' } }}>
      <Card info={mockProduct} listInfo={mockListInfo}/>
    </ThemeProvider>
  )

  const title = screen.getByText(/Product mock/i)
  expect(title).toBeInTheDocument()
  const city = screen.getByText(/Mock city/i)
  expect(city).toBeInTheDocument()
  const district = screen.getByText(/Mock district/i)
  expect(district).toBeInTheDocument()
  const carousel = screen.getByTestId('carousel-images')
  expect(carousel).toBeInTheDocument()
  const listItem = screen.getAllByTestId('list-item')
  expect(listItem.length).toBe(3)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})