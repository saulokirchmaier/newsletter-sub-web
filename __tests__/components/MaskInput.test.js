import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import MaskInput from '@/components/MaskInput'

describe('MaskInput', () => {
  const mockRegister = jest.fn()

  it('renders the input with the provided label', () => {
    render(<MaskInput label="test" name="test" register={mockRegister} />)

    const label = screen.getByText('test')
    expect(label).toBeInTheDocument()
  })

  it('calls the register function with the correct name', () => {
    render(
      <MaskInput
        label="test"
        name="test"
        register={mockRegister}
        mask="(99) 9 9999-9999"
        placeholder="Teste telefone"
      />
    )

    expect(mockRegister).toHaveBeenCalledWith('test')
  })

  it('displays an error message when error prop is provided', () => {
    render(
      <MaskInput
        label="test"
        name="test"
        register={mockRegister}
        mask="(99) 9 9999-9999"
        placeholder="Teste telefone"
        error="Digite o telefone"
      />
    )

    const errorMessage = screen.getByText('Digite o telefone')
    expect(errorMessage).toBeInTheDocument()
  })

  it('allows text input', () => {
    render(
      <MaskInput
        label="test"
        name="test"
        register={mockRegister}
        mask="(99) 9 9999-9999"
        placeholder="Teste telefone"
        error="Digite o telefone"
      />
    )

    const input = screen.getByLabelText('test')
    fireEvent.change(input, { target: { value: '11999999999' } })

    expect(input).toHaveValue('(11) 9 9999-9999')
  })

  it('disable input and do not allows text input', () => {
    render(
      <MaskInput
        label="test"
        name="test"
        register={mockRegister}
        mask="(99) 9 9999-9999"
        placeholder="Teste telefone"
        error="Digite o telefone"
        disabled
      />
    )

    const input = screen.getByLabelText('test')
    expect(input).toBeDisabled()
  })

  it('applies the correct placeholder text to the input', () => {
    render(
      <MaskInput
        label="test"
        name="test"
        register={mockRegister}
        placeholder="Digite seu telefone"
      />
    )

    const input = screen.getByLabelText('test')
    expect(input).toHaveAttribute('placeholder', 'Digite seu telefone')
  })
})
