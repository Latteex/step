# 📘 Подробный план рефакторинга проекта «Степной хранитель»

**Версия:** 1.0  
**Дата:** Декабрь 2024  
**Статус:** Утверждено к реализации

---

## 🎯 ЦЕЛИ РЕФАКТОРИНГА

1. **Устранить критический техдолг** (дубликаты, хардкод)
2. **Локализовать все ресурсы** (шрифты, изображения) для работы в закрытой сети
3. **Исключить трансграничную передачу данных** (удалить внешние CDN)
4. **Повысить поддерживаемость** кодовой базы
5. **Создать документацию** для будущих разработчиков

---

## 📁 СТРУКТУРА ПАПОК ПОСЛЕ РЕФАКТОРИНГА

```
src/
├── assets/                    # 🔥 НОВЫЕ: Локальные ресурсы
│   ├── fonts/                 # Шрифты (woff2)
│   │   ├── playfair-display/
│   │   │   ├── PlayfairDisplay-Regular.woff2
│   │   │   ├── PlayfairDisplay-Bold.woff2
│   │   │   └── PlayfairDisplay-Italic.woff2
│   │   └── montserrat/
│   │       ├── Montserrat-Regular.woff2
│   │       ├── Montserrat-Medium.woff2
│   │       ├── Montserrat-SemiBold.woff2
│   │       └── Montserrat-Bold.woff2
│   └── images/                # Изображения проекта
│       ├── logo/
│       │   └── logo-manul.webp
│       ├── hero/
│       │   └── hero-manul.webp
│       ├── manul/
│       │   ├── manul-portrait-serious.webp
│       │   └── manul-family.webp
│       └── map/
│           └── map-of-asia.png
│
├── data/                      # Данные (статьи, константы)
│   ├── articles.ts            # Статьи о мануле
│   └── home.ts                # 🔥 НОВЫЙ: Данные для главной страницы
│
├── components/
│   ├── home/                  # 🔥 НОВЫЕ: Компоненты главной страницы
│   │   ├── StatCard.tsx
│   │   ├── ThreatCard.tsx
│   │   ├── HelpCard.tsx
│   │   ├── OrgCard.tsx
│   │   ├── EventCard.tsx
│   │   ├── TeamCard.tsx
│   │   ├── ArticleCard.tsx
│   │   └── SectionDivider.tsx
│   ├── ui/                    # UI-компоненты
│   │   └── typography.tsx     # 🔥 НОВЫЙ: Типографика
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
│
├── hooks/                     # Кастомные хуки
│   ├── useSmoothScroll.ts     # 🔥 НОВЫЙ: Плавный скролл
│   ├── useIsMobile.tsx
│   └── usePersistFn.ts
│
├── styles/                    # 🔥 НОВЫЕ: Глобальные стили
│   ├── fonts.css              # Подключение шрифтов
│   └── utilities.css          # Утилитарные классы
│
├── types/                     # Типы TypeScript
│   ├── navigation.ts          # 🔥 НОВЫЙ: Типы навигации
│   ├── articles.ts            # Типы статей
│   └── index.ts
│
├── utils/
│   └── cn.ts
│
├── const.ts                   # Константы (с типами)
├── App.tsx
└── main.tsx

public/                        # Статические файлы
└── map-of-asia.png            # Карта Азии
```

---

## 📋 ЭТАПЫ РЕАЛИЗАЦИИ

### 🔹 ЭТАП 1: Подготовка инфраструктуры (4-5 часов)

#### 1.1. Создать структуру папок

**Задача:** Подготовить файловую структуру для локальных ресурсов.

**Действия:**
```bash
# Создать папки для активов
mkdir -p src/assets/fonts/playfair-display
mkdir -p src/assets/fonts/montserrat
mkdir -p src/assets/images/{logo,hero,manul,map}

# Создать папки для компонентов
mkdir -p src/components/home
mkdir -p src/styles

# Создать папки для данных и типов
mkdir -p src/data
mkdir -p src/types
```

**DoD (Definition of Done):**
- [ ] Все папки созданы
- [ ] Структура соответствует плану
- [ ] `.gitkeep` файлы добавлены в пустые папки

---

#### 1.2. Скачать и подключить локальные шрифты

