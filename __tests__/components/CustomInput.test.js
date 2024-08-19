import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import CustomInput from '@/components/CustomInput'

describe('CustomInput', () => {
  const mockRegister = jest.fn()

  it('renders the input with the provided label', () => {
    render(<CustomInput label="test" name="test" register={mockRegister} />)

    const label = screen.getByText('test')
    expect(label).toBeInTheDocument()
  })

  it('calls the register function with the correct name', () => {
    render(<CustomInput label="test" name="test" register={mockRegister} />)

    expect(mockRegister).toHaveBeenCalledWith('test')
  })

  it('displays an error message when error prop is provided', () => {
    render(
      <CustomInput
        label="test"
        name="test"
        register={mockRegister}
        error="This field is required"
      />
    )

    const errorMessage = screen.getByText('This field is required')
    expect(errorMessage).toBeInTheDocument()
  })

  it('allows text input', () => {
    render(<CustomInput label="test" name="test" register={mockRegister} />)

    const input = screen.getByLabelText('test')
    fireEvent.change(input, { target: { value: 'Test' } })

    expect(input).toHaveValue('Test')
  })

  it('disable input and do not allows text input', () => {
    render(
      <CustomInput
        label="test"
        name="test"
        register={mockRegister}
        placeholder="Enter your test"
        disabled
      />
    )

    const input = screen.getByLabelText('test')
    expect(input).toBeDisabled()
  })

  it('applies the correct placeholder text to the input', () => {
    render(
      <CustomInput
        label="test"
        name="test"
        register={mockRegister}
        placeholder="Enter your test"
      />
    )

    const input = screen.getByLabelText('test')
    expect(input).toHaveAttribute('placeholder', 'Enter your test')
  })
})
