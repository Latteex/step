export default function Analytics() {
  return (
    <div className="min-h-screen bg-[oklch(0.18_0.04_65)]">
        {/* Header */}
        <header className="bg-[oklch(0.15_0.04_65)] border-b border-[oklch(0.25_0.04_65)] sticky top-0 z-40">
          <div className="container py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/logo-manul-iziNX2T6GedxBB5dPoDr4s.webp"
                alt="Логотип" referrerPolicy="no-referrer" crossOrigin="anonymous"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="font-bold text-lg leading-none text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Степной хранитель
                </div>
                <div className="text-xs text-[oklch(0.60_0.02_75)] tracking-widest uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Аналитический раздел
                </div>
              </div>
            </a>
            <a
              href="/"
              className="text-sm text-[oklch(0.60_0.02_75)] hover:text-white transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ← На главную
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <div className="text-xs font-semibold text-[oklch(0.72_0.12_65)] uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Данные и прогнозы
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Аналитика угроз<br />
              <em className="text-[oklch(0.72_0.12_65)]">для популяции манула</em>
            </h1>
            <p className="text-[oklch(0.70_0.02_75)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Визуализация данных о популяции манула: динамика численности, 
              факторы угроз, прогнозы специалистов и ключевые показатели выживаемости.
            </p>
          </div>
        </section>

        {/* Main Stats Cards */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  value: "14 000",
                  suffix: "",
                  label: "особей в мире",
                  trend: "-12%",
                  trendLabel: "за последние 10 лет",
                  color: "145",
                  icon: "🌍",
                },
                {
                  value: "9 500",
                  suffix: "",
                  label: "особей в России",
                  trend: "-8%",
                  trendLabel: "тенденция к снижению",
                  color: "145",
                  icon: "🇷🇺",
                },
                {
                  value: "11–12",
                  suffix: " лет",
                  label: "продолжительность жизни",
                  trend: "",
                  trendLabel: "в дикой природе",
                  color: "75",
                  icon: "⏱️",
                },
                {
                  value: "68",
                  suffix: "%",
                  label: "смертность молодняка",
                  trend: "критично",
                  trendLabel: "требуется вмешательство",
                  color: "25",
                  icon: "⚠️",
                },
              ].map((stat, i) => (
                <div key={i} className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-2xl p-6">
                  <div className="text-3xl mb-3">{stat.icon}</div>
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

            {/* Population Chart */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Динамика популяции манула в России
              </h2>
              <p className="text-sm text-[oklch(0.60_0.02_75)] mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Данные мониторинга 2015–2025 гг. (источник: Забайкальский нацпарк, WWF России)
              </p>

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

              <div className="mt-2 h-px bg-[oklch(0.40_0.04_65)]" />
            </div>

            {/* Two Columns */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Decline Factors */}
              <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Факторы сокращения численности
                </h3>

                <div className="space-y-5">
                  {[
                    { factor: "Хозяйственное освоение", value: 42, color: "oklch(0.55_0.11_145)", desc: "Распашка земель, выпас скота" },
                    { factor: "Фрагментация ареала", value: 28, color: "oklch(0.50_0.11_180)", desc: "Дороги, трубопроводы, заборы" },
                    { factor: "Браконьерство", value: 15, color: "oklch(0.55_0.11_25)", desc: "Охота ради меха и костей" },
                    { factor: "Изменение климата", value: 10, color: "oklch(0.55_0.11_75)", desc: "Деградация кормовой базы" },
                    { factor: "Другие факторы", value: 5, color: "oklch(0.45_0.04_65)", desc: "Болезни, ДТП, конкуренция" },
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
                      <div className="h-3 bg-[oklch(0.30_0.04_65)] rounded-full overflow-hidden mb-1">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ 
                            width: `${item.value}%`,
                            background: item.color,
                          }}
                        />
                      </div>
                      <p className="text-xs text-[oklch(0.55_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ecologist Predictions */}
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
                      probability: "Вероятность: 25%",
                    },
                    {
                      scenario: "Базовый сценарий",
                      desc: "При сохранении текущих мер охраны",
                      outcome: "-5% к популяции",
                      color: "oklch(0.55_0.11_75)",
                      probability: "Вероятность: 50%",
                    },
                    {
                      scenario: "Пессимистичный сценарий",
                      desc: "При ухудшении условий и сокращении финансирования",
                      outcome: "-30% к популяции",
                      color: "oklch(0.55_0.11_25)",
                      probability: "Вероятность: 25%",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-[oklch(0.26_0.04_65)] rounded-xl p-5 border border-[oklch(0.35_0.04_65)]">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                          style={{ background: item.color }}
                        />
                        <div className="flex-1">
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
                      <div className="ml-6 flex items-center justify-between">
                        <div className="text-base font-bold"
                          style={{ 
                            fontFamily: "'Playfair Display', serif",
                            color: item.color,
                          }}>
                          {item.outcome}
                        </div>
                        <div className="text-xs text-[oklch(0.55_0.02_75)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {item.probability}
                        </div>
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

            {/* Age Distribution */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Возрастная структура популяции
              </h3>
              <p className="text-sm text-[oklch(0.60_0.02_75)] mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Распределение особей по возрастным группам (данные 2025 г.)
              </p>

              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Donut Chart */}
                <div className="relative w-56 h-56 flex-shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="oklch(0.55_0.11_145)" strokeWidth="20" strokeDasharray="100.5 251.3" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="oklch(0.50_0.11_180)" strokeWidth="20" strokeDasharray="88 251.3" strokeDashoffset="-100.5" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="oklch(0.55_0.11_75)" strokeWidth="20" strokeDasharray="94.2 251.3" strokeDashoffset="-188.5" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="oklch(0.45_0.04_65)" strokeWidth="20" strokeDasharray="31.4 251.3" strokeDashoffset="-282.7" />
                  </svg>
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

            {/* Regional Distribution */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Распределение популяции по регионам
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { country: "🇲🇳 Монголия", population: "~5 000", percentage: "35%", trend: "Стабильно" },
                  { country: "🇨🇳 Китай", population: "~3 500", percentage: "25%", trend: "Снижение" },
                  { country: "🇷🇺 Россия", population: "~9 500", percentage: "12%", trend: "Снижение" },
                  { country: "🇰🇿 Казахстан", population: "~1 200", percentage: "8%", trend: "Стабильно" },
                  { country: "🇰🇬 Кыргызстан", population: "~700", percentage: "5%", trend: "Снижение" },
                  { country: "🇮🇷 Иран, 🇦🇫 Афганистан", population: "~500", percentage: "4%", trend: "Критично" },
                ].map((region, i) => (
                  <div key={i} className="bg-[oklch(0.26_0.04_65)] rounded-xl p-5 border border-[oklch(0.35_0.04_65)]">
                    <div className="text-lg mb-2">{region.country}</div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        {region.population}
                      </span>
                      <span className="text-sm text-[oklch(0.60_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {region.percentage}
                      </span>
                    </div>
                    <div className={`text-xs font-semibold px-2 py-1 rounded-full inline-block ${
                      region.trend === "Стабильно" ? "bg-[oklch(0.60_0.11_145)] text-white" :
                      region.trend === "Снижение" ? "bg-[oklch(0.60_0.11_75)] text-white" :
                      "bg-[oklch(0.60_0.11_25)] text-white"
                    }`}>
                      {region.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[oklch(0.15_0.04_65)] text-white py-12 mt-16 border-t border-[oklch(0.25_0.04_65)]">
          <div className="container text-center">
            <p className="text-[oklch(0.60_0.02_75)] text-sm mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Данные основаны на отчётах WWF России, Забайкальского нацпарка 
              и научных публикациях 2020–2025 гг.
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