**Задача:** Избавиться от внешних CDN (Google Fonts), скачать шрифты локально.

**Действия:**

1. **Скачать шрифты:**
   - Playfair Display: [ссылка на Google Fonts](https://fonts.google.com/download?family=Playfair%20Display)
   - Montserrat: [ссылка на Google Fonts](https://fonts.google.com/download?family=Montserrat)
   
   Или использовать утилиту:
   ```bash
   npm install -g google-fonts-downloader
   google-fonts-downloader -f "Playfair Display:400,700,700i" -d src/assets/fonts/playfair-display
   google-fonts-downloader -f "Montserrat:400,500,600,700" -d src/assets/fonts/montserrat
   ```

2. **Создать файл подключения шрифтов** `src/styles/fonts.css`:

```css
/* ═══════════════════════════════════════════════════════════════════════════
   ШРИФТЫ ПРОЕКТА «СТЕПНОЙ ХРАНИТЕЛЬ»
   Локальное подключение (без внешних CDN)
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Playfair Display ────────────────────────────────────────────────────── */
@font-face {
  font-family: 'Playfair Display';
  src: url('../assets/fonts/playfair-display/PlayfairDisplay-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Playfair Display';
  src: url('../assets/fonts/playfair-display/PlayfairDisplay-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Playfair Display';
  src: url('../assets/fonts/playfair-display/PlayfairDisplay-Italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* ─── Montserrat ──────────────────────────────────────────────────────────── */
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/montserrat/Montserrat-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/montserrat/Montserrat-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/montserrat/Montserrat-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/montserrat/Montserrat-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

3. **Подключить в `src/index.css`:**

```css
@import './styles/fonts.css';
@import './styles/utilities.css';

/* Остальные стили... */
```

**DoD:**
- [ ] Шрифты скачаны в формате `.woff2`
- [ ] Файл `fonts.css` создан и заполнен
- [ ] Шрифты подключены в `index.css`
- [ ] Внешние ссылки на Google Fonts удалены из `index.html`
- [ ] Шрифты корректно отображаются в браузере
- [ ] Проверка в DevTools: шрифты загружаются локально (Network tab)

---

#### 1.3. Локализовать изображения

**Задача:** Заменить внешние URL на локальные файлы.

**Действия:**

1. **Скачать изображения:**
   ```bash
   # Создать скрипт для скачивания (download-images.sh)
   curl -o src/assets/images/logo/logo-manul.webp "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/logo-manul-iziNX2T6GedxBB5dPoDr4s.webp"
   curl -o src/assets/images/hero/hero-manul.webp "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/hero-manul-Y2nGWWx4dn7WXd3xkt2JdN.webp"
   curl -o src/assets/images/manul/manul-portrait-serious.webp "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/manul-portrait-serious-jkfEhUGCRutPaLtqJ6kU7v.webp"
   curl -o src/assets/images/manul/manul-family.webp "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/manul-family-ZqmYajRNuFLCPkMrQPPd7o.webp"
   ```

2. **Создать файл с путями** `src/const.ts` (обновить секцию IMAGES):

```typescript
// Импорт локальных изображений
import logoManul from '@/assets/images/logo/logo-manul.webp';
import heroManul from '@/assets/images/hero/hero-manul.webp';
import manulPortrait from '@/assets/images/manul/manul-portrait-serious.webp';
import manulFamily from '@/assets/images/manul/manul-family.webp';

export const IMAGES = {
  logo: logoManul,
  hero: heroManul,
  manulPortrait: manulPortrait,
  manulFamily: manulFamily,
  // Для карты оставляем public, т.к. она большая
  map: '/map-of-asia.png',
};
```

3. **Обновить `vite.config.ts`** для поддержки импорта изображений:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.svg'],
});
```

**DoD:**
- [ ] Все изображения скачаны и размещены в `src/assets/images/`
- [ ] Изображения оптимизированы (размер < 500KB каждое)
- [ ] Пути к изображениям типизированы в `const.ts`
- [ ] Все компоненты используют импорт вместо URL
- [ ] Проверка: изображения отображаются корректно
- [ ] Проверка в Network tab: запросы идут на локальные файлы

---

### 🔹 ЭТАП 2: Устранение дубликатов стилей (5-6 часов)

#### 2.1. Создать утилитарные CSS-классы для шрифтов

**Задача:** Заменить 200+ inline-стилей на CSS-классы.

**Действия:**

1. **Создать `src/styles/utilities.css`:**

```css
/* ═══════════════════════════════════════════════════════════════════════════
   УТИЛИТАРНЫЕ КЛАССЫ
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Шрифты ──────────────────────────────────────────────────────────────── */
.font-heading {
  font-family: 'Playfair Display', serif;
}

.font-body {
  font-family: 'Montserrat', sans-serif;
}

/* ─── Размеры шрифтов ─────────────────────────────────────────────────────── */
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl { font-size: 3rem; line-height: 1; }
.text-6xl { font-size: 3.75rem; line-height: 1; }

/* ─── Насыщенность ────────────────────────────────────────────────────────── */
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* ─── Курсив ──────────────────────────────────────────────────────────────── */
.italic { font-style: italic; }

/* ─── Трекинг ─────────────────────────────────────────────────────────────── */
.tracking-wide { letter-spacing: 0.025em; }
.tracking-wider { letter-spacing: 0.05em; }
.tracking-widest { letter-spacing: 0.1em; }
```

2. **Создать TypeScript-хелпер для классов** (опционально):

```typescript
// src/lib/fonts.ts
export const FONTS = {
  heading: 'font-heading',
  body: 'font-body',
} as const;

export type FontClass = typeof FONTS[keyof typeof FONTS];
```

**DoD:**
- [ ] Файл `utilities.css` создан
- [ ] Классы `.font-heading` и `.font-body` работают
- [ ] Классы подключены в сборку

---

#### 2.2. Массовая замена inline-стилей на классы

**Задача:** Заменить все `style={{ fontFamily: ... }}` на CSS-классы.

**Действия:**

1. **Найти все вхождения:**
   ```bash
   # Поиск в терминале
   grep -r "fontFamily.*Playfair" src/
   grep -r "fontFamily.*Montserrat" src/
   ```

2. **Заменить в каждом файле:**

**До:**
```tsx
<h1 style={{ fontFamily: "'Playfair Display', serif" }}>
  Заголовок
</h1>
<p style={{ fontFamily: "'Montserrat', sans-serif" }}>
  Текст
</p>
```

**После:**
```tsx
<h1 className="font-heading">
  Заголовок
</h1>
<p className="font-body">
  Текст
</p>
```

3. **Файлы для обновления:**
   - [ ] `src/pages/Home.tsx` (~80 замен)
   - [ ] `src/pages/Articles.tsx` (~20 замен)
   - [ ] `src/pages/Help.tsx` (~25 замен)
   - [ ] `src/pages/Threats.tsx` (~30 замен)
   - [ ] `src/pages/Problems.tsx` (~35 замен)
   - [ ] `src/components/Navbar.tsx` (~10 замен)
   - [ ] `src/components/Footer.tsx` (~15 замен)
   - [ ] `src/components/InteractiveMap.tsx` (~15 замен)

**DoD:**
- [ ] Все inline-стили с `fontFamily` удалены
- [ ] Везде используются классы `.font-heading` / `.font-body`
- [ ] Визуальная проверка: шрифты отображаются корректно
- [ ] ESLint не ругается на inline-стили

---

### 🔹 ЭТАП 3: Централизация логики скролла (2-3 часа)

#### 3.1. Создать хук `useSmoothScroll`

**Файл:** `src/hooks/useSmoothScroll.ts`

```typescript
import { useCallback } from 'react';

interface UseSmoothScrollOptions {
  headerOffset?: number;      // Отступ сверху (для фиксированного хедера)
  behavior?: 'smooth' | 'auto';
}

export function useSmoothScroll({
  headerOffset = 80,
  behavior = 'smooth',
}: UseSmoothScrollOptions = {}) {
  /**
   * Плавная прокрутка к элементу по селектору
   */
  const scrollTo = useCallback((selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior });
    }
  }, [headerOffset, behavior]);

  /**
   * Обработчик клика на якорную ссылку
   */
  const handleAnchorClick = useCallback((
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const target = e.currentTarget;
    const href = target.getAttribute('href') || target.getAttribute('data-href');
    
    if (href?.startsWith('#')) {
      e.preventDefault();
      scrollTo(href);
    }
  }, [scrollTo]);

  return { scrollTo, handleAnchorClick };
}
```

**DoD:**
- [ ] Хук создан
- [ ] Хук типизирован
- [ ] Экспорт из `src/hooks/index.ts`

---

#### 3.2. Обновить Navbar с использованием хука

**Файл:** `src/components/Navbar.tsx`

**До:**
```tsx
const handleLink = (href: string) => {
  setMenuOpen(false);
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};
```

**После:**
```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Navbar() {
  const { handleAnchorClick } = useSmoothScroll({ headerOffset: 80 });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    // Создаём фейковое событие для хука
    const fakeEvent = { 
      currentTarget: { getAttribute: (attr: string) => href },
      preventDefault: () => {} 
    } as React.MouseEvent<HTMLAnchorElement>;
    handleAnchorClick(fakeEvent);
  };

  // ... остальной код
}
```

**DoD:**
- [ ] Navbar использует хук `useSmoothScroll`
- [ ] Функция `handleLink` удалена или использует хук
- [ ] Скролл работает корректно с учётом хедера
- [ ] Мобильное меню закрывается при клике

---

#### 3.3. Обновить Footer с использованием хука

**Файл:** `src/components/Footer.tsx`

**До:**
```tsx
const handleScroll = (href: string) => {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
```

**После:**
```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Footer() {
  const { handleAnchorClick } = useSmoothScroll({ headerOffset: 80 });

  const handleScroll = (href: string) => {
    const fakeEvent = { 
      currentTarget: { getAttribute: (attr: string) => href },
      preventDefault: () => {} 
    } as React.MouseEvent<HTMLButtonElement>;
    handleAnchorClick(fakeEvent);
  };

  // ... остальной код
}
```

**DoD:**
- [ ] Footer использует хук `useSmoothScroll`
- [ ] Функция `handleScroll` использует хук
- [ ] Скролл работает корректно

---

#### 3.4. Обновить кнопки HERO в Home.tsx

**Файл:** `src/pages/Home.tsx`

**До:**
```tsx
<button
  onClick={() => document.querySelector("#information")?.scrollIntoView({ behavior: "smooth" })}
  className="..."
>
  О проекте
</button>
```

**После:**
```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  const { scrollTo } = useSmoothScroll({ headerOffset: 80 });

  return (
    <button
      onClick={() => scrollTo("#information")}
      className="..."
    >
      О проекте
    </button>
  );
}
```

**DoD:**
- [ ] Все прямые вызовы `scrollIntoView` заменены на `scrollTo`
- [ ] Нет прямых манипуляций DOM
- [ ] Скролл работает корректно

---

### 🔹 ЭТАП 4: Настройка цветов в Tailwind (3-4 часа)

#### 4.1. Обновить `tailwind.config.js`

**Файл:** `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🔥 НОВЫЕ: Цветовая палитра проекта
        manul: {
          // Основные цвета
          primary: 'oklch(0.38_0.11_145)',
          'primary-hover': 'oklch(0.32_0.11_145)',
          'primary-light': 'oklch(0.50_0.11_145)',
          
          // Текст
          text: 'oklch(0.20_0.03_65)',
          'text-secondary': 'oklch(0.40_0.03_65)',
          'text-muted': 'oklch(0.50_0.03_65)',
          'text-light': 'oklch(0.55_0.03_65)',
          
          // Фон
          bg: 'oklch(0.95_0.015_85)',
          'bg-secondary': 'oklch(0.93_0.015_85)',
          'bg-white': 'oklch(0.98_0.012_85)',
          
          // Границы
          border: 'oklch(0.88_0.015_75)',
          
          // Тёмная тема (для секций)
          dark: 'oklch(0.18_0.04_65)',
          'dark-border': 'oklch(0.30_0.04_65)',
          'dark-text': 'oklch(0.70_0.02_75)',
          
          // Footer
          footer: 'oklch(0.15_0.04_65)',
        },
      },
      fontFamily: {
        // 🔥 НОВЫЕ: Шрифты (дублируем CSS-классы для Tailwind)
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

**DoD:**
- [ ] Цвета настроены в `tailwind.config.js`
- [ ] Шрифты настроены в `tailwind.config.js`
- [ ] Сборка работает без ошибок

---

#### 4.2. Массовая замена хардкод-цветов на классы Tailwind

**Задача:** Заменить `text-[oklch(...)]` на `text-manul-*`.

**Таблица замены:**

| Было | Стало |
|------|-------|
| `text-[oklch(0.38_0.11_145)]` | `text-manul-primary` |
| `text-[oklch(0.32_0.11_145)]` | `text-manul-primary-hover` |
| `text-[oklch(0.20_0.03_65)]` | `text-manul-text` |
| `text-[oklch(0.40_0.03_65)]` | `text-manul-text-secondary` |
| `text-[oklch(0.50_0.03_65)]` | `text-manul-text-muted` |
| `bg-[oklch(0.95_0.015_85)]` | `bg-manul-bg` |
| `bg-[oklch(0.38_0.11_145)]` | `bg-manul-primary` |
| `border-[oklch(0.88_0.015_75)]` | `border-manul-border` |

**Пример замены:**

**До:**
```tsx
<h1 className="text-[oklch(0.20_0.03_65)] font-bold">
  Заголовок
</h1>
```

**После:**
```tsx
<h1 className="text-manul-text font-bold">
  Заголовок
</h1>
```

**DoD:**
- [ ] Все хардкод-цвета заменены на классы `manul-*`
- [ ] Визуальная проверка: цвета отображаются корректно
- [ ] Поиск по коду не находит `oklch(...)` в классах

---

### 🔹 ЭТАП 5: Рефакторинг Home.tsx (6-8 часов)

#### 5.1. Вынести данные в отдельный файл

**Файл:** `src/data/home.ts`

```typescript
import { IMAGES } from '@/const';

// ─── Статистика ─────────────────────────────────────────────────────────────
export const STATS = [
  { value: 9500, suffix: '+', label: 'особей в России (верхняя оценка)' },
  { value: 68, suffix: '%', label: 'молодых котят не доживают до расселения' },
  { value: 50, suffix: '%', label: 'смертность взрослых особей' },
  { value: 13, suffix: '%', label: 'ареала вида находится под охраной' },
] as const;

// ─── Цели проекта ───────────────────────────────────────────────────────────
export const PROJECT_GOALS = [
  {
    icon: '📚',
    title: 'Просвещение',
    desc: 'Распространение знаний о мануле и степных экосистемах',
  },
  {
    icon: '🤝',
    title: 'Вовлечение',
    desc: 'Включение студентов в природоохранную повестку',
  },
  {
    icon: '🛡️',
    title: 'Защита',
    desc: 'Поддержка реальных охранных инициатив и организаций',
  },
] as const;

// ─── Разделы сайта ──────────────────────────────────────────────────────────
export const SITE_SECTIONS = [
  {
    icon: '📖',
    title: 'Статьи',
    desc: 'Научно-популярные материалы о биологии, экологии и поведении манула.',
    link: '/articles',
  },
  {
    icon: '⚠️',
    title: 'Угрозы',
    desc: 'Аналитический раздел об угрозах популяции манула.',
    link: '/threats',
  },
  // ... остальные секции
] as const;

// ─── Угрозы ─────────────────────────────────────────────────────────────────
export const THREATS = [
  {
    icon: '🌾',
    title: 'Хозяйственное освоение',
    desc: 'Распашка земель и рост поголовья скота разрушают среду обитания.',
  },
  // ... остальные угрозы
] as const;

// ─── Календарный план ───────────────────────────────────────────────────────
export const CALENDAR_PLAN = [
  {
    period: 'Январь – Март 2026',
    title: 'Подготовительный этап',
    items: [
      'Разработка концепции платформы',
      'Сбор и анализ научных материалов',
      'Формирование команды проекта',
    ],
  },
  // ... остальные этапы
] as const;

// ─── Характеристики манула ──────────────────────────────────────────────────
export const MANUL_CHARACTERISTICS = [
  { label: 'Длина тела', value: '45–65 см' },
  { label: 'Масса', value: '2–5 кг' },
  { label: 'Длина шерсти', value: 'до 7 см' },
] as const;

// ─── Региональные популяции ─────────────────────────────────────────────────
export const REGIONAL_POPULATIONS = [
  { region: 'Забайкальский край', note: 'Основной ареал в России' },
  { region: 'Бурятия', note: 'Значимые популяции' },
  { region: 'Тыва и Алтай', note: 'Периферийные популяции' },
] as const;

// ─── Превью статей (для главной) ────────────────────────────────────────────
import { articles } from './articles';

export const FEATURED_ARTICLES = articles.slice(0, 3);
```

**DoD:**
- [ ] Все данные вынесены из Home.tsx
- [ ] Данные типизированы
- [ ] Экспорт из `src/data/index.ts`

---

#### 5.2. Вынести компоненты карточек

**Файл:** `src/components/home/StatCard.tsx`

```tsx
import { useCounter } from '@/hooks/useCounter'; // или оставить локально

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, suffix, label, delay = 0 }: StatCardProps) {
  const { count, ref } = useCounter(value);
  
  return (
    <div
      ref={ref}
      className="fade-up text-center px-6 py-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-manul-primary leading-none mb-3 font-heading">
        {count.toLocaleString('ru-RU')}{suffix}
      </div>
      <div className="text-sm md:text-base text-manul-text-secondary font-medium leading-snug max-w-[160px] mx-auto font-body">
        {label}
      </div>
    </div>
  );
}
```

**Аналогично создать:**
- [ ] `ThreatCard.tsx`
- [ ] `HelpCard.tsx`
- [ ] `OrgCard.tsx`
- [ ] `EventCard.tsx`
- [ ] `TeamCard.tsx`
- [ ] `ArticleCard.tsx`
- [ ] `SectionDivider.tsx`

**DoD:**
- [ ] Все карточки вынесены в отдельные файлы
- [ ] Компоненты типизированы
- [ ] Компоненты переиспользуемые
- [ ] Home.tsx уменьшился на ~800 строк

---

#### 5.3. Обновить Home.tsx

**Файл:** `src/pages/Home.tsx`

**Структура после рефакторинга:**

```tsx
import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { InteractiveMap } from '@/components/InteractiveMap';
import type { HabitatPoint } from '@/components/InteractiveMap';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useReveal, useCounter } from '@/hooks/useScrollAnimations'; // вынести хуки

