const helpOptions = [
  {
    icon: "🤝",
    title: "Волонтёрство",
    description: "Участвуй в полевых экспедициях, мониторинге популяций и природоохранных акциях совместно с экологами и специалистами по охране дикой природы.",
    actions: [
      "Участие в экспедициях по учёту манула",
      "Помощь в установке фотоловушек",
      "Волонтёрство в заповедниках и нацпарках",
      "Участие в эко-просветительских акциях",
    ],
    link: "https://manul.ru",
    linkText: "Узнать о волонтёрстве",
  },
  {
    icon: "💡",
    title: "Предложи идею",
    description: "Разработай и представь свой проект по сохранению манула. Лучшие студенческие идеи публикуются на нашем сайте и становятся частью реальных инициатив.",
    actions: [
      "Разработка мобильных приложений для мониторинга",
      "Экономические модели охраны ареала",
      "Концепции эко-туризма",
      "Научные исследования и статьи",
    ],
    link: "mailto:stepnoy.hranitel@fa.ru",
    linkText: "Отправить идею",
  },
  {
    icon: "💚",
    title: "Пожертвование",
    description: "Поддержи проверенные зоозащитные организации, которые ведут реальную работу по сохранению манула и его среды обитания в Забайкалье.",
    actions: [
      "Разовые пожертвования",
      "Регулярная поддержка (рекуррентные платежи)",
      "Целевое финансирование проектов",
      "Корпоративное партнёрство",
    ],
    link: "#organizations",
    linkText: "Выбрать организацию",
  },
  {
    icon: "📣",
    title: "Распространи информацию",
    description: "Расскажи друзьям и однокурсникам о мануле и проблемах его сохранения. Повышение осведомлённости — один из ключевых инструментов защиты вида.",
    actions: [
      "Делитесь материалами в соцсетях",
      "Организуйте просветительские мероприятия",
      "Рассказывайте о мануле в учебных заведениях",
      "Пишите статьи и блоги",
    ],
    link: "/articles",
    linkText: "Найти материалы",
  },
  {
    icon: "🎓",
    title: "Участвуй в мероприятиях",
    description: "Посещай лекции с экологами, дискуссионные сессии и интерактивные мероприятия проекта. Активные участники получают брендированную продукцию проекта.",
    actions: [
      "Ознакомительные лекции о проекте",
      "Встречи с экологами и исследователями",
      "Студенческие питчинги идей",
      "Эко-фестивали и акции",
    ],
    link: "/#events",
    linkText: "Смотреть мероприятия",
  },
  {
    icon: "🔬",
    title: "Научная работа",
    description: "Пиши научные статьи, курсовые и дипломные работы по теме сохранения манула. Финансовые и экономические компетенции нужны природоохранным организациям.",
    actions: [
      "Курсовые и дипломные работы",
      "Научные публикации",
      "Участие в конференциях",
      "Гранты и исследовательские программы",
    ],
    link: "/articles",
    linkText: "Найти темы для исследований",
  },
];

const organizations = [
  {
    name: "Дальневосточный леопард",
    description: "Фонд, занимающийся сохранением редких видов диких кошек России, включая манула. Поддерживает полевые исследования и охрану ареалов.",
    url: "https://www.amur-leopard.org",
    focus: "Редкие виды кошек",
    donation: true,
  },
  {
    name: "WWF России",
    description: "Всемирный фонд дикой природы реализует программы по сохранению степных экосистем и редких видов животных Забайкалья.",
    url: "https://wwf.ru",
    focus: "Степные экосистемы",
    donation: true,
  },
  {
    name: "Манул.ру",
    description: "Специализированный ресурс о мануле: научные материалы, новости исследований, информация о состоянии популяции и охранных программах.",
    url: "https://manul.ru",
    focus: "Информация и просвещение",
    donation: false,
  },
  {
    name: "Забайкальский нацпарк",
    description: "Национальный парк, расположенный в ключевом ареале обитания манула. Ведёт мониторинг популяции и охрану природных территорий.",
    url: "https://zabaikalsky-park.ru",
    focus: "Охрана территорий",
    donation: false,
  },
  {
    name: "Российское общество сохранения природы",
    description: "Организация, объединяющая волонтёров и специалистов для реализации природоохранных проектов по всей России.",
    url: "https://www.rosop.ru",
    focus: "Волонтёрство",
    donation: true,
  },
  {
    name: "Союз охраны птиц России",
    description: "Партнёрская организация, работающая над сохранением степных экосистем, от которых зависит не только манул, но и многие другие виды.",
    url: "https://rbcu.ru",
    focus: "Степные экосистемы",
    donation: true,
  },
];

