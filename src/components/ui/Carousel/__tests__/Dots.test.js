import { fireEvent, render, screen } from '@testing-library/react'
import Dots from '../Dots'

test('renders the dots component', () => {  
  render(<Dots active={true} dots={['mockDot']} />)
  const dotElement = screen.getByTestId('carousel-dot')
  expect(dotElement).toBeInTheDocument()
})

test('renders filled dot when clicked', () => {
  const onChangeIndex = jest.fn()
  render(<Dots dots={['mockDot1']} activeIndex={0} onChangeIndex={onChangeIndex}/>)
  const dotsElement = screen.getAllByTestId('carousel-dot')
  expect(dotsElement[0]).toHaveStyle(`background: #FFF`)  
})

test('click on dot', () => {
  const onChangeIndex = jest.fn()  
  render(<Dots dots={['mockDot1', 'mockDot2']} activeIndex={1} onChangeIndex={onChangeIndex}/>)
  const dotsElement = screen.getAllByTestId('carousel-dot')
  fireEvent.click(dotsElement[1])
  expect(onChangeIndex).toHaveBeenCalledTimes(1)
})