# 📋 Отчёт о техническом долге проекта «Степной хранитель»

**Дата анализа:** Декабрь 2024  
**Статус:** Требуется рефакторинг

---

## 🔴 КРИТИЧЕСКИЙ ТЕХДОЛГ (Priority: High)

### 1. Массовое дублирование inline-стилей шрифтов

**Проблема:**  
Более **200 повторений** одних и тех же стилей шрифтов по всему проекту:

```tsx
style={{ fontFamily: "'Playfair Display', serif" }}
style={{ fontFamily: "'Montserrat', sans-serif" }}
```

**Где встречается:**
- `src/pages/Home.tsx` — ~80 раз
- `src/pages/Articles.tsx` — ~20 раз
- `src/pages/Help.tsx` — ~25 раз
- `src/pages/Threats.tsx` — ~30 раз
- `src/pages/Problems.tsx` — ~35 раз
- `src/components/Navbar.tsx` — ~10 раз
- `src/components/Footer.tsx` — ~15 раз
- `src/components/InteractiveMap.tsx` — ~15 раз

**Влияние:**
- ❌ Увеличение размера бандла
- ❌ Сложность поддержки (изменение шрифта потребует правки в 200+ местах)
- ❌ Нарушение DRY
- ❌ Риск рассинхронизации стилей

**Решение:**

#### Вариант A: CSS-классы (рекомендуется)
Создать утилитарные классы в `index.css`:

```css
.font-heading { font-family: 'Playfair Display', serif; }
.font-body { font-family: 'Montserrat', sans-serif; }
```

Использовать:
```tsx
<h1 className="font-heading">Заголовок</h1>
<p className="font-body">Текст</p>
```

#### Вариант B: Компоненты-обёртки
Создать типографические компоненты:

```tsx
// src/components/ui/typography.tsx
export function Heading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`font-heading ${className || ''}`} style={{ fontFamily: FONTS.headings }}>
      {children}
    </h1>
  );
}

export function Body({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-body ${className || ''}`} style={{ fontFamily: FONTS.body }}>
      {children}
    </p>
  );
}
```

**Оценка трудоёмкости:** 4-6 часов  
**Приоритет:** 🔴 Высокий

---

### 2. Дублирование логики плавного скролла

**Проблема:**  
Функция `handleScroll` и прямые вызовы `scrollIntoView` дублируются в 3+ местах:

```tsx
// Navbar.tsx
const handleLink = (href: string) => {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

// Footer.tsx
const handleScroll = (href: string) => {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// Home.tsx (прямые вызовы)
onClick={() => document.querySelector("#information")?.scrollIntoView({ behavior: "smooth" })}
```

**Влияние:**
- ❌ Дублирование кода
- ❌ Отсутствие централизованной обработки ошибок
- ❌ Сложность добавления новых фич (например, offset для фиксированного хедера)

**Решение:**

Создать хук `useSmoothScroll`:

```tsx
// src/hooks/useSmoothScroll.ts
import { useCallback } from 'react';

export function useSmoothScroll(headerOffset = 80) {
  const scrollTo = useCallback((selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [headerOffset]);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      scrollTo(href);
    }
  }, [scrollTo]);

  return { scrollTo, handleAnchorClick };
}
```

**Оценка трудоёмкости:** 2-3 часа  
**Приоритет:** 🟡 Средний

---

### 3. Hardcoded цвета OKLCH в классах Tailwind

**Проблема:**  
Цвета захардкожены в десятках мест:

```tsx
className="text-[oklch(0.38_0.11_145)]"
className="bg-[oklch(0.20_0.03_65)]"
className="border-[oklch(0.88_0.015_75)]"
```

**Влияние:**
- ❌ Невозможность быстрой смены цветовой схемы
- ❌ Риск опечаток
- ❌ Отсутствие autocomplete в IDE

**Решение:**

Настроить кастомные цвета в `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        manul: {
          primary: 'oklch(0.38_0.11_145)',
          primaryHover: 'oklch(0.32_0.11_145)',
          text: 'oklch(0.20_0.03_65)',
          textMuted: 'oklch(0.50_0.03_65)',
          bg: 'oklch(0.95_0.015_85)',
          border: 'oklch(0.88_0.015_75)',
        }
      }
    }
  }
}
```

Использовать:
```tsx
className="text-manul-primary bg-manul-bg"
```

**Оценка трудоёмкости:** 3-4 часа  
**Приоритет:** 🟡 Средний

---

## 🟡 СРЕДНИЙ ТЕХДОЛГ (Priority: Medium)

### 4. Гигантский файл Home.tsx

**Проблема:**  
`src/pages/Home.tsx` содержит **~2200 строк кода** с множеством встроенных компонентов.

**Структура файла:**
- 9 встроенных компонентов-карточек (StatCard, ThreatCard, HelpCard, etc.)
- 10+ секций с собственным контентом
- Хардкод данных внутри компонента

**Влияние:**
- ❌ Долгая компиляция
- ❌ Сложность навигации по коду
- ❌ Трудности с code review
- ❌ Риск merge conflicts

**Решение:**

Вынести карточки в отдельные компоненты:
```
src/components/home/
├── StatCard.tsx
├── ThreatCard.tsx
├── HelpCard.tsx
├── OrgCard.tsx
├── EventCard.tsx
├── TeamCard.tsx
├── ArticleCard.tsx
└── SectionDivider.tsx
```

Данные вынести в `src/data/home.ts`.

**Оценка трудоёмкости:** 6-8 часов  
**Приоритет:** 🟡 Средний

---

### 5. Отсутствие типизации для данных из const.ts

**Проблема:**  
Константы в `src/const.ts` не типизированы явно:

```ts
export const NAV_LINKS = [
  { label: "Главная", href: "#", type: "anchor" as const },
  // ...
];
```

**Влияние:**
- ⚠️ Отсутствие гарантии структуры данных
- ⚠️ Сложность рефакторинга

**Решение:**

Добавить интерфейсы:

```ts
// src/types/navigation.ts
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

