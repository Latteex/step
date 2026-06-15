// Глобальные типы проекта

export interface NavItem {
  label: string
  href: string
}

export interface ButtonProps {
  variant?: 'primary-black' | 'primary-white' | 'primary-brand' | 'secondary-brand' | 'secondary-main' | 'secondary-gray'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  isLoading?: boolean
  className?: string
}

export interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export interface NavbarProps {
  logoSrc?: string
  logoAlt?: string
  title: string
  subtitle?: string
  navItems?: NavItem[]
}

export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}
