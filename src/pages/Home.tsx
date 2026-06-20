

/*
 * Home — Степной хранитель
 * Design: «Живая степь» — Nature editorial + student platform
 * Palette: cream bg, deep moss green, ochre, misty blue
 * Fonts: Playfair Display (headings) + Montserrat (body)
 */

import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import { InteractiveMap } from "@/components/InteractiveMap";
import type { HabitatPoint } from "@/components/InteractiveMap";

// ─── Scroll reveal hook ────────────────────────────────────────────────────
function useReveal(immediate = false) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (immediate) {
      // Show immediately on mount with slight delay for visual effect
      const t = setTimeout(() => el.classList.add("visible"), 100);
      return () => clearTimeout(t);
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [immediate]);
  return ref;
}

// ─── Counter animation ─────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

// ─── Stat card ─────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, delay = 0 }: { value: number; suffix?: string; label: string; delay?: number }) {
  const { count, ref } = useCounter(value);
  return (
    <div
      ref={ref}
      className="fade-up text-center px-6 py-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-[oklch(0.38_0.11_145)] leading-none mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        {count.toLocaleString("ru-RU")}{suffix}
      </div>
      <div className="text-sm md:text-base text-[oklch(0.45_0.03_65)] font-medium leading-snug max-w-[160px] mx-auto"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {label}
      </div>
    </div>
  );
}

// ─── Divider ───────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="w-16 h-1 bg-gradient-to-r from-[oklch(0.38_0.11_145)] to-[oklch(0.50_0.11_145)] rounded-full mx-auto" />
  );
}

// ─── Threat card ───────────────────────────────────────────────────────────
function ThreatCard({ icon, title, desc, delay = 0 }: { icon: string; title: string; desc: string; delay?: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="fade-up bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-2xl p-6 hover:border-[oklch(0.38_0.11_145)] transition-all duration-200"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-white font-bold text-base mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      <p className="text-sm text-[oklch(0.65_0.02_75)] leading-relaxed"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {desc}
      </p>
    </div>
  );
}

