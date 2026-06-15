# Степной хранитель — Защита манула

Информационно-просветительская платформа о мануле — редкой дикой кошке Забайкалья.

## 🛠 Стек технологий

- **React 18** — UI библиотека
- **TypeScript** — типизация
- **Vite** — сборка проекта
- **Tailwind CSS** — утилитарные стили
- **CSS Variables** — дизайн-система (токены)
- **Vitest + Testing Library** — тестирование

## 📁 Структура проекта

```
src/
├── components/
│   ├── common/              # Базовые UI компоненты
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.types.ts
│   │       ├── Button.test.tsx
│   │       └── index.ts
│   └── layout/              # Layout компоненты
│       └── Navbar/
│           ├── Navbar.tsx
│           ├── Navbar.types.ts
│           ├── Navbar.test.tsx
│           └── index.ts
├── pages/
│   └── Home/
│       ├── Home.tsx
│       └── index.ts
├── contexts/
│   └── ThemeContext.tsx     # Контекст темы (светлая/тёмная)
├── hooks/                   # Кастомные хуки
├── types/
│   └── index.ts             # Глобальные типы
├── utils/
│   └── cn.ts                # Утилита для классов (clsx + tailwind-merge)
├── styles/
│   ├── tokens.css           # CSS переменные (дизайн-система)
│   └── globals.css          # CSS reset + глобальные стили
├── test/
│   └── setup.ts             # Настройка тестирования
├── App.tsx
└── main.tsx
```

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Откройте http://localhost:5173 в браузере.

### Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут в папке `dist/`.

### Предпросмотр сборки

```bash
npm run preview
```

### Запуск тестов

```bash
npm run test        # Запуск один раз
npm run test:ui     # Запуск с UI
```

## 🎨 Дизайн-система

Проект использует CSS переменные для управления цветами и стилями. Все токены определены в `src/styles/tokens.css`.

### Поддержка тем

Проект поддерживает светлую и тёмную темы. Переключение осуществляется через атрибут `data-theme="dark"` на элементе `<html>`.

```tsx
import { useTheme } from '@/contexts/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Переключить тему ({theme})
    </button>
  )
}
```

### Использование токенов в Tailwind

Все токены доступны как классы Tailwind:

```tsx
<div className="bg-background-gray-main text-text-primary border border-border-main">
  Контент с токенами
</div>
```

## 🧪 Тестирование

Проект использует Vitest + React Testing Library:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('отображает children', () => {
    render(<Button>Тест</Button>)
    expect(screen.getByText('Тест')).toBeInTheDocument()
  })
})
```

## 📄 Доступные скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка для продакшена |
| `npm run preview` | Предпросмотр сборки |
| `npm run test` | Запуск тестов |
| `npm run test:ui` | Запуск тестов с UI |
| `npm run lint` | Проверка кода ESLint |

## 🔧 Конфигурация

### Path aliases

Проект использует алиасы для импортов:

```tsx
import { Button } from '@/components/common/Button'  // вместо ../../components/...
import { cn } from '@/utils/cn'
import { useTheme } from '@/hooks/useTheme'
```

### TypeScript

Строгая типизация включена в `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## 📝 Лицензия

MIT