export default function Help() {
  return (
    <div className="min-h-screen bg-[oklch(0.95_0.015_85)]">
        {/* Header */}
        <header className="bg-white border-b border-[oklch(0.88_0.015_75)] sticky top-0 z-40">
          <div className="container py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/logo-manul-iziNX2T6GedxBB5dPoDr4s.webp"
                alt="Логотип" referrerPolicy="no-referrer" crossOrigin="anonymous"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="font-bold text-lg leading-none text-[oklch(0.20_0.03_65)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Степной хранитель
                </div>
                <div className="text-xs text-[oklch(0.55_0.03_65)] tracking-widest uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Как помочь
                </div>
              </div>
            </a>
            <a
              href="/"
              className="text-sm text-[oklch(0.45_0.03_65)] hover:text-[oklch(0.38_0.11_145)] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ← На главную
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[oklch(0.93_0.04_145)] to-[oklch(0.90_0.04_145)]">
          <div className="container text-center">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Твоё участие
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Как ты можешь<br />
              <em className="text-[oklch(0.38_0.11_145)]">помочь манулу</em>
            </h1>
            <p className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              «Степной хранитель» — это мост, который соединяет студентов с реальной 
              природоохранной повесткой. Выбери свой способ участия.
            </p>
          </div>
        </section>

        {/* Help Options */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {helpOptions.map((option, i) => (
                <div
                  key={i}
                  className="bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl p-6 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-xl mb-3 group-hover:text-[oklch(0.38_0.11_145)] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {option.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {option.description}
                  </p>
                  <ul className="text-sm text-[oklch(0.45_0.03_65)] space-y-2 mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {option.actions.map((action, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[oklch(0.38_0.11_145)] mt-0.5">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={option.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.38_0.11_145)] hover:text-[oklch(0.32_0.11_145)] transition-colors group/link"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {option.linkText}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover/link:translate-x-1 transition-transform">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            {/* Organizations Section */}
            <div id="organizations" className="bg-white border border-[oklch(0.88_0.015_75)] rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Партнёры и организации
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Проверенные организации<br />
                  <em className="text-[oklch(0.38_0.11_145)]">по защите манула</em>
                </h2>
                <p className="text-[oklch(0.45_0.03_65)] text-base max-w-xl mx-auto leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Переходи на сайты организаций, которые ведут реальную работу по сохранению 
                  манула и степных экосистем России.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {organizations.map((org, i) => (
                  <div
                    key={i}
                    className="bg-[oklch(0.95_0.015_85)] border border-[oklch(0.88_0.015_75)] rounded-xl p-5 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-[oklch(0.20_0.03_65)] group-hover:text-[oklch(0.38_0.11_145)] transition-colors"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        {org.name}
                      </h3>
                      {org.donation && (
                        <span className="text-xs px-2 py-1 rounded-full bg-[oklch(0.60_0.11_145)] text-white font-semibold"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          💚 Приём пожертвований
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {org.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[oklch(0.45_0.03_65)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {org.focus}
                      </span>
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[oklch(0.38_0.11_145)] hover:text-[oklch(0.32_0.11_145)] transition-colors inline-flex items-center gap-1"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Перейти
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[oklch(0.38_0.11_145)] to-[oklch(0.32_0.11_145)]">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Вместе мы можем изменить ситуацию
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Каждое действие имеет значение. Даже небольшой вклад помогает сохранить манула 
              и его среду обитания для будущих поколений.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/problems"
                className="px-8 py-4 rounded-full bg-white text-[oklch(0.38_0.11_145)] font-semibold hover:bg-[oklch(0.95_0.015_85)] transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Узнать о проблемах
              </a>
              <a
                href="mailto:stepnoy.hranitel@fa.ru"
                className="px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Написать команде
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[oklch(0.18_0.04_65)] text-white py-12">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/logo-manul-iziNX2T6GedxBB5dPoDr4s.webp"
                alt="Логотип" referrerPolicy="no-referrer" crossOrigin="anonymous"
                className="w-10 h-10 object-contain"
              />
              <div className="font-bold text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Степной хранитель
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Информационно-просветительская платформа о мануле. 
              Инициатива студентов Финансового университета при Правительстве РФ.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[oklch(0.38_0.11_145)] hover:text-[oklch(0.32_0.11_145)] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ← Вернуться на главную
            </a>
          </div>
        </footer>
      </div>
  );
}
