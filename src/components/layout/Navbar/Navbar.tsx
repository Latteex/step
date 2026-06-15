import React, { useEffect } from 'react'
import { cn } from '@/utils/cn'
import { NavbarProps } from './Navbar.types'

export const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  logoAlt = 'Логотип',
  title,
  subtitle,
  navItems = [],
}) => {
  useEffect(() => {
    const handleScroll = () => {
      // Можно использовать для дополнительных эффектов при скролле
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-background-gray-main/95 backdrop-blur-md shadow-sm',
        'border-b border-border-main',
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          {logoSrc && (
            <img
              src={logoSrc}
              alt={logoAlt}
              className="w-9 h-9 md:w-11 md:h-11 object-contain transition-transform duration-200 group-hover:scale-105"
            />
          )}
          <div>
            <span
              className="font-bold text-lg md:text-xl leading-none block transition-colors duration-300 text-text-primary"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {title}
            </span>
            {subtitle && (
              <span className="text-xs font-medium tracking-widest uppercase transition-colors duration-300 text-text-brand">
                {subtitle}
              </span>
            )}
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-text-brand text-text-secondary"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button (placeholder) */}
        <button className="lg:hidden p-2">
          <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
