import { render, screen } from '@testing-library/react'

import  Index from './Index'

test('renders a view', () => {
  render(<Index />)  

  const loadingComponent = screen.getByRole('progressbar')
  expect(loadingComponent).toBeInTheDocument()
})