import { fireEvent, render, screen } from '@testing-library/react'
import Carousel from '../Index'

test('renders the carousel component', () => {
  render(<Carousel images={['mockUrl1']} />)
  const carouselElement = screen.getByTestId('carousel-images')
  expect(carouselElement).toBeInTheDocument()

  const carouselImage = screen.getByTestId('carousel-image')
  expect(carouselImage).toBeInTheDocument()

  const dotsElement = screen.getByTestId('carousel-dot')
  expect(dotsElement).toBeInTheDocument()

  expect(screen.getByTestId('carousel-image')).toHaveStyle(`background-image: url(mockUrl1)`)
})

test('change images by clicking on dots', () => {
  render(<Carousel images={['mockUrl1', 'mockUrl2']} />)
  const carouselElement = screen.getByTestId('carousel-images')
  expect(carouselElement).toBeInTheDocument()

  const dotsElement = screen.getAllByTestId('carousel-dot')
  fireEvent.click(dotsElement[1])

  expect(screen.getByTestId('carousel-image')).toHaveStyle(`background-image: url(mockUrl2)`)
})

