# Документация по токенам и CSS правилам проекта

> Документ для реверс-инжиниринга под React компоненты

---

## Содержание

1. [Токены цветов (CSS Variables)](#1-токены-цветов-css-variables)
2. [Шрифты](#2-шрифты)
3. [CSS Reset](#3-css-reset)
4. [Tailwind CSS](#4-tailwind-css)
5. [Кастомные CSS-классы](#5-кастомные-css-классы)
6. [Рекомендации для миграции на React компоненты](#6-рекомендации-для-миграции-на-react-компоненты)

---

## 1. Токены цветов (CSS Variables)

Все токены определены в `#content-root` и `#content-root.dark` (для темной темы).

### 1.1 Текст (Text Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--text-primary` | `#34322d` | `#dadada` | Основной текст |
| `--text-secondary` | `#535350` | `#acacac` | Вторичный текст |
| `--text-tertiary` | `#858481` | `#7f7f7f` | Третичный текст |
| `--text-disable` | `#b9b9b7` | `#5f5f5f` | Отключенный текст |
| `--text-brand` | `#0081f2` | `#1a93fe` | Брендовый цвет |
| `--text-onblack` | `#ffffff` | `#000000e6` | Текст на черном |
| `--text-white` | `#ffffff` | `#ffffff` | Белый текст |
| `--text-white-tsp` | `#ffffff99` | `#ffffff99` | Белый текст с прозрачностью |
| `--theme-text-primary` | `#262626` | `#dbdbdb` | Тёмный текст темы |
| `--logo-color` | `#34322d` | `#dadada` | Цвет логотипа |

### 1.2 Фоны (Background Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--background-gray-main` | `#f8f8f7` | `#272728` | Основной серый фон |
| `--background-white-main` | `#ffffff` | `#161618` | Основной белый фон |
| `--background-menu-white` | `#ffffff` | `#383739` | Фон меню |
| `--background-tsp-menu-white` | `#ffffff14` | `#ffffff0f` | Меню с прозрачностью |
| `--background-tsp-card-gray` | `#37352f0a` | `#ffffff0f` | Карточка с прозрачностью |
| `--background-nav` | `#ebebeb` | `#212122` | Фон навигации |
| `--background-card` | `#fafafa` | `#383739` | Фон карточки |
| `--background-mask` | `#000000a6` | `#000000a6` | Маска/оверлей |
| `--background-card-gray` | `#fafafa` | `#383739` | Серая карточка |
| `--background-preview-mask` | `#000000d9` | `#000000d9` | Маска предпросмотра |

### 1.3 Границы (Border Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--border-main` | `#0000000f` | `#ffffff14` | Основная граница |
| `--border-white` | `#ffffff33` | `#00000014` | Белая граница |
| `--border-btn-main` | `#0000001f` | `#ffffff1a` | Граница кнопки |
| `--border-input-active` | `#0081f280` | `#1a93fe80` | Активное поле ввода |
| `--border-light` | `#0000000a` | `#ffffff0f` | Тонкая граница |
| `--border-dark` | `#0000001f` | `#ffffff29` | Тёмная граница |
| `--border-primary` | `#4f59661f` | `#56565f52` | Основная граница |

### 1.4 Иконки (Icon Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--icon-primary` | `#34322d` | `#dadada` | Основная иконка |
| `--icon-secondary` | `#535350` | `#acacac` | Вторичная иконка |
| `--icon-tertiary` | `#858481` | `#7f7f7f` | Третичная иконка |
| `--icon-disable` | `#b9b9b7` | `#5f5f5f` | Отключенная иконка |
| `--icon-brand` | `#0081f2` | `#1a93fe` | Брендовая иконка |
| `--icon-onblack` | `#ffffff` | `#000000d9` | Иконка на черном |
| `--icon-white` | `#ffffff` | `#ffffff` | Белая иконка |
| `--icon-white-tsp` | `#ffffff99` | `#ffffff99` | Белая иконка с прозрачностью |

### 1.5 Функциональные цвета (Function Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--function-error` | `#f25a5a` | `#eb4d4d` | Ошибка |
| `--function-success` | `#25ba3b` | `#5eb92d` | Успех |
| `--function-warning` | `#efa201` | `#ffbf36` | Предупреждение |
| `--function-error-tsp` | `#f25a5a14` | `#eb4d4d14` | Ошибка с прозрачностью |
| `--function-warning-tsp` | `#efa2011f` | `#ffbf361f` | Предупреждение с прозрачностью |

### 1.6 Заливка (Fill Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--fill-blue` | `#0081f214` | `#1a93fe1f` | Синяя заливка |
| `--fill-tsp-white-main` | `#37352f0f` | `#ffffff0f` | Белая заливка основная |
| `--fill-tsp-white-dark` | `#37352f14` | `#ffffff1f` | Белая заливка тёмная |
| `--fill-tsp-white-light` | `#37352f0a` | `#ffffff0a` | Белая заливка светлая |
| `--fill-tsp-gray-dark` | `#37352f14` | `#00000047` | Серая заливка тёмная |
| `--fill-tsp-gray-main` | `#37352f0a` | `#00000033` | Серая заливка основная |
| `--fill-input-chat` | `#ffffff` | `#363537` | Поле ввода чата |
| `--fill-white` | `#ffffff` | `#3e3d3e` | Белая заливка |
| `--fill-black` | `#28282973` | `#28282973` | Черная заливка |
| `--fill-gray` | `#f8f8f7` | `#444345` | Серая заливка |

### 1.7 Кнопки (Button Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--Button-primary-black` | `#1a1a19` | `#ffffff` | Кнопка первичная чёрная |
| `--Button-primary-white` | `#ffffff` | `#ffffff14` | Кнопка первичная белая |
| `--Button-primary-brand` | `#0081f2` | `#1a93fe` | Кнопка первичная брендовая |
| `--Button-primary-brand-disabled` | `#7cbdf5` | `#215d93` | Кнопка брендовая отключенная |
| `--Button-secondary-brand` | `#0081f21a` | `#1a93fe1f` | Кнопка вторичная брендовая |
| `--Button-secondary-error-border` | `#f25a5a80` | `#eb4d4d29` | Граница ошибки |
| `--Button-secondary-error-fill` | `#ffffff` | `#eb4d4d1f` | Заливка ошибки |
| `--Button-secondary-main` | `#ffffff` | `#ffffff1f` | Кнопка вторичная основная |
| `--Button-secondary-gray` | `#37352f0f` | `#ffffff0f` | Кнопка вторичная серая |

### 1.8 Вкладки (Tab Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--tab-fill` | `rgba(0, 0, 0, 0.04)` | `rgba(255, 255, 255, 0.06)` | Заливка вкладки |
| `--tab-active-black` | `#1a1a19` | `#ffffff` | Активная вкладка |

### 1.9 Тени (Shadow Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--shadow-L` | `#0000003d` | `#00000066` | Большая тень |
| `--shadow-M` | `#0000001f` | `#0000003d` | Средняя тень |
| `--shadow-S` | `#00000014` | `#00000029` | Маленькая тень |
| `--shadow-XS` | `#0000000f` | `#0000001f` | Очень маленькая тень |
| `--shadows-inner-0` | `#ffffff00` | `#ffffff1f` | Внутренняя тень 0 |
| `--shadows-inner-1` | `#16191d14` | `#ffffff14` | Внутренняя тень 1 |
| `--shadows-inner-2` | `#16191d1f` | `#ffffff1f` | Внутренняя тень 2 |
| `--shadows-drop-1` | `#16191d08` | `#0000001f` | Падение тени 1 |
| `--shadows-drop-2` | `#16191d0a` | `#00000033` | Падение тени 2 |
| `--shadows-drop-3` | `#16191d14` | `#00000047` | Падение тени 3 |
| `--shadows-drop-4` | `#16191d1f` | `#0000005c` | Падение тени 4 |
| `--shadows-highlight-1` | `#cce5ff` | `#1b61a6` | Подсветка 1 |
| `--shadows-highlight-2` | `#1487fa` | `#1487fa` | Подсветка 2 |
| `--shadows-danger-1` | `#fed7d7` | `#8f1919` | Опасность 1 |
| `--shadows-danger-2` | `#ee3a3a` | `#ee3a3a` | Опасность 2 |
| `--shadows-card-border` | `#16191d1f` | `#ffffff1f` | Граница карточки |
| `--shadows-card-border-2` | `#16191d1f` | `#ffffff00` | Граница карточки 2 |

### 1.10 Tooltips

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--Tooltips-main` | `#000000e6` | `#000000e6` | Основной цвет тултипа |

### 1.11 Градиенты (Gradual Colors)

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--gradual-white-0` | `#ffffff00` | `#27272800` | Белый градиент 0 |
| `--gradual-gray-100` | `#ffffff00` | `#444345` | Серый градиент 100 |
| `--gradual-gray-0` | `#ffffff00` | `#44434500` | Серый градиент 0 |
| `--gradual-dark-20` | `#00000033` | `#ffffff33` | Тёмный градиент 20 |

### 1.12 Input

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--fill-input-chat` | `#ffffff` | `#363537` | Поле ввода чата |

### 1.13 Gradient

| Токен | Светлая тема | Темная тема | Описание |
|-------|--------------|-------------|----------|
| `--gradient-bg-mask-gray-0` | `#eaeaeb00` | `#1E1E1E00` | Градиент маски |

---

## 2. Шрифты

```css
/* Основной шрифт */
font-family: Montserrat, sans-serif;

/* Заголовки / Логотип */
font-family: "Playfair Display", serif;

/* Шрифт для #content-root */
font-family: 'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
```

---

## 3. CSS Reset

Проект использует полный CSS reset:

```css
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
```

---

## 4. Tailwind CSS

Проект использует **Tailwind CSS v4.1.14**. Все утилитарные классы из CSS файла являются частью Tailwind.

---

## 5. Кастомные CSS-классы

### 5.1 Tooltip

```css
.tooltip-trigger-css {
    position: relative;
}

.tooltip-trigger-css::after {
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

.tooltip-trigger-css.tooltip-trigger-right-css::after {
    left: unset;
    right: 0;
    transform: translateX(0) translateY(-8px);
}

.tooltip-trigger-css.tooltip-trigger-right-css:hover::after {
    left: unset;
    right: 0;
    transform: translateX(0) translateY(-8px);
}

/* 当触发元素被 hover 或 focus 时显示 tooltip */
.tooltip-trigger-css:hover::after,
.tooltip-trigger-css:focus::after {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-10px);
    transition-delay: 0s, 0s, 0s;
}

/* 确保非交互元素可聚焦，以便 tooltip 可以通过键盘触发 */
.tooltip-trigger-css:not(button):not(input):not(a[href]) {
    outline: none;
}

.tooltip-trigger-css:focus {
    box-shadow: 0 0 0 2px skyblue;
}
```

### 5.2 Footer Watermark (Shadow DOM)

Используется для водяного знака "Made with Manus":

```css
.footer-watermark-root {
    z-index: 10000;
    display: flex;
    align-items: center;
    position: fixed;
    right: 16px;
    bottom: 16px;
    border-radius: 999px;
    background: var(--Button-primary-black);
    height: 40px;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: var(--text-white);
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
}

.footer-watermark-hover-icon {
    display: none;
    cursor: pointer;
    user-select: none;
    position: absolute;
    right: -4px;
    top: -4px;
    color: var(--icon-tertiary);
}

.footer-watermark-root:hover {
    background: #313130;
}

.footer-watermark-root:hover .footer-watermark-hover-icon {
    display: block;
}

.footer-watermark-tooltip {
    position: absolute;
    bottom: calc(100% + 6px);
    right: 0;
    width: 280px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.06);
    padding: 10px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 10001;
    border: 0.5px solid var(--border-primary);
    cursor: default;
}

.footer-watermark-root:hover .footer-watermark-tooltip {
    opacity: 1;
    visibility: visible;
}

.footer-watermark-tooltip-text {
    font-size: 12px;
    line-height: 16px;
    color: #5e5e5b;
    margin: 0;
    font-weight: 400;
}

.footer-watermark-tooltip-link {
    color: #34322d;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-decoration-style: solid;
    text-underline-position: from-font;
}

.footer-watermark-tooltip-button {
    width: 100%;
    margin-top: 8px;
    padding: 8px 16px;
    background: #1a1a19;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease;
}

.footer-watermark-tooltip-button:hover {
    background: #2a2a29;
}
```

---

## 6. Рекомендации для миграции на React компоненты

### 6.1 Создайте файл токенов

```css
/* theme/tokens.css */
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

### 6.2 Настройте Tailwind для использования токенов

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        disable: 'var(--text-disable)',
        brand: 'var(--text-brand)',
        white: 'var(--text-white)',
        error: 'var(--function-error)',
        success: 'var(--function-success)',
        warning: 'var(--function-warning)',
      },
      boxShadow: {
        xs: '0 0 0 0 var(--shadow-xs)',
        sm: '0 0 0 0 var(--shadow-s)',
        md: '0 0 0 0 var(--shadow-m)',
        lg: '0 0 0 0 var(--shadow-l)',
      }
    }
  }
}
```

### 6.3 Создайте контекст темы для переключения светлой/тёмной темы

```tsx
// ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggleTheme: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

### 6.4 Выделите компоненты на основе видимых структур

| Компонент | Описание |
|-----------|----------|
| `Navbar` | Навигация с логотипом |
| `Tooltip` | Кастомный тултип |
| `FooterWatermark` | Водяной знак |
| `Notification` | Система уведомлений |
| `ErrorCatcher` | Обработчик ошибок |

### 6.5 Создайте утилитарные компоненты для повторяющихся паттернов

| Компонент | Описание |
|-----------|----------|
| `Button` | Первичный/вторичный/брендовый |
| `Card` | Карточки с тенями и границами |
| `Input` | Поля ввода с активными состояниями |

---

## 7. Структура проекта (выявленная из HTML)

```
src/
├── components/
│   ├── Navbar.tsx
│   └── ...
├── modules/
│   └── ErrorCatcher/
│       └── StackView.tsx
└── pages/
    └── Home.tsx
```

---

## 8. Зависимости (выявленные из кода)

- React
- React DOM
- Tailwind CSS v4.1.14
- Sonner (toast notifications)
- Umami (аналитика)
- Plausible (аналитика)

---

*Документ сгенерирован на основе анализа существующего проекта*
