/*
 * Footer — Степной хранитель
 * Unified footer component with 4 sections:
 * - Разделы (якорные ссылки)
 * - Страницы
 * - Документы
 * - Контакты
 */

import { NAV_LINKS, FOOTER_PAGES, FOOTER_DOCUMENTS, CONTACTS, IMAGES, FONTS } from "@/const";

// Фильтруем только якорные ссылки для секции "Разделы"
const anchorLinks = NAV_LINKS.filter(link => link.type === "anchor");

export default function Footer() {
  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[oklch(0.15_0.04_65)] text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={IMAGES.logo}
                alt="Логотип"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div
                  className="font-bold text-lg leading-none"
                  style={{ fontFamily: FONTS.headings }}
                >
                  Степной хранитель
                </div>
                <div
                  className="text-xs text-white/50 tracking-widest uppercase"
                  style={{ fontFamily: FONTS.body }}
                >
                  Защита манула
                </div>
              </div>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: FONTS.body }}
            >
              Информационно-просветительская платформа о мануле. Инициатива студентов 
              Финансового университета при Правительстве РФ.
            </p>
          </div>

          {/* Разделы */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4"
              style={{ fontFamily: FONTS.body }}
            >
              Разделы
            </h3>
            <div className="space-y-2">
              {anchorLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className="block text-left text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: FONTS.body }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Страницы */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4"
              style={{ fontFamily: FONTS.body }}
            >
              Страницы
            </h3>
            <div className="space-y-2">
              {FOOTER_PAGES.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: FONTS.body }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Документы и Контакты */}
          <div>
            {/* Документы */}
            <h3
              className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4"
              style={{ fontFamily: FONTS.body }}
            >
              Документы
            </h3>
            <div className="space-y-2 mb-6">
              {FOOTER_DOCUMENTS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: FONTS.body }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Контакты */}
            <h3
              className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4"
              style={{ fontFamily: FONTS.body }}
            >
              Контакты
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACTS.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: FONTS.body }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M2 5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                {CONTACTS.email}
              </a>
              <p
                className="text-sm text-white/60 leading-relaxed"
                style={{ fontFamily: FONTS.body }}
              >
                {CONTACTS.institution}<br />
                {CONTACTS.faculty}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: FONTS.body }}
          >
            © 2026 Степной хранитель · Студенческая просветительская инициатива
          </p>
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: FONTS.body }}
          >
            Проект реализуется в 2026–2027 годах
          </p>
        </div>
      </div>
    </footer>
  );
}
