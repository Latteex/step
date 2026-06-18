/*
 * Navbar — Степной хранитель
 * Fixed top nav, transitions to opaque on scroll
 * Playfair Display logo + Montserrat nav links
 */

import { useEffect, useState } from "react";

const navLinks = [
  { label: "О мануле", href: "#about" },
  { label: "Угрозы", href: "#threats" },
  { label: "Ареал", href: "#habitat" },
  { label: "Статьи", href: "/articles" },
  { label: "Проблемы", href: "/problems" },
  { label: "Аналитика", href: "/analytics" },
  { label: "Как помочь", href: "/help" },
  { label: "Мероприятия", href: "#events" },
  { label: "Команда", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    // Если это якорь на странице — скроллим
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    // Иначе переход будет по стандартной ссылке
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.98_0.012_85)]/95 backdrop-blur-md shadow-sm border-b border-[oklch(0.88_0.015_75)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 group"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/logo-manul-iziNX2T6GedxBB5dPoDr4s.webp"
            alt="Логотип манул"
            className="w-9 h-9 md:w-11 md:h-11 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div>
            <span
              className={`font-bold text-lg md:text-xl leading-none block transition-colors duration-300 ${
                scrolled ? "text-[oklch(0.20_0.03_65)]" : "text-white"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Степной хранитель
            </span>
            <span
              className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-[oklch(0.38_0.11_145)]" : "text-white/80"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Защита манула
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            link.href.startsWith("#") ? (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[oklch(0.38_0.11_145)] ${
                  scrolled ? "text-[oklch(0.35_0.03_65)]" : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[oklch(0.38_0.11_145)] ${
                  scrolled ? "text-[oklch(0.35_0.03_65)]" : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
              </a>
            )
          ))}
          <button
            onClick={() => handleLink("#help")}
            className="ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-[oklch(0.38_0.11_145)] text-white hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Помочь манулу
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            scrolled ? "text-[oklch(0.20_0.03_65)]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[oklch(0.98_0.012_85)]/98 backdrop-blur-md border-b border-[oklch(0.88_0.015_75)] ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            link.href.startsWith("#") ? (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-left py-3 px-2 text-sm font-medium text-[oklch(0.35_0.03_65)] hover:text-[oklch(0.38_0.11_145)] border-b border-[oklch(0.88_0.015_75)] last:border-0 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-left py-3 px-2 text-sm font-medium text-[oklch(0.35_0.03_65)] hover:text-[oklch(0.38_0.11_145)] border-b border-[oklch(0.88_0.015_75)] last:border-0 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
              </a>
            )
          ))}
          <button
            onClick={() => handleLink("#help")}
            className="mt-3 px-5 py-2.5 rounded-full text-sm font-semibold bg-[oklch(0.38_0.11_145)] text-white hover:bg-[oklch(0.32_0.11_145)] transition-colors text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Помочь манулу
          </button>
        </div>
      </div>
    </header>
  );
}