// Импорт данных
import {
  STATS,
  PROJECT_GOALS,
  SITE_SECTIONS,
  THREATS,
  CALENDAR_PLAN,
  MANUL_CHARACTERISTICS,
  REGIONAL_POPULATIONS,
  FEATURED_ARTICLES,
} from '@/data/home';

// Импорт компонентов
import { StatCard } from '@/components/home/StatCard';
import { ThreatCard } from '@/components/home/ThreatCard';
import { SectionDivider } from '@/components/home/SectionDivider';
// ... остальные компоненты

export default function Home() {
  const [selectedPoint, setSelectedPoint] = useState<HabitatPoint | null>(null);
  const { scrollTo } = useSmoothScroll({ headerOffset: 80 });

  // Хуки для анимаций (если нужны)
  // const statsRef = useReveal();

  return (
    <div className="min-h-screen bg-manul-bg">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* ... */}
      </section>

      {/* STATS */}
      <section className="bg-white border-y border-manul-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-manul-border">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Остальные секции с использованием данных и компонентов */}
    </div>
  );
}
```

**DoD:**
- [ ] Home.tsx сократился до ~500 строк
- [ ] Все данные импортируются из `@/data/home`
- [ ] Все карточки — отдельные компоненты
- [ ] Нет хардкода данных в компоненте
- [ ] Сборка работает без ошибок
- [ ] Визуальная проверка: всё отображается корректно

---

### 🔹 ЭТАП 6: Типизация констант (1-2 часа)

#### 6.1. Создать типы для навигации

**Файл:** `src/types/navigation.ts`

```typescript
export type LinkType = 'anchor' | 'page';

