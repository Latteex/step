import React from 'react'
import { cn } from '@/utils/cn'
import { ButtonProps, ButtonVariant } from './Button.types'

const variantClasses: Record<ButtonVariant, string> = {
  'primary-black': 'bg-button-primary-black text-text-white hover:bg-button-primary-black/90',
  'primary-white': 'bg-button-primary-white text-text-primary border border-border-main hover:bg-gray-100',
  'primary-brand': 'bg-button-primary-brand text-white hover:bg-button-primary-brand/90',
  'secondary-brand': 'bg-button-secondary-brand text-text-brand hover:bg-button-secondary-brand/80',
  'secondary-main': 'bg-button-secondary-main text-text-primary border border-border-main hover:bg-gray-50',
  'secondary-gray': 'bg-button-secondary-gray text-text-secondary hover:bg-button-secondary-gray/80',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary-brand',
  size = 'md',
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-brand focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        (disabled || isLoading) && 'opacity-50 cursor-not-allowed',
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  )
}
