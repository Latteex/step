export interface NavItem {
  label: string
  href: string
}

export interface NavbarProps {
  logoSrc?: string
  logoAlt?: string
  title: string
  subtitle?: string
  navItems?: NavItem[]
}
