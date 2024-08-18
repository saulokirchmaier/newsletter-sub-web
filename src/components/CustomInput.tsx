import React, { InputHTMLAttributes, FunctionComponent } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  register: any
  error?: string
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
  label,
  name,
  register,
  error,
  ...props
}) => (
  <div className="flex flex-col gap-2 w-full max-w-[350px]">
    <label className="font-light text-white" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      name={name}
      {...register(name)}
      {...props}
      className="px-4 py-2 bg-input-bg rounded-full placeholder:text-placeholder-input"
    />
    <p className="font-light text-sm">{error}</p>
  </div>
)

export default CustomInput
