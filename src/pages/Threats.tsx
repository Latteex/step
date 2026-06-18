import Footer from "@/components/Footer";

export default function Threats() {
  return (
    <div className="min-h-screen bg-[oklch(0.18_0.04_65)]">
      {/* Header */}
      <header className="bg-[oklch(0.15_0.04_65)] border-b border-[oklch(0.25_0.04_65)] sticky top-0 z-40">
        <div className="container py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/logo-manul-iziNX2T6GedxBB5dPoDr4s.webp"
              alt="Логотип"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <div
                className="font-bold text-lg leading-none text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Степной хранитель
              </div>
              <div
                className="text-xs text-[oklch(0.60_0.02_75)] tracking-widest uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Угрозы популяции
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
                icon: "🌾",
                title: "Хозяйственное освоение",
                desc: "Распашка земель и рост поголовья скота разрушают естественную среду обитания манула.",
                impact: "42% угрозы",
                color: "oklch(0.55_0.11_145)",
              },
              {
                icon: "🛣️",
                title: "Инфраструктура",
                desc: "Строительство дорог и объектов фрагментирует местообитания, изолируя локальные популяции.",
                impact: "28% угрозы",
                color: "oklch(0.50_0.11_180)",
              },
              {
                icon: "⛏️",
                title: "Добыча ресурсов",
                desc: "Разработка полезных ископаемых нарушает степные экосистемы и уничтожает кормовую базу.",
                impact: "15% угрозы",
                color: "oklch(0.55_0.11_25)",
              },
              {
                icon: "📢",
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
                    icon: "🛣️",
                  },
                  {
                    title: "Заборы и ограждения",
                    desc: "Искусственные барьеры ограничивают перемещение особей и доступ к кормовой базе.",
                    icon: "🚧",
                  },
                  {
                    title: "Изоляция популяций",
                    desc: "Малые изолированные группы теряют генетическое разнообразие и становятся уязвимыми.",
                    icon: "🧬",
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
