import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('отображает children', () => {
    render(<Button>Тест</Button>)
    expect(screen.getByText('Тест')).toBeInTheDocument()
  })

  it('вызывает onClick при клике', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Клик</Button>)
    
    await userEvent.click(screen.getByText('Клик'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('отключен когда disabled=true', () => {
    render(<Button disabled>Кнопка</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('имеет правильный класс для variant=primary-brand', () => {
    render(<Button variant="primary-brand">Тест</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-button-primary-brand')
  })

  it('имеет правильный класс для size=lg', () => {
    render(<Button size="lg">Тест</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-6', 'py-3', 'text-base')
  })

  it('показывает спиннер когда isLoading=true', () => {
    render(<Button isLoading>Загрузка</Button>)
    const spinner = screen.getByRole('button').querySelector('svg')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('animate-spin')
  })

  it('отключен когда isLoading=true', () => {
    render(<Button isLoading>Загрузка</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
