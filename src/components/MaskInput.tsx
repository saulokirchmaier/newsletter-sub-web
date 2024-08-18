import React, { FunctionComponent } from 'react'
import InputMask from 'react-input-mask'

interface MaskInputProps {
  label: string
  mask: string
  name: string
  placeholder: string
  register: any
  error?: string
}

const MaskInput: FunctionComponent<MaskInputProps> = ({
  label,
  mask,
  name,
  placeholder,
  register,
  error,
  ...props
}) => (
  <div className="flex flex-col gap-2 w-full max-w-[350px]">
    <label className="font-light text-white" htmlFor={name}>
      {label}
    </label>
    <InputMask
      id={name}
      name={name}
      mask={mask}
      placeholder={placeholder}
      className="px-4 py-2 bg-input-bg rounded-full placeholder:text-placeholder-input"
      {...register(name)}
      {...props}
    />
    <p className="font-light text-sm">{error}</p>
  </div>
)

export default MaskInput
