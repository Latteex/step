# План миграции проекта на React + TypeScript

## 📋 Содержание

1. [Подготовка проекта](#1-подготовка-проекта)
2. [Настройка окружения](#2-настройка-окружения)
3. [Миграция токенов и стилей](#3-миграция-токенов-и-стилей)
4. [Миграция компонентов](#4-миграция-компонентов)
5. [Настройка Tailwind CSS](#5-настройка-tailwind-css)
6. [Типизация](#6-типизация)
7. [Тестирование](#7-тестирование)
8. [Деплой](#8-деплой)

---

## 1. Подготовка проекта

### 1.1 Анализ существующего кода

- [ ] Изучить структуру текущих компонентов (`Navbar.tsx`, `Home.tsx`, `ErrorCatcher/StackView.tsx`)
- [ ] Выявить все зависимости в исходном коде
- [ ] Зафиксировать все используемые CSS-классы и кастомные стили
- [ ] Собрать все API-эндпоинты и интеграции

### 1.2 Определить список компонентов

| Компонент | Статус | Приоритет |
|-----------|--------|-----------|
| `Navbar` | ⏳ Не начато | Высокий |
| `Home` (страница) | ⏳ Не начато | Высокий |
| `Tooltip` | ⏳ Не начато | Средний |
| `FooterWatermark` | ⏳ Не начато | Низкий |
| `Notification` | ⏳ Не начато | Средний |
| `ErrorCatcher` | ⏳ Не начато | Средний |
| `Button` | ⏳ Не начато | Высокий |
| `Card` | ⏳ Не начато | Средний |
| `Input` | ⏳ Не начато | Средний |

### 1.3 Определить страницы

- [ ] `Home` — главная страница

---

## 2. Настройка окружения

### 2.1 Инициализация проекта

```bash
# Создание нового проекта с Vite + React + TypeScript
npm create vite@latest stepnoycat-react -- --template react-ts

# Переход в директорию
cd stepnoycat-react

# Установка зависимостей
npm install
```

### 2.2 Установка Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer

# Инициализация конфигурации
npx tailwindcss init -p
```

### 2.3 Установка дополнительных зависимостей

```bash
# UI компоненты (по желанию)
npm install @radix-ui/react-tooltip @radix-ui/react-dialog

# Утилиты
npm install clsx tailwind-merge

# Иконки
npm install lucide-react

# Форм-контролы
npm install react-hook-form @hookform/resolvers zod

# Toast уведомления
npm install sonner
```

### 2.4 Настройка `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@types/*": ["./src/types/*"],
      "@utils/*": ["./src/utils/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 2.5 Настройка `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
```

---

## 3. Миграция токенов и стилей

### 3.1 Создание файла токенов

```bash
mkdir -p src/styles
```

```typescript
// src/styles/tokens.css
:root {
  /* Text Colors */
  --text-primary: #34322d;
  --text-secondary: #535350;
  --text-tertiary: #858481;
  --text-disable: #b9b9b7;
  --text-brand: #0081f2;
  --text-onblack: #ffffff;
  --text-white: #ffffff;
  --text-white-tsp: #ffffff99;
  --theme-text-primary: #262626;
  --logo-color: #34322d;

  /* Background Colors */
  --background-gray-main: #f8f8f7;
  --background-white-main: #ffffff;
  --background-menu-white: #ffffff;
  --background-tsp-menu-white: #ffffff14;
  --background-tsp-card-gray: #37352f0a;
  --background-nav: #ebebeb;
  --background-card: #fafafa;
  --background-mask: #000000a6;
  --background-card-gray: #fafafa;
  --background-preview-mask: #000000d9;

  /* Border Colors */
  --border-main: #0000000f;
  --border-white: #ffffff33;
  --border-btn-main: #0000001f;
  --border-input-active: #0081f280;
  --border-light: #0000000a;
  --border-dark: #0000001f;
  --border-primary: #4f59661f;

  /* Icon Colors */
  --icon-primary: #34322d;
  --icon-secondary: #535350;
  --icon-tertiary: #858481;
  --icon-disable: #b9b9b7;
  --icon-brand: #0081f2;
  --icon-onblack: #ffffff;
  --icon-white: #ffffff;
  --icon-white-tsp: #ffffff99;

  /* Function Colors */
  --function-error: #f25a5a;
  --function-success: #25ba3b;
  --function-warning: #efa201;
  --function-error-tsp: #f25a5a14;
  --function-warning-tsp: #efa2011f;

  /* Fill Colors */
  --fill-blue: #0081f214;
  --fill-tsp-white-main: #37352f0f;
  --fill-tsp-white-dark: #37352f14;
  --fill-tsp-white-light: #37352f0a;
  --fill-tsp-gray-dark: #37352f14;
  --fill-tsp-gray-main: #37352f0a;
  --fill-input-chat: #ffffff;
  --fill-white: #ffffff;
  --fill-black: #28282973;
  --fill-gray: #f8f8f7;

  /* Button Colors */
  --Button-primary-black: #1a1a19;
  --Button-primary-white: #ffffff;
  --Button-primary-brand: #0081f2;
  --Button-primary-brand-disabled: #7cbdf5;
  --Button-secondary-brand: #0081f21a;
  --Button-secondary-error-border: #f25a5a80;
  --Button-secondary-error-fill: #ffffff;
  --Button-secondary-main: #ffffff;
  --Button-secondary-gray: #37352f0f;

  /* Tab Colors */
  --tab-fill: rgba(0, 0, 0, 0.04);
  --tab-active-black: #1a1a19;

  /* Shadow Colors */
  --shadow-L: #0000003d;
  --shadow-M: #0000001f;
  --shadow-S: #00000014;
  --shadow-XS: #0000000f;
  --shadows-inner-0: #ffffff00;
  --shadows-inner-1: #16191d14;
  --shadows-inner-2: #16191d1f;
  --shadows-drop-1: #16191d08;
  --shadows-drop-2: #16191d0a;
  --shadows-drop-3: #16191d14;
  --shadows-drop-4: #16191d1f;
  --shadows-highlight-1: #cce5ff;
  --shadows-highlight-2: #1487fa;
  --shadows-danger-1: #fed7d7;
  --shadows-danger-2: #ee3a3a;
  --shadows-card-border: #16191d1f;
  --shadows-card-border-2: #16191d1f;

  /* Tooltips */
  --Tooltips-main: #000000e6;

  /* Gradual Colors */
  --gradual-white-0: #ffffff00;
  --gradual-gray-100: #ffffff00;
  --gradual-gray-0: #ffffff00;
  --gradual-dark-20: #00000033;

  /** input */
  --fill-input-chat: #ffffff;

  /** gradient */
  --gradient-bg-mask-gray-0: #eaeaeb00;
}

[data-theme="dark"] {
  /* Text Colors */
  --text-primary: #dadada;
  --text-secondary: #acacac;
  --text-tertiary: #7f7f7f;
  --text-disable: #5f5f5f;
  --text-brand: #1a93fe;
  --text-onblack: #000000e6;
  --text-white: #ffffff;
  --text-white-tsp: #ffffff99;
  --theme-text-primary: #dbdbdb;
  --logo-color: #dadada;

  /* Background Colors */
  --background-gray-main: #272728;
  --background-white-main: #161618;
  --background-menu-white: #383739;
  --background-tsp-menu-white: #ffffff0f;
  --background-tsp-card-gray: #ffffff0f;
  --background-nav: #212122;
  --background-card: #383739;
  --background-mask: #000000a6;
  --background-card-gray: #383739;
  --background-preview-mask: #000000d9;

  /* Border Colors */
  --border-main: #ffffff14;
  --border-white: #00000014;
  --border-btn-main: #ffffff1a;
  --border-input-active: #1a93fe80;
  --border-light: #ffffff0f;
  --border-dark: #ffffff29;
  --border-primary: #56565f52;

  /* Icon Colors */
  --icon-primary: #dadada;
  --icon-secondary: #acacac;
  --icon-tertiary: #7f7f7f;
  --icon-disable: #5f5f5f;
  --icon-brand: #1a93fe;
  --icon-onblack: #000000d9;
  --icon-white: #ffffff;
  --icon-white-tsp: #ffffff99;

  /* Function Colors */
  --function-error: #eb4d4d;
  --function-success: #5eb92d;
  --function-warning: #ffbf36;
  --function-error-tsp: #eb4d4d14;
  --function-warning-tsp: #ffbf361f;

  /* Fill Colors */
  --fill-blue: #1a93fe1f;
  --fill-tsp-white-main: #ffffff0f;
  --fill-tsp-white-dark: #ffffff1f;
  --fill-tsp-white-light: #ffffff0a;
  --fill-tsp-gray-dark: #00000047;
  --fill-tsp-gray-main: #00000033;
  --fill-input-chat: #363537;
  --fill-white: #3e3d3e;
  --fill-black: #28282973;
  --fill-gray: #444345;

  /* Button Colors */
  --Button-primary-black: #ffffff;
  --Button-primary-white: #ffffff14;
  --Button-primary-brand: #1a93fe;
  --Button-primary-brand-disabled: #215d93;
  --Button-secondary-brand: #1a93fe1f;
  --Button-secondary-error-border: #eb4d4d29;
  --Button-secondary-error-fill: #eb4d4d1f;
  --Button-secondary-main: #ffffff1f;
  --Button-secondary-gray: #ffffff0f;

  /* Tab Colors */
  --tab-fill: rgba(255, 255, 255, 0.06);
  --tab-active-black: #ffffff;

  /* Shadow Colors */
  --shadow-L: #00000066;
  --shadow-M: #0000003d;
  --shadow-S: #00000029;
  --shadow-XS: #0000001f;
  --shadows-inner-0: #ffffff1f;
  --shadows-inner-1: #ffffff14;
  --shadows-inner-2: #ffffff1f;
  --shadows-drop-1: #0000001f;
  --shadows-drop-2: #00000033;
  --shadows-drop-3: #00000047;
  --shadows-drop-4: #0000005c;
  --shadows-highlight-1: #1b61a6;
  --shadows-highlight-2: #1487fa;
  --shadows-danger-1: #8f1919;
  --shadows-danger-2: #ee3a3a;
  --shadows-card-border: #ffffff1f;
  --shadows-card-border-2: #ffffff00;

  /* Tooltips */
  --Tooltips-main: #000000e6;

  /* Gradual Colors */
  --gradual-white-0: #27272800;
  --gradual-gray-100: #444345;
  --gradual-gray-0: #44434500;
  --gradual-dark-20: #ffffff33;

  /** input */
  --fill-input-chat: #363537;

  /** gradient */
  --gradient-bg-mask-gray-0: #1E1E1E00;
}
```

### 3.2 Настройка Tailwind с токенами

```typescript
// tailwind.config.js
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // или 'media' для системной темы
  theme: {
    extend: {
      colors: {
        // Text
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-disable': 'var(--text-disable)',
        'text-brand': 'var(--text-brand)',
        'text-onblack': 'var(--text-onblack)',
        'text-white': 'var(--text-white)',
        'text-white-tsp': 'var(--text-white-tsp)',
        'theme-text-primary': 'var(--theme-text-primary)',
        'logo-color': 'var(--logo-color)',
        
        // Background
        'background-gray-main': 'var(--background-gray-main)',
        'background-white-main': 'var(--background-white-main)',
        'background-menu-white': 'var(--background-menu-white)',
        'background-tsp-menu-white': 'var(--background-tsp-menu-white)',
        'background-tsp-card-gray': 'var(--background-tsp-card-gray)',
        'background-nav': 'var(--background-nav)',
        'background-card': 'var(--background-card)',
        'background-mask': 'var(--background-mask)',
        'background-card-gray': 'var(--background-card-gray)',
        'background-preview-mask': 'var(--background-preview-mask)',
        
        // Border
        'border-main': 'var(--border-main)',
        'border-white': 'var(--border-white)',
        'border-btn-main': 'var(--border-btn-main)',
        'border-input-active': 'var(--border-input-active)',
        'border-light': 'var(--border-light)',
        'border-dark': 'var(--border-dark)',
        'border-primary': 'var(--border-primary)',
        
        // Icon
        'icon-primary': 'var(--icon-primary)',
        'icon-secondary': 'var(--icon-secondary)',
        'icon-tertiary': 'var(--icon-tertiary)',
        'icon-disable': 'var(--icon-disable)',
        'icon-brand': 'var(--icon-brand)',
        'icon-onblack': 'var(--icon-onblack)',
        'icon-white': 'var(--icon-white)',
        'icon-white-tsp': 'var(--icon-white-tsp)',
        
        // Function
        'function-error': 'var(--function-error)',
        'function-success': 'var(--function-success)',
        'function-warning': 'var(--function-warning)',
        'function-error-tsp': 'var(--function-error-tsp)',
        'function-warning-tsp': 'var(--function-warning-tsp)',
        
        // Fill
        'fill-blue': 'var(--fill-blue)',
        'fill-tsp-white-main': 'var(--fill-tsp-white-main)',
        'fill-tsp-white-dark': 'var(--fill-tsp-white-dark)',
        'fill-tsp-white-light': 'var(--fill-tsp-white-light)',
        'fill-tsp-gray-dark': 'var(--fill-tsp-gray-dark)',
        'fill-tsp-gray-main': 'var(--fill-tsp-gray-main)',
        'fill-input-chat': 'var(--fill-input-chat)',
        'fill-white': 'var(--fill-white)',
        'fill-black': 'var(--fill-black)',
        'fill-gray': 'var(--fill-gray)',
        
        // Button
        'button-primary-black': 'var(--Button-primary-black)',
        'button-primary-white': 'var(--Button-primary-white)',
        'button-primary-brand': 'var(--Button-primary-brand)',
        'button-primary-brand-disabled': 'var(--Button-primary-brand-disabled)',
        'button-secondary-brand': 'var(--Button-secondary-brand)',
        'button-secondary-error-border': 'var(--Button-secondary-error-border)',
        'button-secondary-error-fill': 'var(--Button-secondary-error-fill)',
        'button-secondary-main': 'var(--Button-secondary-main)',
        'button-secondary-gray': 'var(--Button-secondary-gray)',
        
        // Tab
        'tab-fill': 'var(--tab-fill)',
        'tab-active-black': 'var(--tab-active-black)',
        
        // Shadows
        'shadow-L': 'var(--shadow-L)',
        'shadow-M': 'var(--shadow-M)',
        'shadow-S': 'var(--shadow-S)',
        'shadow-XS': 'var(--shadow-XS)',
        'shadows-inner-0': 'var(--shadows-inner-0)',
        'shadows-inner-1': 'var(--shadows-inner-1)',
        'shadows-inner-2': 'var(--shadows-inner-2)',
        'shadows-drop-1': 'var(--shadows-drop-1)',
        'shadows-drop-2': 'var(--shadows-drop-2)',
        'shadows-drop-3': 'var(--shadows-drop-3)',
        'shadows-drop-4': 'var(--shadows-drop-4)',
        'shadows-highlight-1': 'var(--shadows-highlight-1)',
        'shadows-highlight-2': 'var(--shadows-highlight-2)',
        'shadows-danger-1': 'var(--shadows-danger-1)',
        'shadows-danger-2': 'var(--shadows-danger-2)',
        'shadows-card-border': 'var(--shadows-card-border)',
        'shadows-card-border-2': 'var(--shadows-card-border-2)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        system: ['SF Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'xs': '0 0 0 0 var(--shadow-XS)',
        'sm': '0 0 0 0 var(--shadow-S)',
        'md': '0 0 0 0 var(--shadow-M)',
        'lg': '0 0 0 0 var(--shadow-L)',
        'card': '0 0 0 0 var(--shadows-card-border)',
        'drop-1': '0 0 0 0 var(--shadows-drop-1)',
        'drop-2': '0 0 0 0 var(--shadows-drop-2)',
        'drop-3': '0 0 0 0 var(--shadows-drop-3)',
        'drop-4': '0 0 0 0 var(--shadows-drop-4)',
      },
    },
  },
  plugins: [],
} satisfies Config
```

### 3.3 Импорт стилей в приложение

```typescript
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tokens.css'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

/* Custom Tooltip Styles */
.tooltip-trigger {
  position: relative;
}

.tooltip-trigger::after {
  content: attr(data-tooltip);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  min-width: 40px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.90);
  border-radius: 12px;
  color: var(--text-white);
  font-size: 12px;
  line-height: 16px;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: left;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  z-index: 10;
  width: max-content;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0s linear 0.2s;
}

.tooltip-trigger.tooltip-right::after {
  left: unset;
  right: 0;
  transform: translateX(0) translateY(-8px);
}

.tooltip-trigger:hover::after,
.tooltip-trigger:focus::after {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-10px);
  transition-delay: 0s, 0s, 0s;
}

.tooltip-trigger:focus {
  outline: none;
  box-shadow: 0 0 0 2px skyblue;
}
```

---

## 4. Миграция компонентов

### 4.1 Структура папок

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.styles.css
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   └── Card.test.tsx
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.test.tsx
│   │   └── Tooltip/
│   │       ├── Tooltip.tsx
│   │       └── Tooltip.test.tsx
│   ├── layout/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.test.tsx
│   │   │   └── Navbar.types.ts
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   └── Container/
│   │       └── Container.tsx
│   └── ui/
│       ├── Notification/
│       │   └── Notification.tsx
│       └── ErrorCatcher/
│           ├── ErrorCatcher.tsx
│           └── StackView.tsx
├── pages/
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.test.tsx
│   └── ...
├── hooks/
│   ├── useTheme.ts
│   └── ...
├── contexts/
│   ├── ThemeContext.tsx
│   └── ...
├── types/
│   ├── index.ts
│   └── ...
├── utils/
│   ├── cn.ts
│   └── ...
├── styles/
│   ├── tokens.css
│   └── globals.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

### 4.2 Утилита для классов

```typescript
// src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 4.3 Контекст темы

```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    return stored || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
```

### 4.4 Пример компонента: Button

```typescript
// src/components/common/Button/Button.types.ts
import { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary-black' | 'primary-white' | 'primary-brand' | 'secondary-brand' | 'secondary-main' | 'secondary-gray'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  disabled?: boolean
}
```

```typescript
// src/components/common/Button/Button.tsx
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
        'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
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
```

### 4.5 Пример компонента: Navbar

```typescript
// src/components/layout/Navbar/Navbar.types.ts
export interface NavbarProps {
  logoSrc?: string
  logoAlt?: string
  title: string
  subtitle?: string
  navItems?: {
    label: string
    href: string
  }[]
}
```

```typescript
// src/components/layout/Navbar/Navbar.tsx
import React from 'react'
import { cn } from '@/utils/cn'
import { NavbarProps } from './Navbar.types'

export const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  logoAlt = 'Логотип',
  title,
  subtitle,
  navItems = [],
}) => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
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
      <div className="container flex items-center justify-between h-16 md:h-20">
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
      </div>
    </header>
  )
}
```

### 4.6 Пример страницы: Home

```typescript
// src/pages/Home/Home.tsx
import React from 'react'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { Button } from '@/components/common/Button/Button'
import { cn } from '@/utils/cn'

export const Home: React.FC = () => {
  return (
    <div
      className={cn(
        'min-h-screen bg-background-gray-main',
      )}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <Navbar
        title="Степной хранитель"
        subtitle="Защита манула"
        navItems={[
          { label: 'О мануле', href: '#about' },
          { label: 'Проблемы', href: '#problems' },
          { label: 'Как помочь', href: '#help' },
        ]}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Защита манула
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl">
            Информационно-просветительская платформа о мануле — редкой дикой кошке Забайкалья
          </p>
          <div className="flex gap-4">
            <Button variant="primary-brand" size="lg">
              Узнать больше
            </Button>
            <Button variant="secondary-main" size="lg">
              Помочь сейчас
            </Button>
          </div>
        </section>

        {/* Additional sections... */}
      </main>
    </div>
  )
}
```

### 4.7 Главный App

```typescript
// src/App.tsx
import React from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Home } from '@/pages/Home/Home'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
```

---

## 5. Настройка Tailwind CSS

### 5.1 postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5.2 Включение темной темы

```typescript
// Для переключения класса 'dark' на html
const toggleTheme = () => {
  const root = document.documentElement
  root.classList.toggle('dark')
}

// Или использовать data-атрибут (как в токенах)
const toggleTheme = () => {
  const root = document.documentElement
  const current = root.getAttribute('data-theme')
  root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
}
```

---

## 6. Типизация

### 6.1 Глобальные типы

```typescript
// src/types/index.ts
export interface NavItem {
  label: string
  href: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}
```

### 6.2 Типизация событий

```typescript
// src/types/events.ts
export type ChangeEvent<T = HTMLElement> = React.ChangeEvent<T>
export type ClickEvent<T = HTMLElement> = React.MouseEvent<T>
export type FormEvent<T = HTMLElement> = React.FormEvent<T>
```

---

## 7. Тестирование

### 7.1 Установка Jest + Testing Library

```bash
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event vitest jsdom
```

### 7.2 Пример теста

```typescript
// src/components/common/Button/Button.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
})
```

---

## 8. Деплой

### 8.1 Сборка проекта

```bash
npm run build
```

### 8.2 Preview перед деплоем

```bash
npm run preview
```

### 8.3 Рекомендуемые платформы

- **Vercel** — `vercel deploy`
- **Netlify** — `netlify deploy`
- **GitHub Pages** — через `gh-pages` пакет

---

## 📅 Приоритеты и сроки (примерный план)

| Этап | Задачи | Срок |
|------|--------|------|
| **Неделя 1** | Настройка проекта, токены, глобальные стили | 5 дней |
| **Неделя 2** | Common компоненты (Button, Card, Input, Tooltip) | 5 дней |
| **Неделя 3** | Layout компоненты (Navbar, Footer, Container) | 5 дней |
| **Неделя 4** | Страницы (Home, другие) | 5 дней |
| **Неделя 5** | Тестирование, полишинг, деплой | 5 дней |

---

## ✅ Чеклист завершения

- [ ] Проект инициализирован с Vite + React + TypeScript
- [ ] Tailwind CSS настроен и работает
- [ ] Все токены мигрированы в `tokens.css`
- [ ] ThemeContext реализован
- [ ] Все common компоненты созданы и типизированы
- [ ] Все layout компоненты созданы
- [ ] Все страницы созданы
- [ ] Написаны unit-тесты для ключевых компонентов
- [ ] Сборка проходит без ошибок
- [ ] Проект развёрнут на продакшен-окружении

---

*Документ создан для планирования миграции проекта на React + TypeScript*

### 1.2 Установка зависимостей

```bash
# Core зависимости
npm install react react-dom react-router-dom

# UI библиотеки (опционально)
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip
npm install lucide-react  # Иконки

# Утилиты
npm install clsx tailwind-merge

# Типизация
npm install -D @types/react @types/react-dom
```

### 1.3 Конфигурация Tailwind

```bash
# Tailwind CSS v4
npm install -D tailwindcss @tailwindcss/vite
```

---

## Этап 2: Настройка дизайн-системы

### 2.1 Создание файла токенов

```
src/
├── styles/
│   ├── tokens.css          # CSS переменные
│   └── globals.css         # CSS reset + базовые стили
```

### 2.2 Структура дизайн-системы

```
src/
├── theme/
│   ├── tokens.ts           # TypeScript типы токенов
│   ├── colors.ts           # Константы цветов
│   ├── typography.ts       # Типографика
│   └── spacing.ts          # Отступы
```

### 2.3 Типизация токенов

```typescript
// tokens.ts
export const lightTokens = {
  colors: {
    text: {
      primary: '#34322d',
      secondary: '#535350',
      tertiary: '#858481',
      disable: '#b9b9b7',
      brand: '#0081f2',
      onblack: '#ffffff',
      white: '#ffffff',
      whiteTsp: '#ffffff99',
    },
    background: {
      grayMain: '#f8f8f7',
      whiteMain: '#ffffff',
      menuWhite: '#ffffff',
      nav: '#ebebeb',
      card: '#fafafa',
      mask: '#000000a6',
    },
    border: {
      main: '#0000000f',
      white: '#ffffff33',
      btnMain: '#0000001f',
      inputActive: '#0081f280',
    },
    // ... остальные токены
  },
  shadows: {
    L: '#0000003d',
    M: '#0000001f',
    S: '#00000014',
    XS: '#0000000f',
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
    display: '"Playfair Display", serif',
    system: "'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto",
  },
} as const;

export const darkTokens = {
  // ... аналогичная структура для темной темы
} as const;

export type ThemeMode = 'light' | 'dark';
```

---

## Этап 3: Архитектура компонентов

### 3.1 Структура папок

```
src/
├── components/
│   ├── ui/                 # Базовые UI компоненты
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Input/
│   │   └── Tooltip/
│   │
│   ├── layout/             # Layout компоненты
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Container/
│   │
│   └── features/           # Бизнес-компоненты
│       ├── Navbar/
│       ├── HeroSection/
│       ├── AboutSection/
│       └── ContactForm/
│
├── hooks/                   # Кастомные хуки
│   ├── useTheme.ts
│   ├── useMediaQuery.ts
│   └── useScrollPosition.ts
│
├── context/                 # React Context
│   ├── ThemeContext.tsx
│   └── ToastContext.tsx
│
├── pages/                   # Страницы
│   ├── Home.tsx
│   └── NotFound.tsx
│
├── styles/                  # Стили
│   ├── tokens.css
│   └── globals.css
│
├── types/                   # Глобальные типы
│   └── index.ts
│
└── utils/                   # Утилиты
    ├── cn.ts               # class