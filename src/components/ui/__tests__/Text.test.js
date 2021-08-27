import { render, screen } from '@testing-library/react'

import Text from '../Text'

test('renders a text', () => {
  const theme = {
    palette: {
      black: '#000'
    }
  }
  
  render(<Text theme={theme} size='sm' color='black'>Text test</Text>)
  const textElement = screen.getByText(/Text test/i)
  expect(textElement).toBeInTheDocument()
})