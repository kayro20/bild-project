import { render, screen } from '@testing-library/react'
import Loading from '../Loading'

test('renders the loading component', () => {  
  render(<Loading />)
  const loadingElement = screen.getByRole('progressbar')
  expect(loadingElement).toBeInTheDocument()
})