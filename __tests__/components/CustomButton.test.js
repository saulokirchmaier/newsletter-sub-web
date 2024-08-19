import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import CustomButton from '@/components/CustomButton'

describe('CustomButton with provide text', () => {
  it('renders a button', () => {
    render(<CustomButton text="test button" />)

    const button = screen.getByText('test button')

    expect(button).toBeInTheDocument()
  })

  it('displays loading text and spinner when loading is true and be disabled', () => {
    render(<CustomButton text="test button" loadingText="loading..." loading />)

    const button = screen.getByText('loading...')

    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('calls the onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<CustomButton text="test button" onClick={handleClick} />)

    const button = screen.getByText('test button')

    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
