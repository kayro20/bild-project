import { render, screen } from '@testing-library/react'
import Title from '../Title'

test('renders a title', () => {
  const theme = {
    palette: {
      black: '#000'
    }
  }
  render(<Title theme={theme}>Title Test</Title>)
  const titleElement = screen.getByText(/Title Test/i)
  expect(titleElement).toBeInTheDocument()
})