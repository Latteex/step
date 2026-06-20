import Footer from "@/components/Footer";

export default function Threats() {
  return (
    <div className="min-h-screen bg-[oklch(0.18_0.04_65)]">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-[oklch(0.18_0.04_65)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/manul-family.webp"
            alt="Манул"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[oklch(0.18_0.04_65)]/80" />
        </div>
        <div className="container text-center relative">
          <div
            className="text-xs font-semibold text-[oklch(0.72_0.12_65)] uppercase tracking-widest mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Аналитический раздел
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Угрозы для<br />
            <em className="text-[oklch(0.72_0.12_65)]">популяции манула</em>
          </h1>
          <p
            className="text-[oklch(0.70_0.02_75)] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Комплексный анализ факторов, угрожающих выживанию манула в дикой природе. 
            От хозяйственного освоения степей до изменения климата.
          </p>
          </div>
        </section>

      {/* Main Threats Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                icon: "",
                title: "Хозяйственное освоение",
                desc: "Распашка земель и рост поголовья скота разрушают естественную среду обитания манула.",
                impact: "42% угрозы",
                color: "oklch(0.55_0.11_145)",
              },
              {
                icon: "",
                title: "Инфраструктура",
                desc: "Строительство дорог и объектов фрагментирует местообитания, изолируя локальные популяции.",
                impact: "28% угрозы",
                color: "oklch(0.50_0.11_180)",
              },
              {
                icon: "",
                title: "Добыча ресурсов",
                desc: "Разработка полезных ископаемых нарушает степные экосистемы и уничтожает кормовую базу.",
                impact: "15% угрозы",
                color: "oklch(0.55_0.11_25)",
              },
              {
                icon: "",
                title: "Низкая осведомлённость",
                desc: "Общественность недостаточно знает о проблемах вида. Молодёжь не включена в природоохранную повестку.",
                impact: "15% угрозы",
                color: "oklch(0.55_0.11_75)",
              },
            ].map((threat, i) => (
              <div
                key={i}
                className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-2xl p-6 hover:border-[oklch(0.38_0.11_145)] transition-all duration-200"
              >
                <div className="text-4xl mb-4">{threat.icon}</div>
                <h3
                  className="text-white font-bold text-base mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {threat.title}
                </h3>
                <p
                  className="text-sm text-[oklch(0.65_0.02_75)] leading-relaxed mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {threat.desc}
                </p>
                <div
                  className="text-xs font-semibold px-2 py-1 rounded-full inline-block text-white"
                  style={{ background: threat.color, fontFamily: "'Montserrat', sans-serif" }}
                >
                  {threat.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Analysis */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Habitat Loss */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Потеря местообитаний
              </h3>

              <div className="space-y-5">
                {[
                  { factor: "Распашка земель", value: 35, desc: "Преобразование степей в сельхозугодья" },
                  { factor: "Выпас скота", value: 28, desc: "Деградация пастбищных экосистем" },
                  { factor: "Урбанизация", value: 20, desc: "Расширение населённых пунктов" },
                  { factor: "Промышленность", value: 17, desc: "Промышленные объекты и инфраструктура" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span
                        className="text-[oklch(0.70_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.factor}
                      </span>
                      <span
                        className="text-white font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.value}%
                      </span>
                    </div>
                    <div className="h-3 bg-[oklch(0.30_0.04_65)] rounded-full overflow-hidden mb-1">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[oklch(0.38_0.11_145)] to-[oklch(0.50_0.11_145)] transition-all duration-700"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                    <p
                      className="text-xs text-[oklch(0.55_0.02_75)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fragmentation */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Фрагментация ареала
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Дороги и трубопроводы",
                    desc: "Линейные объекты разделяют популяции, препятствуя миграции и генетическому обмену.",
                    icon: "",
                  },
                  {
                    title: "Заборы и ограждения",
                    desc: "Искусственные барьеры ограничивают перемещение особей и доступ к кормовой базе.",
                    icon: "",
                  },
                  {
                    title: "Изоляция популяций",
                    desc: "Малые изолированные группы теряют генетическое разнообразие и становятся уязвимыми.",
                    icon: "",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-[oklch(0.26_0.04_65)] rounded-xl">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4
                        className="text-white font-semibold mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-sm text-[oklch(0.60_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Critical Stats */}
          <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8 mb-16">
            <h3
              className="text-2xl font-bold text-white mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Критические показатели
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  value: "68%",
                  label: "смертность молодняка до года",
                  desc: "Большинство молодых особей не доживает до расселения",
                  severity: "critical",
                },
                {
                  value: "50%",
                  label: "смертность взрослых особей",
                  desc: "Каждая вторая взрослая особь погибает преждевременно",
                  severity: "high",
                },
                {
                  value: "13%",
                  label: "ареала под охраной",
                  desc: "Критически малая площадь охраняемых территорий",
                  severity: "high",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`text-center p-6 rounded-2xl ${
                    stat.severity === "critical"
                      ? "bg-[oklch(0.60_0.11_25)]/20 border border-[oklch(0.60_0.11_25)]/30"
                      : "bg-[oklch(0.60_0.11_145)]/20 border border-[oklch(0.60_0.11_145)]/30"
                  }`}
                >
                  <div
                    className="text-5xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm text-[oklch(0.70_0.02_75)] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                  <p
                    className="text-xs text-[oklch(0.55_0.02_75)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              ADDITIONAL ANALYTICS
          ═══════════════════════════════════════════════════════════════════ */}
          
          {/* Habitat Loss Timeline */}
          <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Динамика сокращения степных экосистем Забайкалья
            </h3>
            <p className="text-sm text-[oklch(0.60_0.02_75)] mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Площадь нетронутых степей сокращается на 2–3% ежегодно с 1990-х годов.
            </p>

            {/* Timeline chart */}
            <div className="relative h-64 flex items-end justify-between gap-2 md:gap-4 px-4">
              {[
                { year: "1990", value: 100, label: "100%", note: "Исходная площадь" },
                { year: "2000", value: 85, label: "85%", note: "−15% за 10 лет" },
                { year: "2010", value: 68, label: "68%", note: "−32% за 20 лет" },
                { year: "2020", value: 52, label: "52%", note: "−48% за 30 лет" },
                { year: "2025", value: 45, label: "45%", note: "−55% за 35 лет" },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3">
                  <div className="text-xs text-[oklch(0.60_0.02_75)] font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {bar.label}
                  </div>
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-[oklch(0.55_0.11_25)] to-[oklch(0.65_0.11_25)] transition-all duration-500 hover:from-[oklch(0.60_0.11_25)] hover:to-[oklch(0.70_0.11_25)]"
                    style={{ height: `${bar.value * 1.8}px` }}
                  />
                  <div className="text-xs text-[oklch(0.60_0.02_75)] font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {bar.year}
                  </div>
                  <div className="text-[10px] text-[oklch(0.50_0.02_75)] text-center max-w-[80px]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {bar.note}
                  </div>
                </div>
              ))}
            </div>

            {/* X-axis line */}
            <div className="mt-2 h-px bg-[oklch(0.40_0.04_65)]" />
          </div>

          {/* Genetic Diversity & Inbreeding */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Генетическое разнообразие популяций
              </h3>
              <p className="text-sm text-[oklch(0.60_0.02_75)] mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Изоляция популяций приводит к снижению генетического разнообразия и инбридингу.
              </p>

              <div className="space-y-5">
                {[
                  { factor: "Забайкальская популяция", value: 23, desc: "Снижение на 23% по сравнению с монгольской", color: "oklch(0.55_0.11_25)" },
                  { factor: "Тувинская популяция", value: 18, desc: "Умеренная изоляция, стабильная численность", color: "oklch(0.55_0.11_75)" },
                  { factor: "Монгольская популяция", value: 5, desc: "Базовый уровень генетического разнообразия", color: "oklch(0.38_0.11_145)" },
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

              <div className="mt-6 p-4 bg-[oklch(0.60_0.11_25)]/20 rounded-xl border border-[oklch(0.60_0.11_25)]/30">
                <p className="text-sm text-[oklch(0.80_0.02_75)] italic"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  «Изолированные популяции манула в Забайкалье имеют критически низкое генетическое разнообразие. Без миграционных коридоров риск вымирания возрастает на 40% за 50 лет.»
                </p>
                <p className="text-xs text-[oklch(0.60_0.02_75)] mt-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  — Институт цитологии и генетики СО РАН, 2024
                </p>
              </div>
            </div>

            {/* Regional Pressure */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Антропогенное давление по регионам
              </h3>
              <p className="text-sm text-[oklch(0.60_0.02_75)] mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Индекс антропогенной нагрузки (0–100), где 100 — максимальное давление.
              </p>

              <div className="space-y-4">
                {[
                  { region: "Читинская область", value: 78, desc: "Высокая урбанизация, добыча полезных ископаемых", color: "oklch(0.55_0.11_25)" },
                  { region: "Западное Забайкалье", value: 65, desc: "Сельхозугодья, пастбища, дороги", color: "oklch(0.60_0.11_145)" },
                  { region: "Восточное Забайкалье", value: 45, desc: "Умеренное давление, сохранившиеся степи", color: "oklch(0.55_0.11_75)" },
                  { region: "Республика Бурятия", value: 38, desc: "Низкое давление, удалённость от центров", color: "oklch(0.38_0.11_145)" },
                  { region: "Республика Тыва", value: 22, desc: "Минимальное давление, нетронутые экосистемы", color: "oklch(0.38_0.11_145)" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[oklch(0.70_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {item.region}
                      </span>
                      <span className="text-white font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {item.value}/100
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
          </div>

          {/* Human-Wildlife Conflicts */}
          <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Конфликты с местным населением
            </h3>
            <p className="text-sm text-[oklch(0.60_0.02_75)] mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Манулы иногда попадают в капканы, предназначенные для хищников, уничтожающих поголовье.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: "120+",
                  label: "капканов в год",
                  desc: "Случайный отлов манулов в Забайкалье",
                  color: "oklch(0.60_0.11_25)",
                },
                {
                  stat: "85%",
                  label: "нецелевой отлов",
                  desc: "Капканы ставятся для лисиц и волков",
                  color: "oklch(0.60_0.11_145)",
                },
                {
                  stat: "34",
                  label: "погибших манула в 2024",
                  desc: "По данным мониторинга заповедников",
                  color: "oklch(0.60_0.11_75)",
                },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-[oklch(0.26_0.04_65)] rounded-xl border border-[oklch(0.35_0.04_65)]">
                  <div className="text-4xl font-bold mb-2"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: item.color,
                    }}>
                    {item.stat}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.label}
                  </div>
                  <p className="text-xs text-[oklch(0.55_0.02_75)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Economic Impact */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Экономические потери от деградации экосистем
              </h3>
              <p className="text-sm text-[oklch(0.60_0.02_75)] mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Потеря степных экосистем влияет на сельское хозяйство и туризм региона.
              </p>

              <div className="space-y-4">
                {[
                  { sector: "Сельское хозяйство", loss: "₽2.3 млрд/год", desc: "Деградация пастбищ, снижение продуктивности", color: "oklch(0.55_0.11_25)" },
                  { sector: "Экотуризм", loss: "₽450 млн/год", desc: "Сокращение популяций диких животных", color: "oklch(0.60_0.11_145)" },
                  { sector: "Почвенная эрозия", loss: "₽1.1 млрд/год", desc: "Потеря плодородного слоя степей", color: "oklch(0.55_0.11_75)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[oklch(0.26_0.04_65)] rounded-xl">
                    <div className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: item.color }} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-semibold text-sm"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {item.sector}
                        </span>
                        <span className="text-white font-bold"
                          style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item.loss}
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

            {/* Conservation Investment */}
            <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Инвестиции в охрану манула
              </h3>
              <p className="text-sm text-[oklch(0.60_0.02_75)] mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Финансирование охранных мероприятий в России за последние 5 лет.
              </p>

              <div className="space-y-5">
                {[
                  { year: "2020", amount: "₽18 млн", desc: "Базовый мониторинг, фотоловушки", color: "oklch(0.45_0.04_65)" },
                  { year: "2021", amount: "₽24 млн", desc: "Расширение сети фотоловушек", color: "oklch(0.50_0.08_75)" },
                  { year: "2022", amount: "₽31 млн", desc: "Научные исследования, РГО", color: "oklch(0.55_0.11_145)" },
                  { year: "2023", amount: "₽42 млн", desc: "Программа Компаса, генетический анализ", color: "oklch(0.60_0.11_145)" },
                  { year: "2024", amount: "₽58 млн", desc: "Международное сотрудничество, Mars Inc.", color: "oklch(0.65_0.11_145)" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[oklch(0.70_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {item.year}
                      </span>
                      <span className="text-white font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {item.amount}
                      </span>
                    </div>
                    <div className="h-3 bg-[oklch(0.30_0.04_65)] rounded-full overflow-hidden mb-1">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ 
                          width: `${(parseInt(item.amount) / 58 * 100).toFixed(0)}%`,
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

              <div className="mt-6 p-4 bg-[oklch(0.38_0.11_145)]/20 rounded-xl border border-[oklch(0.38_0.11_145)]/30">
                <p className="text-sm text-[oklch(0.80_0.02_75)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <strong>Рост финансирования: +222%</strong> за 5 лет, но этого недостаточно для эффективной охраны вида.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-[oklch(0.22_0.04_65)] border border-[oklch(0.30_0.04_65)] rounded-3xl p-8 mb-16">
            <h3 className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Сравнительный анализ популяций манула
            </h3>
            <p className="text-sm text-[oklch(0.60_0.02_75)] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ключевые показатели популяций в разных странах ареала (данные 2024 г.).
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[oklch(0.30_0.04_65)]">
                    <th className="text-left py-3 px-4 text-[oklch(0.60_0.02_75)] font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Регион
                    </th>
                    <th className="text-center py-3 px-4 text-[oklch(0.60_0.02_75)] font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Численность
                    </th>
                    <th className="text-center py-3 px-4 text-[oklch(0.60_0.02_75)] font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Тренд
                    </th>
                    <th className="text-center py-3 px-4 text-[oklch(0.60_0.02_75)] font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Охраняемые территории
                    </th>
                    <th className="text-center py-3 px-4 text-[oklch(0.60_0.02_75)] font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Риск
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { region: "Россия (Забайкалье)", population: "4 500–9 500", trend: "↓ Снижение", trendColor: "oklch(0.55_0.11_25)", protected: "13%", risk: "Высокий", riskColor: "oklch(0.55_0.11_25)" },
                    { region: "Монголия", population: "~5 000", trend: "→ Стабильно", trendColor: "oklch(0.38_0.11_145)", protected: "8%", risk: "Средний", riskColor: "oklch(0.55_0.11_75)" },
                    { region: "Китай (Внутренняя Монголия)", population: "~2 000", trend: "↓ Снижение", trendColor: "oklch(0.55_0.11_25)", protected: "5%", risk: "Высокий", riskColor: "oklch(0.55_0.11_25)" },
                    { region: "Казахстан", population: "~300–500", trend: "↓ Критично", trendColor: "oklch(0.55_0.11_25)", protected: "3%", risk: "Критический", riskColor: "oklch(0.60_0.11_25)" },
                    { region: "Кыргызстан", population: "~100–200", trend: "↓ Исчезновение", trendColor: "oklch(0.60_0.11_25)", protected: "2%", risk: "Критический", riskColor: "oklch(0.60_0.11_25)" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[oklch(0.25_0.04_65)] hover:bg-[oklch(0.26_0.04_65)] transition-colors">
                      <td className="py-4 px-4 text-white font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {row.region}
                      </td>
                      <td className="py-4 px-4 text-center text-[oklch(0.70_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {row.population}
                      </td>
                      <td className="py-4 px-4 text-center"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full"
                          style={{ 
                            color: row.trendColor,
                            background: `${row.trendColor}/20`,
                          }}>
                          {row.trend}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center text-[oklch(0.70_0.02_75)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {row.protected}
                      </td>
                      <td className="py-4 px-4 text-center"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full"
                          style={{ 
                            color: row.riskColor,
                            background: `${row.riskColor}/20`,
                          }}>
                          {row.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[oklch(0.50_0.02_75)] mt-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Источники: IUCN Cat Specialist Group (2024), WWF Russia, данные заповедников Забайкалья, научные публикации Института цитологии и генетики СО РАН.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Что можно сделать?
            </h3>
            <p
              className="text-[oklch(0.70_0.02_75)] text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Узнайте, как вы можете помочь в сохранении манула и его среды обитания.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/help"
                className="px-8 py-4 rounded-full bg-[oklch(0.38_0.11_145)] text-white font-semibold hover:bg-[oklch(0.32_0.11_145)] transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Как помочь?
              </a>
              <a
                href="/problems"
                className="px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 transition-all duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Предложить решение
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
