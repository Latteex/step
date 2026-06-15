import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('отображает title', () => {
    render(<Navbar title="Тестовый заголовок" />)
    expect(screen.getByText('Тестовый заголовок')).toBeInTheDocument()
  })

  it('отображает subtitle когда он передан', () => {
    render(<Navbar title="Заголовок" subtitle="Подзаголовок" />)
    expect(screen.getByText('Подзаголовок')).toBeInTheDocument()
  })

  it('не отображает subtitle когда он не передан', () => {
    render(<Navbar title="Заголовок" />)
    expect(screen.queryByText('Подзаголовок')).not.toBeInTheDocument()
  })

  it('отображает navItems когда они переданы', () => {
    render(
      <Navbar 
        title="Заголовок" 
        navItems={[
          { label: 'Пункт 1', href: '#1' },
          { label: 'Пункт 2', href: '#2' },
        ]} 
      />
    )
    expect(screen.getByText('Пункт 1')).toBeInTheDocument()
    expect(screen.getByText('Пункт 2')).toBeInTheDocument()
  })

  it('имеет правильный класс для контейнера', () => {
    render(<Navbar title="Заголовок" />)
    const header = screen.getByRole('banner') || document.querySelector('header')
    expect(header).toHaveClass('fixed')
    expect(header).toHaveClass('top-0')
  })
})