// ─── Help card ─────────────────────────────────────────────────────────────
function HelpCard({ icon, title, desc, cta, href, delay = 0, disabled = false }: { icon: string; title: string; desc: string; cta: string; href: string; delay?: number; disabled?: boolean }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="fade-up bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-lg mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-5"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {desc}
      </p>
      {!disabled && (
        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[oklch(0.38_0.11_145)] hover:text-[oklch(0.28_0.11_145)] transition-colors group/link"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {cta}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover/link:translate-x-1 transition-transform">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
    </div>
  );
}

// ─── Organization card ─────────────────────────────────────────────────────
function OrgCard({ name, desc, url, delay = 0 }: { name: string; desc: string; url: string; delay?: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="fade-up bg-white border border-[oklch(0.88_0.015_75)] rounded-xl p-5 hover:shadow-md hover:border-[oklch(0.38_0.11_145)] transition-all duration-200"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-sm mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        {name}
      </h3>
      <p className="text-xs text-[oklch(0.50_0.03_65)] leading-relaxed mb-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {desc}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[oklch(0.38_0.11_145)] hover:text-[oklch(0.28_0.11_145)] transition-colors"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Перейти на сайт
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

// ─── Event card ────────────────────────────────────────────────────────────
function EventCard({ date, title, desc, delay = 0 }: { date: string; title: string; desc: string; delay?: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="fade-up flex gap-4 p-5 bg-white border border-[oklch(0.88_0.015_75)] rounded-xl hover:shadow-md transition-all duration-200"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-center flex-shrink-0">
        <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-wide"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {date}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-sm mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
        <p className="text-xs text-[oklch(0.50_0.03_65)] leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

// ─── Team card ─────────────────────────────────────────────────────────────
function TeamCard({ name, role, bio, delay = 0, photo }: { name: string; role: string; bio: string; delay?: number; photo?: string }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="fade-up bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-64 bg-gradient-to-br from-[oklch(0.93_0.015_85)] to-[oklch(0.90_0.015_85)]">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[oklch(0.38_0.11_145)] to-[oklch(0.50_0.11_145)] flex items-center justify-center text-white font-bold text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {name.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-lg mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          {name}
        </h3>
        <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-wide mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {role}
        </div>
        <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {bio}
        </p>
      </div>
    </div>
  );
}

// ─── Article card ──────────────────────────────────────────────────────────
function ArticleCard({ icon, tag, title, desc, readTime, delay }: { icon: string; tag: string; title: string; desc: string; readTime: string; delay: number }) {
  const cardRef = useReveal();
  return (
    <div
      ref={cardRef}
      className="fade-up bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex items-center gap-2">
          <span className="inline-flex px-2.5 py-1 rounded-full bg-[oklch(0.93_0.04_145)] text-[oklch(0.38_0.11_145)] text-xs font-semibold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {tag}
          </span>
          <span className="text-xs text-[oklch(0.55_0.03_65)] ml-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {readTime}
          </span>
        </div>
      </div>
      <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-base mb-3 leading-snug"
        style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {desc}
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[oklch(0.38_0.11_145)] hover:text-[oklch(0.28_0.11_145)] transition-colors group/link"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Читать
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover/link:translate-x-1 transition-transform">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

export default function Home() {
  const [selectedPoint, setSelectedPoint] = useState<HabitatPoint | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const threatsRef = useRef<HTMLDivElement>(null);
  const habitatRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);
  const orgsRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[oklch(0.95_0.015_85)]">
      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/hero-manul.webp"
            alt="Манул в естественной среде"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[oklch(0.95_0.015_85)]" />
        </div>
        <div className="relative container pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 mb-6">
              <span className="text-white/90 text-xs font-medium uppercase tracking-wider"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Студенческая инициатива
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Степной хранитель
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Информационно-просветительская платформа о мануле — самой пушистой кошке в мире 
              и официальном маскоте Финансового университета.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector("#information")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-lg"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                О проекте
              </button>
              <button
                onClick={() => document.querySelector("#help")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Как помочь
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-[oklch(0.88_0.015_75)]">
        <div ref={statsRef} className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[oklch(0.88_0.015_75)]">
            <StatCard value={9500} suffix="+" label="особей в России (верхняя оценка)" delay={0} />
            <StatCard value={68} suffix="%" label="молодых котят не доживают до расселения" delay={100} />
            <StatCard value={50} suffix="%" label="смертность взрослых особей" delay={200} />
            <StatCard value={13} suffix="%" label="ареала вида находится под охраной" delay={300} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INFORMATION (О ПРОЕКТЕ)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="information" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              О проекте
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Степной хранитель —<br />
              <em>студенческая инициатива</em>
            </h2>
            <Divider />
            <div className="mt-8 space-y-4 text-[oklch(0.40_0.03_65)] leading-relaxed text-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <p>
                <strong className="text-[oklch(0.20_0.03_65)]">«Степной хранитель»</strong> — 
                информационно-просветительская платформа, созданная студентами Финансового университета 
                при Правительстве РФ для привлечения внимания к проблемам сохранения манула.
              </p>
              <p>
                Наш маскот — манул, самая пушистая кошка в мире, символизирует стойкость и 
                адаптивность. Для нас это не просто проект, а <strong className="text-[oklch(0.20_0.03_65)]">личная миссия</strong>: 
                защитить популяцию вида и вовлечь молодёжь в природоохранную деятельность.
              </p>
              <p>
                Платформа объединяет научно-популярные материалы, аналитику угроз, интерактивные 
                инструменты и возможности для реального участия в сохранении манула.
              </p>
            </div>

            {/* Project goals */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "",
                  title: "Просвещение",
                  desc: "Распространение знаний о мануле и степных экосистемах",
                },
                {
                  icon: "",
                  title: "Вовлечение",
                  desc: "Включение студентов в природоохранную повестку",
                },
                {
                  icon: "",
                  title: "Защита",
                  desc: "Поддержка реальных охранных инициатив и организаций",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-[oklch(0.88_0.015_75)]">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-[oklch(0.20_0.03_65)] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.50_0.03_65)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STRUCTURE (РУБРИКИ САЙТА)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="structure" className="py-24 md:py-32 bg-[oklch(0.93_0.015_85)]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Структура платформы
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Разделы и<br />
              <em>рубрики сайта</em>
            </h2>
            <Divider />
            <p className="mt-6 text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Платформа состоит из нескольких ключевых разделов, каждый из которых 
              выполняет свою функцию в просвещении и вовлечении аудитории.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                icon: "",
                title: "Статьи",
                desc: "Научно-популярные материалы о биологии, экологии и поведении манула.",
                link: "/articles",
              },
              {
                icon: "",
                title: "Проблемы",
                desc: "Ключевые проблемы вида с возможностью предлагать собственные решения.",
                link: "/problems",
              },
              {
                icon: "",
                title: "Как помочь?",
                desc: "Информация о том, как студенты могут реально помочь, и ссылки на проверенные зоозащитные организации.",
                link: "/help",
              },
              {
                icon: "",
                title: "Ареал",
                desc: "Интерактивная карта распространения манула и информация о региональных популяциях.",
                link: "#interactive-map",
              },
              {
                icon: "",
                title: "Аналитика",
                desc: "Данные мониторинга, прогнозы экологов и визуализация динамики популяции.",
                link: "#analytics",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group ${
                  i >= 3 ? (i === 3 ? 'col-span-2' : 'col-start-3') : ''
                }`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-lg mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[oklch(0.38_0.11_145)] hover:text-[oklch(0.28_0.11_145)] transition-colors group/link"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Перейти
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover/link:translate-x-1 transition-transform">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CALENDAR PLAN (КАЛЕНДАРНЫЙ ПЛАН)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="calendar" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Календарный план
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Этапы реализации<br />
                <em>проекта 2026–2027</em>
              </h2>
              <Divider />
              <p className="mt-6 text-[oklch(0.45_0.03_65)] text-lg leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Проект реализуется в течение двух лет. Ниже представлены ключевые этапы 
                и сроки их выполнения.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[oklch(0.88_0.015_75)]" />

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    period: "Январь – Март 2026",
                    title: "Подготовительный этап",
                    items: [
                      "Разработка концепции платформы",
                      "Сбор и анализ научных материалов",
                      "Формирование команды проекта",
                    ],
                  },
                  {
                    period: "Апрель – Июнь 2026",
                    title: "Разработка платформы",
                    items: [
                      "Создание дизайна и верстка",
                      "Наполнение контентом",
                      "Интеграция интерактивных элементов",
                    ],
                  },
                  {
                    period: "Июль – Сентябрь 2026",
                    title: "Запуск и продвижение",
                    items: [
                      "Публичный запуск платформы",
                      "Информационная кампания в соцсетях",
                      "Привлечение партнёров и волонтёров",
                    ],
                  },
                  {
                    period: "Октябрь – Декабрь 2026",
                    title: "Расширение функционала",
                    items: [
                      "Добавление новых материалов",
                      "Внедрение пользовательских предложений",
                      "Интеграция с зоозащитными организациями",
                    ],
                  },
                  {
                    period: "2027 год",
                    title: "Масштабирование и развитие",
                    items: [
                      "Расширение географии охвата",
                      "Новые партнёрства и инициативы",
                      "Мониторинг эффективности и отчётность",
                    ],
                  },
                ].map((stage, i) => (
                  <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[oklch(0.38_0.11_145)] rounded-full -translate-x-1/2 mt-6 ring-4 ring-white" />
                    
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                      <div className="inline-block px-3 py-1 rounded-full bg-[oklch(0.93_0.04_145)] text-[oklch(0.38_0.11_145)] text-xs font-semibold mb-3"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {stage.period}
                      </div>
                      <h3 className="text-xl font-bold text-[oklch(0.20_0.03_65)] mb-3"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        {stage.title}
                      </h3>
                      <ul className={`space-y-2 text-sm text-[oklch(0.50_0.03_65)] ${i % 2 === 0 ? 'md:ml-auto md:max-w-xs' : 'max-w-xs'}`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {stage.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2">
                            {i % 2 !== 0 && (
                              <span className="w-1.5 h-1.5 bg-[oklch(0.38_0.11_145)] rounded-full flex-shrink-0" />
                            )}
                            {item}
                            {i % 2 === 0 && (
                              <span className="w-1.5 h-1.5 bg-[oklch(0.38_0.11_145)] rounded-full flex-shrink-0 md:order-first" />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ABOUT MANUL
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div ref={aboutRef} className="fade-up">
              <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                О виде
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Манул — скрытный<br />
                <em>обитатель степей</em>
              </h2>
              <Divider />
              <div className="mt-6 space-y-4 text-[oklch(0.40_0.03_65)] leading-relaxed text-base"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Манул (<em>Otocolobus manul</em>) — редкий вид дикой кошки с уникальной густой шубкой. 
                  Большинство особей обитает в степных и полупустынных районах Забайкальского края. 
                  Это один из наиболее древних видов кошачьих на планете.
                </p>
                <p>
                  Манул является <strong className="text-[oklch(0.20_0.03_65)]">ключевым индикатором состояния степных и горностепных экосистем</strong>. 
                  Его исчезновение означает не просто потерю одного вида — это сигнал о том, 
                  что деградация местообитаний достигла критического уровня и несколько звеньев 
                  экосистемы уже безвозвратно разрушены.
                </p>
                <p>
                  Манул зависит от пищух, грызунов и нор сурков как укрытий. Степь теряет 
                  способность поддерживать природный баланс — и манул первым сигнализирует об этом.
                </p>
              </div>

              {/* Characteristics */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Длина тела", value: "45–65 см" },
                  { label: "Масса", value: "2–5 кг" },
                  { label: "Длина шерсти", value: "до 7 см" },
                ].map((item) => (
                  <div key={item.label} className="bg-[oklch(0.94_0.015_85)] rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-[oklch(0.38_0.11_145)]"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.value}
                    </div>
                    <div className="text-xs text-[oklch(0.50_0.03_65)] mt-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/hero-manul.webp"
                  alt="Манул в естественной среде обитания"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white/90 text-sm italic"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    «Самая пушистая кошка в мире — и одна из самых уязвимых»
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[oklch(0.38_0.11_145)] text-white rounded-2xl px-4 py-3 shadow-lg">
                <div className="text-xs font-medium opacity-80 uppercase tracking-wide"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Маскот
                </div>
                <div className="text-sm font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Финансового<br />университета
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MASCOT SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[oklch(0.38_0.11_145)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Мотивация
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Символ сибирских степей исчезает,<br />
              <em>и мы не можем стоять в стороне</em>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Манул — официальный маскот Финансового университета. Он воплощает стойкость, 
              хитрость и адаптивность — как истинный финансист в мире рисков. 
              Для студентов это не просто проект, а <strong className="text-white">священный долг</strong>: 
              защитить популяцию нашего маскота и привлечь внимание к его судьбе.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/15 rounded-full border border-white/25">
              <span className="text-white/90 text-sm font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Манул — часть нашей идентичности. Его спасение — наша миссия.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          POPULAR SCIENCE
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="science" className="py-24 md:py-32 bg-[oklch(0.95_0.015_85)]">
        <div className="container">
          <div className="fade-up text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Научно-популярные материалы
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Познавательные статьи<br />
              <em>о мануле</em>
            </h2>
            <Divider />
            <p className="mt-6 text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Узнайте больше о биологии, поведении и экологии манула. 
              Материалы подготовлены на основе научных исследований и 
              актуальных данных о популяции.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured article */}
            <div className="fade-up lg:col-span-2" style={{ transitionDelay: '0ms' }}>
              <div className="bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 group">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img
                      src="/assets/images/manul-portrait-serious.webp"
                      alt="Манул в естественной среде"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex px-3 py-1 rounded-full bg-[oklch(0.93_0.04_145)] text-[oklch(0.38_0.11_145)] text-xs font-semibold mb-4 w-fit"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                       Выбор редакции
                    </div>
                    <h3 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4 leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      Биология и физиология: почему манул выглядит именно так
                    </h3>
                    <p className="text-[oklch(0.45_0.03_65)] leading-relaxed mb-6"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Густая шерсть, приземистое тело, плоская морда и круглые глаза — 
                      каждое приспособление манула имеет эволюционное объяснение. 
                      Разбираемся, как форма тела помогает кошке выживать в суровых 
                      степях Забайкалья при температурах от −40 °C до +40 °C.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.38_0.11_145)] hover:text-[oklch(0.28_0.11_145)] transition-colors group/link"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Читать статью
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover/link:translate-x-1 transition-transform">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Article cards */}
            {[
              {
                icon: "",
                tag: "Экология",
                title: "Ареал и миграции манула",
                desc: "География распространения вида от Ирана до Монголии. Почему манул не мигрирует и как фрагментация ландшафтов влияет на генетическое разнообразие популяций.",
                readTime: "8 мин",
                delay: 80,
              },
              {
                icon: "",
                tag: "Питание",
                title: "Рацион и пищевое поведение",
                desc: "Манул специализируется на пищухах и грызунах. Как охотничья стратегия влияет на плотность популяции и какие последствия имеет сокращение кормовой базы.",
                readTime: "6 мин",
                delay: 160,
              },
              {
                icon: "",
                tag: "Размножение",
                title: "Поведение и размножение",
                desc: "Сезон размножения, структура семейных групп, выживаемость котят. Почему 68% молодых котят не доживают до первого года и что на это влияет.",
                readTime: "7 мин",
                delay: 240,
              },
              {
                icon: "",
                tag: "Генетика",
                title: "Генетическое разнообразие",
                desc: "Изоляция популяций из-за фрагментации ареала ведёт к снижению генетического разнообразия. Как генетический мониторинг помогает планировать охранные меры.",
                readTime: "9 мин",
                delay: 320,
              },
              {
                icon: "",
                tag: "Мониторинг",
                title: "Методы учёта популяции",
                desc: "Фотоловушки, GPS-трекинг, анализ нор — современные технологии учёта манула. Как данные мониторинга используются для создания природоохранных стратегий.",
                readTime: "5 мин",
                delay: 400,
              },
              {
                icon: "",
                tag: "Охрана",
                title: "Красная книга и охранный статус",
                desc: "Статус вида в Красной книге РФ и IUCN. Какие меры охраны уже приняты и что нужно сделать для обеспечения долгосрочного выживания манула в дикой природе.",
                readTime: "10 мин",
                delay: 480,
              },
            ].map((article, i) => (
              <ArticleCard
                key={i}
                icon={article.icon}
                tag={article.tag}
                title={article.title}
                desc={article.desc}
                readTime={article.readTime}
                delay={article.delay}
              />
            ))}
          </div>

          {/* CTA Link */}
          <div className="text-center mt-10">
            <a
              href="/articles"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Все статьи о мануле
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HABITAT MAP
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="habitat" className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div ref={habitatRef} className="fade-up order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/assets/images/manul-family.webp"
                  alt="Манул с котятами в естественной среде"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Ареал обитания
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                География<br />
                <em>проблемы</em>
              </h2>
              <Divider />
              <div className="mt-6 space-y-4 text-[oklch(0.40_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Степные и полупустынные территории <strong className="text-[oklch(0.20_0.03_65)]">Забайкальского края</strong> — 
                  основной ареал обитания манула в России. Эти регионы характеризуются 
                  высокой антропогенной нагрузкой, что делает популяцию особенно уязвимой.
                </p>
                <p>
                  Глобально манул распространён от Ирана через Центральную Азию до Монголии и 
                  Китая. Россия является одним из ключевых регионов для сохранения вида, 
                  обеспечивая 8–16% глобальной популяции.
                </p>
                <p>
                  Фрагментация местообитаний приводит к изоляции локальных популяций и 
                  снижает их способность к восстановлению после неблагоприятных событий.
                </p>
              </div>

              {/* Region highlights */}
              <div className="mt-8 space-y-3">
                {[
                  { region: "Забайкальский край", note: "Основной ареал в России" },
                  { region: "Бурятия", note: "Значимые популяции" },
                  { region: "Тыва и Алтай", note: "Периферийные популяции" },
                ].map((item) => (
                  <div key={item.region} className="flex items-center gap-3 py-3 border-b border-[oklch(0.88_0.015_75)] last:border-0">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.38_0.11_145)] flex-shrink-0" />
                    <span className="font-semibold text-[oklch(0.20_0.03_65)] text-sm">{item.region}</span>
                    <span className="text-[oklch(0.55_0.03_65)] text-sm ml-auto">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INTERACTIVE MAP
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="interactive-map" className="py-24 md:py-32 bg-[oklch(0.93_0.015_85)]">
        <div className="container">
          <div ref={mapRef} className="fade-up text-center mb-12">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Интерактивная карта
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Ареал обитания<br />
              <em>манула</em>
            </h2>
            <Divider />
            <p className="mt-6 text-[oklch(0.45_0.03_65)] text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Глобальный ареал манула простирается от Ирана через Центральную Азию 
              до Монголии и Китая. Нажмите на точку на карте, чтобы узнать об 
              особенностях обитания вида в каждом регионе.
            </p>
          </div>

          <InteractiveMap
            selectedPoint={selectedPoint}
            onPointSelect={setSelectedPoint}
          />

          {/* Stats summary */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "12+", label: "стран ареала" },
              { value: "~14 000", label: "особей в мире" },
              { value: "8–16%", label: "популяция в России" },
              { value: "13%", label: "ареала под охраной" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-4 text-center border border-[oklch(0.88_0.015_75)]">
                <div className="text-2xl font-bold text-[oklch(0.38_0.11_145)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-[oklch(0.55_0.03_65)] mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          KEY PROBLEMS & USER SOLUTIONS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="problems" className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ключевые проблемы
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Проблемы вида и<br />
              <em>твои решения</em>
            </h2>
            <p className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Манул сталкивается с серьёзными угрозами. Мы собрали ключевые проблемы 
              и предлагаем тебе поделиться своими идеями по их решению.
            </p>
          </div>

          {/* Key problems grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "",
                problem: "Хозяйственное освоение степей",
                impact: "68% ареала разрушено",
                desc: "Распашка земель, рост поголовья скота и промышленное освоение уничтожают естественную среду обитания манула.",
              },
              {
                icon: "",
                problem: "Фрагментация местообитаний",
                impact: "Изоляция популяций",
                desc: "Строительство дорог и объектов инфраструктуры разделяет популяции, снижая их генетическое разнообразие.",
              },
              {
                icon: "",
                problem: "Высокая смертность молодняка",
                impact: "68% котят не выживают",
                desc: "Большинство молодых особей погибает до расселения из-за хищников, болезней и недостатка кормовой базы.",
              },
              {
                icon: "",
                problem: "Браконьерство",
                impact: "Нелегальная охота",
                desc: "Охота ради меха и костей для традиционной медицины продолжает угрожать популяции в отдельных регионах.",
              },
              {
                icon: "",
                problem: "Изменение климата",
                impact: "Деградация экосистем",
                desc: "Изменение климатических условий влияет на численность грызунов — основной кормовой базы манула.",
              },
              {
                icon: "",
                problem: "Низкая осведомлённость",
                impact: "Отсутствие поддержки",
                desc: "Общественность недостаточно знает о проблемах вида, что снижает поддержку природоохранных инициатив.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl p-6 hover:shadow-md transition-all duration-200">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[oklch(0.20_0.03_65)] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.problem}
                </h3>
                <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-wide mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {item.impact}
                </div>
                <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* User solutions form */}
          <div className="bg-gradient-to-br from-[oklch(0.93_0.04_145)] to-[oklch(0.90_0.04_145)] rounded-3xl p-8 md:p-12 border border-[oklch(0.85_0.04_145)]">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Предложи своё решение
              </h3>
              <p className="text-[oklch(0.45_0.03_65)] text-base max-w-xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Есть идея, как помочь манулу? Заполни форму ниже — мы рассмотрим твоё предложение 
                и опубликуем лучшие решения на сайте.
              </p>
            </div>

            <form className="max-w-2xl mx-auto space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.30_0.03_65)] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Твоё имя *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Петров"
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.85_0.015_75)] bg-white text-[oklch(0.20_0.03_65)] placeholder-[oklch(0.60_0.03_65)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.38_0.11_145)] focus:border-transparent transition-all"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.30_0.03_65)] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.85_0.015_75)] bg-white text-[oklch(0.20_0.03_65)] placeholder-[oklch(0.60_0.03_65)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.38_0.11_145)] focus:border-transparent transition-all"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[oklch(0.30_0.03_65)] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Какую проблему решаешь? *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[oklch(0.85_0.015_75)] bg-white text-[oklch(0.20_0.03_65)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.38_0.11_145)] focus:border-transparent transition-all"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <option value="">Выберите проблему</option>
                  <option value="habitat">Хозяйственное освоение степей</option>
                  <option value="fragmentation">Фрагментация местообитаний</option>
                  <option value="mortality">Высокая смертность молодняка</option>
                  <option value="poaching">Браконьерство</option>
                  <option value="climate">Изменение климата</option>
                  <option value="awareness">Низкая осведомлённость</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[oklch(0.30_0.03_65)] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Название твоего решения *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Например: Мобильное приложение для мониторинга манула"
                  className="w-full px-4 py-3 rounded-xl border border-[oklch(0.85_0.015_75)] bg-white text-[oklch(0.20_0.03_65)] placeholder-[oklch(0.60_0.03_65)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.38_0.11_145)] focus:border-transparent transition-all"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[oklch(0.30_0.03_65)] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Описание решения *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Опиши, как работает твоё решение, какие ресурсы нужны и какого эффекта можно достичь..."
                  className="w-full px-4 py-3 rounded-xl border border-[oklch(0.85_0.015_75)] bg-white text-[oklch(0.20_0.03_65)] placeholder-[oklch(0.60_0.03_65)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.38_0.11_145)] focus:border-transparent transition-all resize-none"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold text-sm hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-lg"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Отправить решение
                </button>
              </div>

              {/* 152-ФЗ Согласие */}
              <div className="max-w-2xl mx-auto">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-5 mt-0.5 rounded border-[oklch(0.85_0.015_75)] text-[oklch(0.38_0.11_145)] focus:ring-[oklch(0.38_0.11_145)] focus:ring-2 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs text-[oklch(0.50_0.03_65)] leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Я даю согласие на обработку моих персональных данных (имя, email, текст обращения) в соответствии с{' '}
                    <a href="/personal-data-policy" className="text-[oklch(0.38_0.11_145)] underline hover:text-[oklch(0.28_0.11_145)]" target="_blank" rel="noopener noreferrer">
                      Политикой обработки персональных данных
                    </a>{' '}
                    в целях обработки моего обращения и связи со мной.
                  </span>
                </label>
              </div>
            </form>
          </div>

          {/* CTA Link */}
          <div className="text-center mt-10">
            <a
              href="/problems"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Подробнее о проблемах и решениях
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THREATS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="threats" className="py-24 md:py-32 bg-[oklch(0.18_0.04_65)]">
        <div className="container">
          <div ref={threatsRef} className="fade-up text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.72_0.12_65)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Угрозы популяции
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Почему манул<br />
              <em className="text-[oklch(0.72_0.12_65)]">под угрозой</em>
            </h2>
            <p className="text-[oklch(0.70_0.02_75)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              В России насчитывается от 4 500 до 9 500 особей — это 8–16% глобальной популяции. 
              Любая дополнительная смертность заметно бьёт по численности вида.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ThreatCard
              icon=""
              title="Хозяйственное освоение"
              desc="Распашка земель и рост поголовья скота разрушают естественную среду обитания манула."
              delay={0}
            />
            <ThreatCard
              icon=""
              title="Развитие инфраструктуры"
              desc="Строительство дорог и объектов фрагментирует местообитания, изолируя локальные популяции."
              delay={80}
            />
            <ThreatCard
              icon=""
              title="Добыча ресурсов"
              desc="Разработка полезных ископаемых нарушает степные экосистемы и уничтожает кормовую базу."
              delay={160}
            />
            <ThreatCard
              icon=""
              title="Низкая осведомлённость"
              desc="Общественность недостаточно знает о проблемах вида. Молодёжь не включена в природоохранную повестку."
              delay={240}
            />
          </div>

          {/* Critical stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Фрагментация ареала",
                text: "Степные и полупустынные территории Забайкальского края — основной ареал обитания манула в России — характеризуются высокой антропогенной нагрузкой. Фрагментация местообитаний приводит к изоляции локальных популяций и снижает их способность к восстановлению.",
              },
              {
                title: "Критическая уязвимость молодняка",
                text: "До 68% молодых животных не доживают до расселения. Это означает, что популяция не успевает восполнять потери от смертности взрослых особей, которая достигает 50%. Вид находится на грани устойчивого воспроизводства.",
              },
              {
                title: "Недостаточная охрана",
                text: "Под охраной находится лишь около 13% ареала вида. Это критически мало для обеспечения долгосрочного выживания популяции. Проекты по сохранению манула уже получают президентскую поддержку, но этого недостаточно.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-2xl p-6">
                <h3 className="text-[oklch(0.72_0.12_65)] font-bold text-sm uppercase tracking-wide mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-[oklch(0.70_0.02_75)] text-sm leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ANALYTICS SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="analytics" className="py-24 md:py-32 bg-[oklch(0.18_0.04_65)]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.72_0.12_65)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Аналитический раздел
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Данные и прогнозы<br />
              <em className="text-[oklch(0.72_0.12_65)]">от экологов</em>
            </h2>
            <p className="text-[oklch(0.70_0.02_75)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Визуализация данных о популяции манула: динамика численности, 
              прогнозы специалистов и ключевые показатели выживаемости.
            </p>
          </div>

          {/* Main stats cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                value: "14 000",
                suffix: "",
                label: "особей в мире",
                trend: "-12%",
                trendLabel: "за последние 10 лет",
                color: "145",
              },
              {
                value: "9 500",
                suffix: "",
                label: "особей в России (верхняя оценка)",
                trend: "-8%",
                trendLabel: "тенденция к снижению",
                color: "145",
              },
              {
                value: "11–12",
                suffix: " лет",
                label: "средняя продолжительность жизни",
                trend: "",
                trendLabel: "в дикой природе",
                color: "75",
              },
              {
                value: "68",
                suffix: "%",
                label: "смертность молодняка до года",
                trend: "критично",
                trendLabel: "требуется вмешательство",
                color: "25",
              },
            ].map((stat, i) => (
              <div key={i} className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}{stat.suffix && <span className="text-[oklch(0.70_0.02_75)] text-xl ml-1">{stat.suffix}</span>}
                  </div>
                  {stat.trend && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      stat.trend === 'критично' 
                        ? 'bg-[oklch(0.60_0.11_25)] text-white' 
                        : 'bg-[oklch(0.60_0.11_145)] text-white'
                    }`}>
                      {stat.trend}
                    </span>
                  )}
                </div>
                <div className="text-sm text-[oklch(0.70_0.02_75)] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {stat.label}
                </div>
                <div className="text-xs text-[oklch(0.55_0.02_75)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {stat.trendLabel}
                </div>
              </div>
            ))}
          </div>

          {/* Population chart */}
          <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Динамика популяции манула в России
            </h3>
            <p className="text-sm text-[oklch(0.60_0.02_75)] mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Данные мониторинга 2015–2025 гг.
            </p>

            {/* Bar chart */}
            <div className="relative h-64 flex items-end justify-between gap-2 md:gap-4 px-4">
              {[
                { year: "2015", value: 100, label: "12 500" },
                { year: "2017", value: 92, label: "11 500" },
                { year: "2019", value: 84, label: "10 500" },
                { year: "2021", value: 76, label: "9 500" },
                { year: "2023", value: 72, label: "9 000" },
                { year: "2025", value: 68, label: "8 500" },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3">
                  <div className="text-xs text-[oklch(0.60_0.02_75)] font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {bar.label}
                  </div>
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-[oklch(0.38_0.11_145)] to-[oklch(0.50_0.11_145)] transition-all duration-500 hover:from-[oklch(0.42_0.11_145)] hover:to-[oklch(0.55_0.11_145)]"
                    style={{ height: `${bar.value * 2}px` }}
                  />
                  <div className="text-xs text-[oklch(0.60_0.02_75)] font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {bar.year}
                  </div>
                </div>
              ))}
            </div>

            {/* X-axis line */}
            <div className="mt-2 h-px bg-[oklch(0.40_0.04_65)]" />
          </div>

          {/* Two columns: Decline factors & Predictions */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Decline factors */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Факторы сокращения численности
              </h3>

              {/* Horizontal bar chart */}
              <div className="space-y-5">
                {[
                  { factor: "Хозяйственное освоение", value: 42, color: "oklch(0.55_0.11_145)" },
                  { factor: "Фрагментация ареала", value: 28, color: "oklch(0.50_0.11_180)" },
                  { factor: "Браконьерство", value: 15, color: "oklch(0.55_0.11_25)" },
                  { factor: "Изменение климата", value: 10, color: "oklch(0.55_0.11_75)" },
                  { factor: "Другие факторы", value: 5, color: "oklch(0.45_0.04_65)" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[oklch(0.70_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {item.factor}
                      </span>
                      <span className="text-white font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {item.value}%
                      </span>
                    </div>
                    <div className="h-3 bg-[oklch(0.30_0.04_65)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ 
                          width: `${item.value}%`,
                          background: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecologist predictions */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Прогнозы экологов на 2026–2035 гг.
              </h3>

              <div className="space-y-4">
                {[
                  {
                    scenario: "Оптимистичный сценарий",
                    desc: "При усилении охраны и программ разведения",
                    outcome: "+15% к популяции",
                    color: "oklch(0.38_0.11_145)",
                  },
                  {
                    scenario: "Базовый сценарий",
                    desc: "При сохранении текущих мер охраны",
                    outcome: "-5% к популяции",
                    color: "oklch(0.55_0.11_75)",
                  },
                  {
                    scenario: "Пессимистичный сценарий",
                    desc: "При ухудшении условий и сокращении финансирования",
                    outcome: "-30% к популяции",
                    color: "oklch(0.55_0.11_25)",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-[oklch(0.26_0.04_65)] rounded-xl p-5 border border-[oklch(0.35_0.04_65)]">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                        style={{ background: item.color }}
                      />
                      <div>
                        <h4 className="text-white font-semibold mb-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item.scenario}
                        </h4>
                        <p className="text-sm text-[oklch(0.60_0.02_75)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="ml-6 text-base font-bold"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        color: item.color,
                      }}>
                      {item.outcome}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-6 p-4 bg-[oklch(0.38_0.11_145)]/20 rounded-xl border border-[oklch(0.38_0.11_145)]/30">
                <p className="text-sm text-[oklch(0.80_0.02_75)] italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  «Без принятия экстренных мер к 2035 году популяция манула в России 
                  может сократиться на 30–40%. Необходимы комплексные охранные программы 
                  и восстановление местообитаний.»
                </p>
                <p className="text-xs text-[oklch(0.60_0.02_75)] mt-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  — WWF России, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Age distribution chart */}
          <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Возрастная структура популяции
            </h3>
            <p className="text-sm text-[oklch(0.60_0.02_75)] mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Распределение особей по возрастным группам (данные 2025 г.)
            </p>

            {/* Donut chart visualization */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Donut */}
              <div className="relative w-56 h-56 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Котята (0-1 год) - 32% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="oklch(0.55_0.11_145)"
                    strokeWidth="20"
                    strokeDasharray="100.5 251.3"
                    strokeDashoffset="0"
                  />
                  {/* Молодые (1-3 года) - 28% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="oklch(0.50_0.11_180)"
                    strokeWidth="20"
                    strokeDasharray="88 251.3"
                    strokeDashoffset="-100.5"
                  />
                  {/* Взрослые (3-8 лет) - 30% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="oklch(0.55_0.11_75)"
                    strokeWidth="20"
                    strokeDasharray="94.2 251.3"
                    strokeDashoffset="-188.5"
                  />
                  {/* Пожилые (8+ лет) - 10% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="oklch(0.45_0.04_65)"
                    strokeWidth="20"
                    strokeDasharray="31.4 251.3"
                    strokeDashoffset="-282.7"
                  />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      14K
                    </div>
                    <div className="text-xs text-[oklch(0.60_0.02_75)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      особей
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex-1 grid sm:grid-cols-2 gap-4 w-full">
                {[
                  { label: "Котята (0–1 год)", value: "32%", desc: "Высокая смертность", color: "oklch(0.55_0.11_145)" },
                  { label: "Молодые (1–3 года)", value: "28%", desc: "Период расселения", color: "oklch(0.50_0.11_180)" },
                  { label: "Взрослые (3–8 лет)", value: "30%", desc: "Репродуктивный возраст", color: "oklch(0.55_0.11_75)" },
                  { label: "Пожилые (8+ лет)", value: "10%", desc: "Естественное старение", color: "oklch(0.45_0.04_65)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[oklch(0.26_0.04_65)] rounded-xl">
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5"
                      style={{ background: item.color }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold text-sm"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {item.label}
                        </span>
                        <span className="text-[oklch(0.70_0.02_75)] font-bold text-sm"
                          style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item.value}
                        </span>
                      </div>
                      <p className="text-xs text-[oklch(0.55_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-[oklch(0.70_0.02_75)] text-base mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Данные основаны на отчётах WWF России, Забайкальского нацпарка 
              и научных публикациях 2020–2025 гг.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/threats"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Полная аналитика
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/help"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Как помочь
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOW TO HELP
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="help" className="py-24 md:py-32 bg-[oklch(0.95_0.015_85)]">
        <div className="container">
          <div ref={helpRef} className="fade-up text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Участие
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Как ты можешь<br />
              <em>помочь манулу</em>
            </h2>
            <p className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              «Степной хранитель» — это мост, который соединяет студентов с реальной 
              природоохранной повесткой. Твой вклад может изменить ситуацию.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <HelpCard
              icon=""
              title="Участвуй в мероприятиях"
              desc="Посещай лекции с экологами, дискуссионные сессии и интерактивные мероприятия проекта. Активные участники получают брендированную продукцию проекта."
              cta="Смотреть мероприятия"
              href="#events"
              delay={0}
            />
            <HelpCard
              icon=""
              title="Предложи идею"
              desc="Разработай и представь свой проект по сохранению манула. Лучшие студенческие идеи публикуются на нашем сайте и становятся частью реальных инициатив."
              cta="Поделиться идеей"
              href="mailto:stepnoy.hranitel@fa.ru"
              delay={80}
            />
            <HelpCard
              icon=""
              title="Пожертвование"
              desc="Поддержи проверенные зоозащитные организации, которые ведут реальную работу по сохранению манула и его среды обитания в Забайкалье."
              cta="Поддержать организации"
              href="#organizations"
              delay={160}
            />
            <HelpCard
              icon=""
              title="Распространи информацию"
              desc="Расскажи друзьям и однокурсникам о мануле и проблемах его сохранения. Повышение осведомлённости — один из ключевых инструментов защиты вида."
              cta="Поделиться проектом"
              href="#"
              disabled={true}
              delay={240}
            />
            <HelpCard
              icon=""
              title="Волонтёрство"
              desc="Участвуй в полевых экспедициях, мониторинге популяций и природоохранных акциях совместно с экологами и специалистами по охране дикой природы."
              cta="Узнать о волонтёрстве"
              href="https://manul.ru"
              disabled={true}
              delay={320}
            />
            <HelpCard
              icon=""
              title="Научная работа"
              desc="Пиши научные статьи, курсовые и дипломные работы по теме сохранения манула. Финансовые и экономические компетенции нужны природоохранным организациям."
              cta="Темы для исследований"
              href="#"
              disabled={true}
              delay={400}
            />
          </div>

          {/* CTA Link */}
          <div className="text-center mt-10">
            <a
              href="/help"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Все способы помочь манулу
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ORGANIZATIONS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="organizations" className="py-24 md:py-32">
        <div className="container">
          <div ref={orgsRef} className="fade-up text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Партнёры и организации
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Проверенные организации<br />
              <em>по защите манула</em>
            </h2>
            <p className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Переходи на сайты организаций, которые ведут реальную работу по сохранению 
              манула и степных экосистем России.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <OrgCard
              name="Фонд «Компас»"
              desc="Российский экологический фонд, который с 2023 года ведет программу по изучению и сохранению манула. Фонд финансирует учет численности, мониторинг и восстановление мест обитания."
              url="https://eco-compass.ru"
              delay={0}
            />
            <OrgCard
              name="Русское географическое общество (РГО)"
              desc="С 2013 года поддерживает проекты по сохранению манула и сотрудничает с заповедниками, где идут мониторинг и охранные мероприятия для вида."
              url="https://rgo.ru"
              delay={80}
            />
            <OrgCard
              name="Благотворительный фонд «Красивые дети в красивом мире»"
              desc="Поддержал проект Даурского заповедника «Манулы – знать и сопереживать, чтобы сохранить», помогая с фотоловушками и просветительской работой вокруг охраны манулов."
              url="https://childrensworld.org"
              delay={160}
            />
            <OrgCard
              name="Межрегиональная ассоциация «Ирбис»"
              desc="Российская природоохранная ассоциация, которая начала сотрудничество с российским подразделением Mars для охраны, изучения и увеличения популяции манула в России."
              url="https://altayirbis.ru"
              delay={240}
            />
            <OrgCard
              name="Даурский заповедник"
              desc="Один из ключевых природных участков обитания манула. Реализует проекты по наблюдению за видом, в том числе совместно с благотворительными фондами и РГО."
              url="https://daurzapoved.com"
              delay={320}
            />
            <OrgCard
              name="Сибирский экологический центр"
              desc="Организация, которая ведет программу по изучению и сохранению манула и участвует в профильных научно-природоохранных обсуждениях."
              url="https://eco-center.ru"
              delay={400}
            />
          </div>

          {/* CTA Link */}
          <div className="text-center mt-10">
            <a
              href="/help"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Все организации и способы помощи
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          EVENTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="events" className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: text */}
            <div ref={eventsRef} className="fade-up">
              <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Мероприятия 2026–2027
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Живое участие<br />
                <em>в проекте</em>
              </h2>
              <Divider />
              <p className="mt-6 text-[oklch(0.40_0.03_65)] leading-relaxed text-base mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Цифровая платформа дополняется очными мероприятиями: лекциями с экологами, 
                дискуссионными сессиями и интерактивными встречами. Активные участники 
                получают брендированную продукцию проекта и становятся соавторами решения 
                глобальной проблемы.
              </p>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/manul-portrait-serious.webp"
                  alt="Манул — серьёзный взгляд"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            {/* Right: events */}
            <div className="space-y-4">
              <EventCard
                date="сен"
                title="Ознакомительная лекция о проекте"
                desc="Презентация «Степного хранителя» для студентов Финансового университета. Знакомство с проектом, проблемами манула и возможностями участия."
                delay={0}
              />
              <EventCard
                date="окт"
                title="Интерактивное мероприятие с экологом"
                desc="Встреча со специалистом по охране дикой природы. Подробный рассказ об особенностях манула, его поведении и среде обитания."
                delay={80}
              />
              <EventCard
                date="ноя"
                title="Лекция об угрозах и решениях"
                desc="Разбор основных угроз для популяции манула и обсуждение возможных решений. Как студенты могут реально помочь виду."
                delay={160}
              />
              <EventCard
                date="дек"
                title="Студенческий питчинг идей"
                desc="Студенты представляют свои проекты и идеи по сохранению манула. Лучшие работы публикуются на сайте и становятся частью реальных инициатив."
                delay={240}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STUDENT IDEAS (hidden)
      ═══════════════════════════════════════════════════════════════════ */}
      {/* <section id="ideas" className="py-24 md:py-32 bg-[oklch(0.95_0.015_85)]">
        <div className="container">
          <div ref={ideasRef} className="fade-up text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Студенческие идеи
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Твоя идея может<br />
              <em>изменить ситуацию</em>
            </h2>
            <p className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed mb-10"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Лучшие студенческие предложения по сохранению манула публикуются здесь 
              и становятся частью реальных природоохранных инициатив.
            </p>
          </div>

          {/* Placeholder cards for future student ideas }
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Экономическая модель охраны ареала",
                author: "Студенты МЭО",
                preview: "Разработка финансовой модели для привлечения частных инвестиций в создание охраняемых территорий в Забайкальском крае.",
                tag: "Финансы & Экология",
              },
              {
                title: "Цифровой мониторинг популяции",
                author: "Студенты МЭО",
                preview: "Предложение по созданию системы автоматического мониторинга численности манула с использованием фотоловушек и ИИ-анализа.",
                tag: "Технологии",
              },
              {
                title: "Эко-туризм как инструмент охраны",
                author: "Студенты МЭО",
                preview: "Концепция устойчивого экологического туризма в Забайкалье, который обеспечивает финансирование природоохранных программ.",
                tag: "Устойчивое развитие",
              },
            ].map((idea, i) => (
              <div key={i} className="bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl p-6 hover:shadow-md transition-all duration-200">
                <div className="inline-flex px-3 py-1 rounded-full bg-[oklch(0.93_0.04_145)] text-[oklch(0.38_0.11_145)] text-xs font-semibold mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {idea.tag}
                </div>
                <h3 className="font-bold text-[oklch(0.20_0.03_65)] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {idea.title}
                </h3>
                <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {idea.preview}
                </p>
                <p className="text-xs text-[oklch(0.38_0.11_145)] font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  — {idea.author}
                </p>
              </div>
            ))}
          </div>

          {/* CTA }
          <div className="text-center">
            <div className="inline-block bg-white border-2 border-[oklch(0.38_0.11_145)] rounded-2xl p-8 max-w-lg">
              <h3 className="text-xl font-bold text-[oklch(0.20_0.03_65)] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Предложи свою идею
              </h3>
              <p className="text-sm text-[oklch(0.50_0.03_65)] mb-6 leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Участвуй в декабрьском питчинге или отправь идею напрямую команде проекта. 
                Лучшие предложения будут опубликованы на сайте.
              </p>
              <a
                href="mailto:stepnoy.hranitel@fa.ru"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold text-sm hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Написать команде
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* ═══════════════════════════════════════════════════════════════════
          TEAM
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="team" className="py-24 md:py-32 bg-[oklch(0.95_0.015_85)]">
        <div className="container">
          <div ref={teamRef} className="fade-up text-center mb-16">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Команда проекта
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Студенты, которые<br />
              <em>защищают маскота</em>
            </h2>
            <p className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Команда студентов Факультета международных экономических отношений 
              Финансового университета при Правительстве Российской Федерации.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <TeamCard
              name="Тимофей Марачев"
              role="Руководитель проекта"
              bio="Студент 2 курса Финансового университета. Дизайнер с 4-летним стажем, маркетолог. Опыт курирования проектных и дизайнерских команд. Разработал проект фирменной продукции университета и оформления коридоров. Курировал команду дизайнеров, создававшую афиши и промо-материалы Факультета МЭО."
              delay={0}
              photo="/assets/images/timofey.webp"
            />
            <TeamCard
              name="Екатерина Романенко"
              role="Работа с партнёрами, организация мероприятий"
              bio="Студентка 2 курса, председатель научного студенческого общества Факультета МЭО (2 место в конкурсе СНО экономических вузов). Организатор 2 международных студенческих конференций с участием студентов из Китая, Индии, Малайзии. Куратор конкурса «ПРОСМЫСЛЫ» от «Дома народов России»."
              delay={80}
              photo="/assets/images/ekaterina.webp"
            />
            <TeamCard
              name="Виктория Хурхесова"
              role="Разработка и наполнение сайта"
              bio="Студентка 2 курса, участница научного студенческого общества. Медиа-амбассадор карьерной платформы Changellenge. Соорганизатор ивентов «Ночь студентов» от Альфа-Будущего. Автор более 10 научных работ и статей по экономике Китая и России."
              delay={160}
              photo="/assets/images/viktoriya.webp"
            />
            <TeamCard
              name="Егор Кальченко"
              role="Разработка и наполнение сайта"
              bio="Студент 1 курса, участник научного студенческого общества. Призёр конкурса «Цифровые решения и инновационные проекты в финансовой сфере» в рамках международной студенческой конференции. Активный участник просветительской деятельности Факультета МЭО и Финансового университета."
              delay={240}
              photo="/assets/images/egor.webp"
            />
            <TeamCard
              name="Алина Иванова"
              role="Разработка и наполнение сайта"
              bio="Студентка 1 курса, участница научного студенческого общества. Волонтёр мероприятий РАН, «Финатлон-форум», «The Asian and Pacific Centre for Transfer of Technology». Призёр олимпиады МГУ имени Ломоносова по философии (1 уровень), призёр ВСОШ."
              delay={320}
              photo="/assets/images/alina.webp"
            />
            <TeamCard
              name="Софья Хаммуде"
              role="Маркетинг и продвижение"
              bio="Студентка 2 курса. Специалист по маркетингу и продвижению Telegram-проектов. За год привлекла более 300 тысяч уникальных пользователей к проекту."
              delay={400}
              photo="/assets/images/sofya.webp"
            />
            <TeamCard
              name="Арсений Касторин"
              role="Организация очных мероприятий"
              bio="Студент 2 курса, председатель спортивного клуба Факультета МЭО. Организатор спортивных мероприятий на Факультете."
              delay={480}
              photo="/assets/images/arseniy.webp"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/hero-manul.webp"
            alt="Манул"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[oklch(0.18_0.04_65)]/85" />
        </div>
        <div className="relative container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Вместе мы можем<br />
              <em className="text-[oklch(0.85_0.12_75)]">изменить вектор</em>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              «Степной хранитель» — это не только слова. Это реальная инициатива, 
              которая превращает символ университета в живой, защищённый и ценностный образ. 
              Присоединяйся к сообществу студентов, которые уже делают разницу.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => document.querySelector("#help")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-lg"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Помочь манулу
              </button>
              <a
                href="mailto:stepnoy.hranitel@fa.ru"
                className="px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Написать команде
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
