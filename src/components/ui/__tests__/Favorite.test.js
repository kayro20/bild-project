import { fireEvent, render, screen } from '@testing-library/react'
import Favorite from '../Favorite'

test('renders the favorite component', () => {  
  render(<Favorite />)
  const filledStar = screen.getByTestId('filled-star')
  expect(filledStar).toBeInTheDocument()
  fireEvent.click(filledStar)

  const borderStar = screen.getByTestId('border-star')
  expect(borderStar).toBeInTheDocument()
  fireEvent.click(borderStar)

  expect(screen.getByTestId('filled-star')).toBeInTheDocument()
})