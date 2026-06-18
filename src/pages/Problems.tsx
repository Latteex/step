import { useState } from "react";
import { toast } from "sonner";

const problems = [
  {
    id: 1,
    icon: "🏭",
    title: "Хозяйственное освоение степей",
    impact: "68% ареала разрушено",
    description: "Распашка земель, рост поголовья скота и промышленное освоение уничтожают естественную среду обитания манула.",
    details: `
      <h3>Масштаб проблемы</h3>
      <p>За последние 50 лет площадь степных экосистем в Центральной Азии сократилась более чем на 60%. Основные причины:</p>
      <ul>
        <li>Распашка целинных земель под сельское хозяйство</li>
        <li>Увеличение поголовья домашнего скота (овцы, козы, лошади)</li>
        <li>Добыча полезных ископаемых (уголь, руды, нефть)</li>
        <li>Расширение населённых пунктов и инфраструктуры</li>
      </ul>
      
      <h3>Последствия для манула</h3>
      <ul>
        <li>Потеря мест обитания и охоты</li>
        <li>Сокращение кормовой базы (грызуны покидают освоенные территории)</li>
        <li>Увеличение конкуренции с домашними хищниками (собаки, кошки)</li>
        <li>Прямое беспокойство от человеческой деятельности</li>
      </ul>
      
      <h3>Текущие меры решения</h3>
      <ul>
        <li>Создание охраняемых природных территорий (заповедники, нацпарки)</li>
        <li>Разработка экологических коридоров между ООПТ</li>
        <li>Программы устойчивого землепользования</li>
        <li>Компенсационные выплаты фермерам за сохранение habitat</li>
      </ul>
    `,
    solutions: [
      {
        title: "Расширение сети ООПТ",
        desc: "Увеличение площади заповедников и национальных парков в ключевых ареалах манула.",
        status: "В реализации",
      },
      {
        title: "Эко-коридоры",
        desc: "Создание защищённых маршрутов между изолированными популяциями.",
        status: "Планируется",
      },
      {
        title: "Устойчивое животноводство",
        desc: "Программы ротации пастбищ для предотвращения деградации степей.",
        status: "Пилотные проекты",
      },
    ],
  },
  {
    id: 2,
    icon: "🛣️",
    title: "Фрагментация местообитаний",
    impact: "Изоляция популяций",
    description: "Строительство дорог и объектов инфраструктуры разделяет популяции, снижая генетическое разнообразие.",
    details: `
      <h3>Что такое фрагментация?</h3>
      <p>Фрагментация — это разделение единого ареала на изолированные участки линейными объектами:</p>
      <ul>
        <li>Автомобильные и железные дороги</li>
        <li>Трубопроводы и ЛЭП</li>
        <li>Заборы и ограждения</li>
        <li>Каналы и водохранилища</li>
      </ul>
      
      <h3>Генетические последствия</h3>
      <p>Изолированные популяции теряют возможность обмена генами. Это приводит к:</p>
      <ul>
        <li>Снижению генетического разнообразия</li>
        <li>Накоплению вредных мутаций</li>
        <li>Снижению адаптивного потенциала</li>
        <li>Увеличению риска вымирания</li>
      </ul>
      
      <blockquote>
        «Популяции манула в Забайкалье имеют на 23% меньше генетического разнообразия по сравнению с монгольскими. Изоляция длится уже более 50 лет.»
      </blockquote>
      
      <h3>Меры решения</h3>
      <ul>
        <li>Строительство экодуков и зеленых мостов</li>
        <li>Установка специальных переходов для животных под дорогами</li>
        <li>Демонтаж старых заборов в миграционных коридорах</li>
        <li>Планирование новой инфраструктуры с учётом миграций</li>
      </ul>
    `,
    solutions: [
      {
        title: "Экодуки на трассах",
        desc: "Строительство специальных переходов для животных на федеральных трассах.",
        status: "Пилотные проекты",
      },
      {
        title: "Снятие заборов",
        desc: "Демонтаж устаревших ограждений в ключевых миграционных коридорах.",
        status: "В реализации",
      },
    ],
  },
  {
    id: 3,
    icon: "📉",
    title: "Высокая смертность молодняка",
    impact: "68% котят не выживают",
    description: "Большинство молодых особей погибает до расселения из-за хищников, болезней и недостатка кормовой базы.",
    details: `
      <h3>Статистика выживаемости</h3>
      <p>Только 32% котят доживают до первого года жизни. Это критически низкий показатель для поддержания стабильной популяции.</p>
      
      <h3>Причины смертности</h3>
      <ul>
        <li><strong>Хищники (45%):</strong> волки, лисы, орлы, филины</li>
        <li><strong>Болезни (30%):</strong> токсоплазмоз, чумка, парвовирус</li>
        <li><strong>Недостаток корма (15%):</strong> нехватка опыта охоты</li>
        <li><strong>Антропогенные факторы (10%):</strong> браконьерство, ДТП, отравления</li>
      </ul>
      
      <h3>Токсоплазмоз — скрытая угроза</h3>
      <p>Паразит Toxoplasma gondii попадает в степь через фекалии домашних кошек. Манулы заражаются через грызунов-переносчиков. Болезнь особенно опасна для котят.</p>
      
      <h3>Меры решения</h3>
      <ul>
        <li>Программы стерилизации бездомных кошек вблизи ареалов</li>
        <li>Вакцинация домашних животных в приграничных сёлах</li>
        <li>Подкормка манулов в критические периоды (зима, весна)</li>
        <li>Мониторинг здоровья популяций</li>
      </ul>
    `,
    solutions: [
      {
        title: "Контроль бродячих кошек",
        desc: "Программы стерилизации и вакцинации в сёлахnear ареалов манула.",
        status: "В реализации",
      },
      {
        title: "Зимняя подкормка",
        desc: "Установка кормовых площадок в периоды нехватки грызунов.",
        status: "Пилотные проекты",
      },
    ],
  },
  {
    id: 4,
    icon: "🎯",
    title: "Браконьерство",
    impact: "Нелегальная охота",
    description: "Охота ради меха и костей для традиционной медицины продолжает угрожать популяции в отдельных регионах.",
    details: `
      <h3>Масштабы браконьерства</h3>
      <p>Несмотря на полный запрет охоты на манула в России с 2000 года, нелегальная добыча продолжается. По оценкам экспертов, ежегодно браконьеры отлавливают от 50 до 100 особей.</p>
      
      <h3>Причины браконьерства</h3>
      <ul>
        <li>Высокая стоимость меха манула на чёрном рынке</li>
        <li>Спрос на кости для традиционной азиатской медицины</li>
        <li>Слабый контроль в удалённых районах</li>
        <li>Низкие штрафы по сравнению с прибылью</li>
      </ul>
      
      <h3>Меры борьбы</h3>
      <ul>
        <li>Усиление инспекторской службы в ООПТ</li>
        <li>Увеличение штрафов за незаконную охоту</li>
        <li>Конфискация транспорта и оборудования у браконьеров</li>
        <li>Работа с местным населением (информирование, альтернативный доход)</li>
        <li>Международное сотрудничество (борьба с контрабандой)</li>
      </ul>
      
      <blockquote>
        «Штраф за убийство манула в России составляет до 500 000 рублей. Однако прибыль от продажи одной шкуры может достигать 100 000 рублей, что делает браконьерство экономически выгодным.»
      </blockquote>
    `,
    solutions: [
      {
        title: "Усиление охраны",
        desc: "Увеличение числа инспекторов и рейдов в ключевых ареалах.",
        status: "В реализации",
      },
      {
        title: "Ужесточение наказаний",
        desc: "Законодательные инициативы по увеличению штрафов и уголовной ответственности.",
        status: "Лоббирование",
      },
      {
        title: "Фотоловушки",
        desc: "Установка камер для мониторинга и выявления браконьеров.",
        status: "В реализации",
      },
    ],
  },
  {
    id: 5,
    icon: "🌡️",
    title: "Изменение климата",
    impact: "Деградация экосистем",
    description: "Изменение климатических условий влияет на численность грызунов — основной кормовой базы манула.",
    details: `
      <h3>Климатические тренды</h3>
      <p>За последние 30 лет средняя температура в ареале манула выросла на 1.5–2 °C. Это приводит к:</p>
      <ul>
        <li>Учащению засух и экстремальных погодных явлений</li>
        <li>Изменению растительного покрова степей</li>
        <li>Сокращению численности грызунов (пищухи, полёвки)</li>
        <li>Сдвигу сезонов размножения</li>
      </ul>
      
      <h3>Влияние на кормовую базу</h3>
      <p>Пищухи — основной источник пищи манула — крайне чувствительны к изменениям климата. Сокращение их численности напрямую влияет на выживаемость манулов.</p>
      
      <h3>Долгосрочные прогнозы</h3>
      <p>К 2050 году площадь пригодных для манула habitat может сократиться на 20–30% из-за климатических изменений. Наиболее уязвимы южные части ареала.</p>
      
      <h3>Адаптационные меры</h3>
      <ul>
        <li>Сохранение и восстановление степных экосистем</li>
        <li>Создание климатических рефугиумов (зон со стабильным микроклиматом)</li>
        <li>Мониторинг популяций грызунов</li>
        <li>Подготовка программ переселения популяций при необходимости</li>
      </ul>
    `,
    solutions: [
      {
        title: "Восстановление степей",
        desc: "Программы реинтродукции native растений и борьбы с опустыниванием.",
        status: "В реализации",
      },
      {
        title: "Климатический мониторинг",
        desc: "Изучение влияния климата на популяции манула и грызунов.",
        status: "Научные исследования",
      },
    ],
  },
  {
    id: 6,
    icon: "📢",
    title: "Низкая осведомлённость",
    impact: "Отсутствие поддержки",
    description: "Общественность недостаточно знает о проблемах вида, что снижает поддержку природоохранных инициатив.",
    details: `
      <h3>Проблема информированности</h3>
      <p>По данным опросов 2025 года:</p>
      <ul>
        <li>Только 23% россиян слышали о мануле</li>
        <li>Менее 5% знают о проблемах сохранения вида</li>
        <li>Около 40% путают манула с домашней кошкой</li>
      </ul>
      
      <h3>Последствия низкой осведомлённости</h3>
      <ul>
        <li>Отсутствие общественной поддержки охранных программ</li>
        <li>Недостаточное финансирование природоохранных проектов</li>
        <li>Продолжение спроса на мех манула</li>
        <li>Слабое участие волонтёров и доноров</li>
      </ul>
      
      <h3>Просветительские меры</h3>
      <ul>
        <li>Образовательные программы в школах и вузах</li>
        <li>Социальные сети и медиа-кампании</li>
        <li>Эко-туризм и просветительские центры</li>
        <li>Сотрудничество с блогерами и инфлюенсерами</li>
        <li>Фестивали и публичные мероприятия</li>
      </ul>
      
      <blockquote>
        «Осведомлённость — первый шаг к сохранению. Люди защищают то, что любят. А любят то, что знают.»
      </blockquote>
    `,
    solutions: [
      {
        title: "Степной хранитель",
        desc: "Данная платформа — часть просветительской инициативы для студентов и молодёжи.",
        status: "Реализуется",
      },
      {
        title: "Соцсети",
        desc: "Ведение аккаунтов в VK, Telegram, YouTube с контентом о мануле.",
        status: "В реализации",
      },
      {
        title: "Школьные программы",
        desc: "Разработка учебных материалов для уроков экологии и биологии.",
        status: "Планируется",
      },
    ],
  },
];