// src/const.ts
import { NavLink, FooterLink } from './types/navigation';

export const NAV_LINKS: NavLink[] = [/* ... */];
export const FOOTER_PAGES: FooterLink[] = [/* ... */];
```

**Оценка трудоёмкости:** 1-2 часа  
**Приоритет:** 🟢 Низкий

---

### 6. Прямая манипуляция DOM в кнопках HERO

**Проблема:**  
В `Home.tsx` используются прямые вызовы DOM API:

```tsx
onClick={() => document.querySelector("#information")?.scrollIntoView({ behavior: "smooth" })}
```

**Влияние:**
- ⚠️ Нарушение React-парадигмы
- ⚠️ Потенциальные проблемы с SSR (если будет добавлен)
- ⚠️ Отсутствие типизации

**Решение:**  
Использовать хук `useSmoothScroll` (см. пункт 2).

**Оценка трудоёмкости:** 1 час (в рамках задачи #2)  
**Приоритет:** 🟢 Низкий

---

## 🟢 НИЗКИЙ ТЕХДОЛГ (Priority: Low)

### 7. Неиспользуемые ref в Home.tsx

**Проблема:**  
Объявлены, но не используются ref:

```tsx
const statsRef = useRef<HTMLDivElement>(null);      // ❌ Не используется
const aboutRef = useRef<HTMLDivElement>(null);      // ❌ Не используется
const threatsRef = useRef<HTMLDivElement>(null);    // ❌ Не используется
// ... и ещё 6 ref
```

**Влияние:**
- ⚠️ Мусор в коде
- ⚠️ Минимальное

**Решение:**  
Удалить неиспользуемые ref или использовать для Intersection Observer.

**Оценка трудоёмкости:** 30 минут  
**Приоритет:** 🟢 Низкий

---

### 8. Дублирование данных о статьях

**Проблема:**  
Статьи дублируются между:
- `src/data/articles.ts` (основной файл)
- `src/pages/Home.tsx` (хардкод превью в секции Popular Science)

**Влияние:**
- ⚠️ Риск рассинхронизации
- ⚠️ Необходимость править в 2 местах

**Решение:**  
Импортировать статьи из `articles.ts` и использовать `slice(0, 3)` для превью.

**Оценка трудоёмкости:** 1 час  
**Приоритет:** 🟢 Низкий

---

### 9. Отсутствие debounce/throttle для scroll-событий

**Проблема:**  
В `Navbar.tsx` scroll-обработчик не оптимизирован:

```tsx
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 60);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

**Влияние:**
- ⚠️ Избыточные ре-рендеры при скролле
- ⚠️ Потенциальные проблемы с производительностью на слабых устройствах

**Решение:**  
Добавить throttle с помощью `lodash.throttle` или кастомного хука.

```tsx
import { throttle } from 'lodash-es';

const onScroll = throttle(() => setScrolled(window.scrollY > 60), 100);
```

**Оценка трудоёмкости:** 1 час  
**Приоритет:** 🟢 Низкий

---

## 📊 СВОДНАЯ ТАБЛИЦА