export interface NavLink {
  label: string;
  href: string;
  type: LinkType;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface NavConfig {
  links: NavLink[];
  footerPages: FooterLink[];
  footerDocuments: FooterLink[];
}
```

#### 6.2. Обновить `src/const.ts` с типами

```typescript
import { NavLink, FooterLink } from './types/navigation';

export const NAV_LINKS: NavLink[] = [
  { label: 'Главная', href: '#', type: 'anchor' },
  { label: 'Информация', href: '#information', type: 'anchor' },
  // ...
];

export const FOOTER_PAGES: FooterLink[] = [
  { label: 'Статьи', href: '/articles' },
  // ...
];
```

**DoD:**
- [ ] Все типы созданы
- [ ] Константы типизированы
- [ ] TypeScript не выдаёт ошибок

---

### 🔹 ЭТАП 7: Финальная проверка и документация (2-3 часа)

#### 7.1. Проверка работы в закрытой сети

**Действия:**

1. Отключить интернет
2. Запустить проект: `npm run dev`
3. Проверить:
   - [ ] Шрифты загружаются локально
   - [ ] Изображения отображаются
   - [ ] Нет ошибок в консоли
   - [ ] Все страницы работают

#### 7.2. Обновить документацию

**Файл:** `README.md`

Добавить раздел:

```markdown
## 🌐 Работа в закрытой сети

Проект полностью автономен и не требует доступа к интернету:

- ✅ Шрифты подключены локально (`src/assets/fonts/`)
- ✅ Изображения хранятся локально (`src/assets/images/`)
- ✅ Нет внешних CDN-зависимостей
- ✅ Все данные хранятся в проекте

### Развёртывание в закрытой сети

1. Скопируйте проект на целевой сервер
2. Установите зависимости: `npm install`
3. Запустите: `npm run build`
4. Разместите `dist/` на веб-сервере
```

#### 7.3. Создать чек-лист для будущих разработчиков

**Файл:** `docs/CONTRIBUTING.md`

```markdown
# Руководство для разработчиков

## Добавление новой статьи

1. Откройте `src/data/articles.ts`
2. Добавьте новый объект в массив `articles`
3. Сохраните файл

## Добавление нового раздела на главную

1. Добавьте данные в `src/data/home.ts`
2. Создайте компонент в `src/components/home/`
3. Импортируйте и используйте в `Home.tsx`

## Изменение цветовой схемы

1. Откройте `tailwind.config.js`
2. Измените цвета в секции `colors.manul`
3. Перезапустите сборку
```

**DoD:**
- [ ] README обновлён
- [ ] CONTRIBUTING создан
- [ ] Проверка в закрытой сети пройдена
- [ ] Все тесты проходят

---

## 📊 ИТОГОВЫЙ ПЛАН

| Этап | Задачи | Трудоёмкость | Приоритет |
|------|--------|-------------|-----------|
| 1 | Подготовка инфраструктуры, шрифты, изображения | 4-5 ч | 🔴 Высокий |
| 2 | Устранение дубликатов стилей | 5-6 ч | 🔴 Высокий |
| 3 | Централизация скролла | 2-3 ч | 🔴 Высокий |
| 4 | Настройка цветов Tailwind | 3-4 ч | 🟡 Средний |
| 5 | Рефакторинг Home.tsx | 6-8 ч | 🟡 Средний |
| 6 | Типизация констант | 1-2 ч | 🟢 Низкий |
| 7 | Финальная проверка, документация | 2-3 ч | 🟢 Низкий |

**Общая трудоёмкость:** **23-31 час**

---

## ✅ КРИТЕРИИ ПРИЁМКИ (DoD для всего проекта)

- [ ] Все шрифты подключены локально (нет Google Fonts)
- [ ] Все изображения хранятся локально (нет внешних URL)
- [ ] Нет inline-стилей с `fontFamily`
- [ ] Все цвета используют классы Tailwind `manul-*`
- [ ] Логика скролла централизована в хуке
- [ ] Home.tsx < 600 строк
- [ ] Все данные вынесены в `src/data/`
- [ ] Все константы типизированы
- [ ] Проект работает без интернета
- [ ] Сборка проходит без ошибок
- [ ] Все тесты проходят
- [ ] Документация обновлена

---

## 🚀 СЛЕДУЮЩИЕ ШАГИ

1. Создать ветку: `git checkout -b feature/refactor-localization`
2. Выполнять этапы последовательно
3. После каждого этапа — коммит и проверка
4. По завершении — PR и code review
5. Мерж в основную ветку

---

*Документ является руководством к действию. Все изменения должны проходить code review.*