export default function Problems() {
  const [selectedProblem, setSelectedProblem] = useState<typeof problems[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: "",
    solutionTitle: "",
    solutionDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальности здесь будет отправка на сервер
    toast.success("Ваше решение отправлено на рассмотрение!", {
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({
      name: "",
      email: "",
      problem: "",
      solutionTitle: "",
      solutionDescription: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
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
                  Ключевые проблемы
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
              Угрозы и решения
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Ключевые проблемы<br />
              <em className="text-[oklch(0.38_0.11_145)]">сохранения манула</em>
            </h1>
            <p className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Манул сталкивается с серьёзными угрозами. Изучите проблемы, 
              узнайте о текущих мерах решения и предложите своё видение.
            </p>
          </div>
        </section>

        {/* Problems Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {problems.map((problem) => (
                <div
                  key={problem.id}
                  className="bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  onClick={() => setSelectedProblem(problem)}
                >
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-xl mb-2 group-hover:text-[oklch(0.38_0.11_145)] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {problem.title}
                  </h3>
                  <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-wide mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {problem.impact}
                  </div>
                  <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {problem.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-[oklch(0.38_0.11_145)]">
                    Подробнее
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2 group-hover:translate-x-1 transition-transform">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Solutions Form */}
            <div className="bg-gradient-to-br from-[oklch(0.93_0.04_145)] to-[oklch(0.90_0.04_145)] rounded-3xl p-8 md:p-12 border border-[oklch(0.85_0.04_145)]">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Предложи своё решение
                </h2>
                <p className="text-[oklch(0.45_0.03_65)] text-base max-w-xl mx-auto leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Есть идея, как решить одну из проблем? Заполни форму — мы рассмотрим твоё предложение 
                  и опубликуем лучшие решения на сайте.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[oklch(0.30_0.03_65)] mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Твоё имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.85_0.015_75)] bg-white text-[oklch(0.20_0.03_65)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.38_0.11_145)] focus:border-transparent transition-all"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <option value="">Выберите проблему</option>
                    {problems.map((p) => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
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
                    value={formData.solutionTitle}
                    onChange={(e) => setFormData({ ...formData, solutionTitle: e.target.value })}
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
                    value={formData.solutionDescription}
                    onChange={(e) => setFormData({ ...formData, solutionDescription: e.target.value })}
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
              </form>
            </div>
          </div>
        </section>

        {/* Problem Detail Modal */}
        {selectedProblem && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedProblem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{selectedProblem.icon}</div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.20_0.03_65)]"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        {selectedProblem.title}
                      </h2>
                      <div className="text-sm text-[oklch(0.38_0.11_145)] font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {selectedProblem.impact}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProblem(null)}
                    className="w-10 h-10 rounded-full bg-[oklch(0.93_0.015_85)] hover:bg-[oklch(0.88_0.015_75)] flex items-center justify-center transition-colors"
                    aria-label="Закрыть"
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div
                  className="prose prose-lg max-w-none mb-8
                    prose-headings:font-bold prose-headings:font-serif prose-headings:text-[oklch(0.20_0.03_65)]
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-[oklch(0.45_0.03_65)] prose-p:leading-relaxed prose-p:mb-4
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
                    prose-li:text-[oklch(0.45_0.03_65)] prose-li:mb-2
                    prose-blockquote:border-l-4 prose-blockquote:border-[oklch(0.38_0.11_145)] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[oklch(0.38_0.11_145)] prose-blockquote:my-6"
                  dangerouslySetInnerHTML={{ __html: selectedProblem.details }}
                />

                <div className="border-t border-[oklch(0.88_0.015_75)] pt-8">
                  <h3 className="text-xl font-bold text-[oklch(0.20_0.03_65)] mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Текущие векторы решения
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProblem.solutions.map((sol, i) => (
                      <div key={i} className="bg-[oklch(0.95_0.015_85)] border border-[oklch(0.88_0.015_75)] rounded-xl p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-[oklch(0.20_0.03_65)]"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                            {sol.title}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            sol.status === "В реализации" ? "bg-[oklch(0.60_0.11_145)] text-white" :
                            sol.status === "Планируется" ? "bg-[oklch(0.70_0.11_75)] text-white" :
                            "bg-[oklch(0.70_0.04_65)] text-white"
                          }`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {sol.status}
                          </span>
                        </div>
                        <p className="text-sm text-[oklch(0.50_0.03_65)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {sol.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-[oklch(0.18_0.04_65)] text-white py-12 mt-16">
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