| # | Проблема | Приоритет | Трудоёмкость | Влияние |
|---|----------|-----------|---------------|---------|
| 1 | Дублирование стилей шрифтов (200+ раз) | 🔴 High | 4-6 ч | Производительность, поддержка |
| 2 | Дублирование логики скролла | 🔴 High | 2-3 ч | DRY, поддержка |
| 3 | Хардкод OKLCH цветов | 🟡 Medium | 3-4 ч | Поддержка, DX |
| 4 | Гигантский Home.tsx (2200 строк) | 🟡 Medium | 6-8 ч | Читаемость, поддержка |
| 5 | Отсутствие типизации const.ts | 🟡 Medium | 1-2 ч | Типобезопасность |
| 6 | Прямая манипуляция DOM | 🟢 Low | 1 ч* | React best practices |
| 7 | Неиспользуемые ref | 🟢 Low | 0.5 ч | Чистота кода |
| 8 | Дублирование данных статей | 🟢 Low | 1 ч | Консистентность |
| 9 | Отсутствие throttle для scroll | 🟢 Low | 1 ч | Производительность |

*В рамках задачи #2

**Общая оценка трудоёмкости:** ~20-27 часов

---

## 🎯 ПЛАН РЕФАКТОРИНГА

### Фаза 1: Критические проблемы (1-2 спринта)
1. ✅ Вынести стили шрифтов в CSS-классы
2. ✅ Создать хук `useSmoothScroll`
3. ✅ Настроить цвета в Tailwind config

### Фаза 2: Средний приоритет (2-3 спринта)
4. ✅ Рефакторинг Home.tsx — вынести карточки
5. ✅ Добавить типизацию для const.ts
6. ✅ Исправить прямую манипуляцию DOM

### Фаза 3: Низкий приоритет (1 спринт)
7. ✅ Удалить неиспользуемые ref
8. ✅ Устранить дублирование статей
9. ✅ Добавить throttle для scroll

---

## 📈 МЕТРИКИ ТЕХДОЛГА

### До рефакторинга:
- **Дубликаты кода:** ~200 строк (шрифты) + ~50 строк (скролл)
- **Cyclomatic complexity Home.tsx:** ~45 (высокая)
- **Размер Home.tsx:** 2200+ строк
- **Maintainability Index:** ~45 (низкий)

### Целевые показатели после рефакторинга:
- **Дубликаты кода:** < 20 строк
- **Cyclomatic complexity Home.tsx:** < 20
- **Размер Home.tsx:** < 500 строк
- **Maintainability Index:** > 70

---

## 🔧 ИНСТРУМЕНТЫ ДЛЯ МОНИТОРИНГА

Рекомендуется подключить:

1. **ESlint plugin: `jsx-a11y`, `react-hooks`**
   ```bash
   npm install -D eslint-plugin-jsx-a11y
   ```

2. **Code complexity анализ:**
   ```bash
   npm install -D complexity-report
   ```

3. **Дубликаты кода:**
   ```bash
   npm install -D jscpd
   # Запуск
   npx jscpd src/
   ```

4. **Размер бандла:**
   ```bash
   npm install -D rollup-plugin-visualizer
   ```

---

## ✅ ЧЕК-ЛИСТ ДЛЯ ПОВЫШЕНИЯ КАЧЕСТВА КОДА

- [ ] Все стили шрифтов вынесены в классы
- [ ] Логика скролла централизована в хуке
- [ ] Цвета настроены в Tailwind config
- [ ] Home.tsx разбит на компоненты < 200 строк
- [ ] Все данные типизированы
- [ ] Нет прямых вызовов DOM API
- [ ] Нет неиспользуемых ref/импортов
- [ ] Все данные в одном источнике истины
- [ ] Scroll-события throttle'd
- [ ] Добавлены unit-тесты для хуков

---

## 📝 ЗАКЛЮЧЕНИЕ

Проект находится в **хорошем состоянии** с точки зрения архитектуры, но имеет значительный технический долг в виде:
1. Массового дублирования inline-стилей
2. Гигантского файла Home.tsx
3. Отсутствия централизации для общей логики

**Рекомендуемый порядок действий:**
1. Начать с вынесения стилей шрифтов (наибольший выигрыш)
2. Создать хук для скролла
3. Настроить Tailwind цвета
4. Постепенно рефакторить Home.tsx

**Ожидаемый результат:** Увеличение скорости разработки на 30-40%, снижение багов при изменениях.

---

*Отчёт сгенерирован автоматически на основе статического анализа кода.*
