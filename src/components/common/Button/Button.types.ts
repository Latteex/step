import { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary-black' | 'primary-white' | 'primary-brand' | 'secondary-brand' | 'secondary-main' | 'secondary-gray'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
}
