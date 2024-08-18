'use client'

import React, { ButtonHTMLAttributes, FunctionComponent } from 'react'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  text,
  ...props
}) => (
  <button
    {...props}
    className="bg-main text-white rounded-md p-4 active:brightness-75"
  >
    {text}
  </button>
)

export default CustomButton
