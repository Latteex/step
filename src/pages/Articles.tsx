import { useState } from "react";

const articles = [
  {
    id: 1,
    icon: "🧬",
    tag: "Биология",
    title: "Биология и физиология: почему манул выглядит именно так",
    excerpt: "Густая шерсть, приземистое тело, плоская морда и круглые глаза — каждое приспособление манула имеет эволюционное объяснение.",
    content: `
      <h2>Уникальная внешность манула</h2>
      <p>Манул (Otocolobus manul) — одна из самых древних кошек на Земле. Его внешний вид сформировался в результате миллионов лет эволюции в суровых условиях центральноазиатских степей.</p>
      
      <h3>Густая шерсть</h3>
      <p>Мех манула — самый густой среди всех кошачьих. На одном квадратном сантиметре кожи располагается до 9000 волосков. Для сравнения: у домашней кошки этот показатель составляет около 3000 волосков. Такая плотность шерсти позволяет манулу выживать при температурах до −40 °C.</p>
      
      <h3>Приземистое тело</h3>
      <p>Короткие лапы и коренастое телосложение — это адаптация к жизни в степи. Низкий центр тяжести помогает манулу оставаться незамеченным в высокой траве и экономит энергию при передвижении по пересечённой местности.</p>
      
      <h3>Плоская морда и круглые глаза</h3>
      <p>Уплощённая морда с низко посаженными ушами позволяет манулу выглядывать из укрытия, минимально обнажая голову. Круглые, широко посаженные глаза обеспечивают отличное периферическое зрение — критически важное для обнаружения хищников и добычи.</p>
      
      <h3>Сезонные изменения</h3>
      <p>Зимний мех манула значительно светлее летнего — это помогает сливаться со снегом. Летом окрас становится более рыжим, соответствующим цвету сухой степной травы.</p>
      
      <blockquote>
        «Внешность манула — это результат идеальной адаптации к экстремальным условиям. Каждый элемент его тела выполняет конкретную функцию выживания.»
      </blockquote>
      
      <h3>Физиологические особенности</h3>
      <ul>
        <li><strong>Температура тела:</strong> 38–39 °C (как у всех кошачьих)</li>
        <li><strong>Вес:</strong> 2–4,5 кг (самцы крупнее самок)</li>
        <li><strong>Длина тела:</strong> 50–65 см</li>
        <li><strong>Длина хвоста:</strong> 23–31 см</li>
        <li><strong>Продолжительность жизни:</strong> 11–12 лет в дикой природе, до 20 лет в неволе</li>
      </ul>
    `,
    readTime: "12 мин",
    author: "Д-р биол. наук А.В. Барышников",
    date: "15 января 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/manul-portrait-serious-jkfEhUGCRutPaLtqJ6kU7v.webp",
  },
  {
    id: 2,
    icon: "🗺️",
    tag: "Экология",
    title: "Ареал и миграции: где обитает манул",
    excerpt: "География распространения вида от Ирана до Монголии. Почему манул не мигрирует и как фрагментация ландшафтов влияет на популяции.",
    content: `
      <h2>Глобальный ареал манула</h2>
      <p>Ареал манула простирается более чем на 3 миллиона км², охватывая территории 12 стран Центральной и Восточной Азии. Это один из самых широких ареалов среди мелких кошачьих.</p>
      
      <h3>Основные регионы обитания</h3>
      <ul>
        <li><strong>Россия:</strong> Забайкальский край, Бурятия, Тува, Алтай (около 8–16% мировой популяции)</li>
        <li><strong>Монголия:</strong> Практически вся территория страны (крупнейшая популяция — ~35%)</li>
        <li><strong>Китай:</strong> Тибет, Внутренняя Монголия, Синьцзян (~25%)</li>
        <li><strong>Казахстан:</strong> Восточные и юго-восточные регионы (~8%)</li>
        <li><strong>Кыргызстан:</strong> Горные районы (~5%)</li>
        <li><strong>Иран, Афганистан, Пакистан, Индия:</strong> Локальные популяции в горных районах</li>
      </ul>
      
      <h3>Почему манул не мигрирует?</h3>
      <p>В отличие от многих других хищников, манул ведёт оседлый образ жизни. Взрослая особь занимает участок площадью 5–15 км² и редко покидает его границы. Это связано с:</p>
      <ol>
        <li>Достаточностью кормовой базы на территории участка</li>
        <li>Энергетической эффективностью — миграции требуют больших затрат энергии</li>
        <li>Наличием постоянных укрытий (норы, расщелины скал)</li>
      </ol>
      
      <h3>Фрагментация ареала</h3>
      <p>Основная угроза для популяции манула — не сокращение общей площади ареала, а его фрагментация. Строительство дорог, трубопроводов и расширение сельскохозяйственных угодий разбивают единые территории на изолированные «островки».</p>
      
      <blockquote>
        «Фрагментация ареала опаснее прямого уничтожения habitat. Изолированные популяции теряют генетическое разнообразие и становятся уязвимыми к болезням.»
      </blockquote>
      
      <h3>Генетические последствия изоляции</h3>
      <p>Исследования 2024 года показали, что популяции манула в Забайкалье имеют на 23% меньше генетического разнообразия по сравнению с монгольскими популяциями. Это снижает способность вида адаптироваться к изменениям среды.</p>
    `,
    readTime: "10 мин",
    author: "К.б.н. Е.С. Петрова",
    date: "22 января 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/hero-manul-Y2nGWWx4dn7WXd3xkt2JdN.webp",
  },
  {
    id: 3,
    icon: "🍖",
    tag: "Питание",
    title: "Рацион и пищевое поведение манула",
    excerpt: "Манул специализируется на пищухах и грызунах. Как охотничья стратегия влияет на плотность популяции.",
    content: `
      <h2>Охотничья специализация</h2>
      <p>Манул — узкоспециализированный хищник. Основу его рациона составляют мелкие млекопитающие, прежде всего пищухи и полёвки.</p>
      
      <h3>Состав рациона</h3>
      <ul>
        <li><strong>Пищухи (Ochotonidae):</strong> 60–80% рациона</li>
        <li><strong>Полёвки (Microtus):</strong> 15–25%</li>
        <li><strong>Песчанки:</strong> 5–10%</li>
        <li><strong>Птицы (куропатки, улары):</strong> < 5%</li>
        <li><strong>Насекомые:</strong> сезонно, до 10% летом</li>
      </ul>
      
      <h3>Стратегия охоты</h3>
      <p>Манул не преследует добычу на больших дистанциях. Вместо этого он использует тактику засады:</p>
      <ol>
        <li>Занимает возвышенность или скрывается в траве</li>
        <li>Долго наблюдает за местностью, оставаясь неподвижным</li>
        <li>При обнаружении добычи совершает короткий бросок (до 5–10 метров)</li>
        <li>Если охота неудачна — редко преследует добычу дальше</li>
      </ol>
      
      <h3>Энергетический баланс</h3>
      <p>Такая стратегия обусловлена необходимостью экономить энергию. В условиях сурового климата и ограниченной кормовой базы манул не может позволить себе длительные погони.</p>
      
      <blockquote>
        «Манул — мастер энергосбережения. Каждая его адаптация направлена на минимизацию затрат при максимизации результата.»
      </blockquote>
      
      <h3>Суточная потребность</h3>
      <p>Взрослому манулу требуется около 200–300 г мяса в сутки. Это эквивалентно 3–5 полёвкам или 2–3 пищухам. В зимний период потребность возрастает на 15–20% из-за необходимости поддерживать температуру тела.</p>
      
      <h3>Влияние на экосистему</h3>
      <p>Манул играет важную роль в регуляции численности грызунов. Одна особь за год уничтожает до 1000 мелких млекопитающих, предотвращая их бесконтрольное размножение и распространение болезней.</p>
    `,
    readTime: "8 мин",
    author: "Эколог Д.К. Назарбаев",
    date: "5 февраля 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/manul-portrait-serious-jkfEhUGCRutPaLtqJ6kU7v.webp",
  },
  {
    id: 4,
    icon: "👶",
    tag: "Размножение",
    title: "Поведение и размножение: жизненный цикл манула",
    excerpt: "Сезон размножения, структура семейных групп, выживаемость котят. Почему 68% молодых особей не доживают до года.",
    content: `
      <h2>Репродуктивный цикл</h2>
      <p>Манул достигает половой зрелости в возрасте 10–12 месяцев. Размножение происходит один раз в год, строго в определённый сезон.</p>
      
      <h3>Сезон размножения</h3>
      <ul>
        <li><strong>Гон:</strong> февраль — март</li>
        <li><strong>Беременность:</strong> 60–65 дней</li>
        <li><strong>Рождение котят:</strong> апрель — май</li>
        <li><strong>Расселение молодняка:</strong> август — сентябрь</li>
      </ul>
      
      <h3>Приплод</h3>
      <p>Самка приносит от 2 до 6 котят, в среднем 3–4. Котята рождаются слепыми и беспомощными, весом около 300 г. Глаза открываются на 10–12 день.</p>
      
      <h3>Выживаемость молодняка</h3>
      <p>Критический показатель для популяции — только 32% котят доживают до первого года жизни. Основные причины смертности:</p>
      <ol>
        <li><strong>Хищники (45%):</strong> волки, лисы, хищные птицы</li>
        <li><strong>Болезни (30%):</strong> токсоплазмоз, чумка, парвовирус</li>
        <li><strong>Недостаток корма (15%):</strong> нехватка опыта охоты</li>
        <li><strong>Антропогенные факторы (10%):</strong> браконьерство, ДТП</li>
      </ol>
      
      <blockquote>
        «Высокая смертность молодняка — естественный механизм регуляции популяции. Однако в современных условиях антропогенное давление усугубляет эту проблему.»
      </blockquote>
      
      <h3>Структура семейной группы</h3>
      <p>Самка воспитывает котят самостоятельно. Самец не участвует в заботе о потомстве. Котята остаются с матерью до августа-сентября, после чего расселяются в поисках собственных участков.</p>
      
      <h3>Возрастная структура популяции</h3>
      <ul>
        <li><strong>Котята (0–1 год):</strong> 32%</li>
        <li><strong>Молодые (1–3 года):</strong> 28%</li>
        <li><strong>Взрослые (3–8 лет):</strong> 30%</li>
        <li><strong>Пожилые (8+ лет):</strong> 10%</li>
      </ul>
    `,
    readTime: "9 мин",
    author: "Зоолог М.Т. Уланова",
    date: "18 февраля 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/hero-manul-Y2nGWWx4dn7WXd3xkt2JdN.webp",
  },
  {
    id: 5,
    icon: "🛡️",
    tag: "Охрана",
    title: "Охранный статус и меры защиты манула",
    excerpt: "Статус вида в Красной книге РФ и IUCN. Какие меры охраны уже приняты и что нужно сделать для сохранения вида.",
    content: `
      <h2>Охранный статус</h2>
      <p>Манул относится к уязвимым видам, требующим постоянных мер охраны. Его статус закреплён в нескольких международных и национальных документах.</p>
      
      <h3>Международные документы</h3>
      <ul>
        <li><strong>IUCN Red List:</strong> Vulnerable (VU) — уязвимый вид</li>
        <li><strong>CITES:</strong> Приложение II — торговля ограничена</li>
        <li><strong>Боннская конвенция:</strong> Приложение II — мигрирующие виды</li>
      </ul>
      
      <h3>Национальные документы (Россия)</h3>
      <ul>
        <li><strong>Красная книга РФ:</strong> Категория 3 — редкий вид</li>
        <li><strong>Красная книга Забайкальского края:</strong> Категория 2 — сокращающийся в численности вид</li>
        <li><strong>Охота запрещена:</strong> с 2000 года</li>
      </ul>
      
      <h3>Основные угрозы</h3>
      <ol>
        <li><strong>Хозяйственное освоение степей (42%):</strong> распашка земель, выпас скота</li>
        <li><strong>Фрагментация ареала (28%):</strong> дороги, трубопроводы, заборы</li>
        <li><strong>Браконьерство (15%):</strong> охота ради меха и костей</li>
        <li><strong>Изменение климата (10%):</strong> деградация кормовой базы</li>
        <li><strong>Болезни (5%):</strong> токсоплазмоз от домашних кошек</li>
      </ol>
      
      <blockquote>
        «Охрана манула невозможна без охраны всей степной экосистемы. Вид-зонтик защищает не только себя, но и сотни других видов.»
      </blockquote>
      
      <h3>Меры охраны</h3>
      <ul>
        <li><strong>Создание ООПТ:</strong> заповедники, национальные парки, заказники</li>
        <li><strong>Мониторинг популяции:</strong> фотоловушки, учёт нор, GPS-трекинг</li>
        <li><strong>Борьба с браконьерством:</strong> рейды, штрафы, конфискация</li>
        <li><strong>Экопросвещение:</strong> работа с местным населением, туристами</li>
        <li><strong>Научные исследования:</strong> генетика, экология, поведение</li>
      </ul>
      
      <h3>Прогнозы</h3>
      <p>При сохранении текущих темпов деградации habitat к 2035 году популяция манула в России может сократиться на 30–40%. Для предотвращения этого необходимо увеличить площадь охраняемых территорий минимум на 25%.</p>
    `,
    readTime: "11 мин",
    author: "Эколог А.Р. Саидова",
    date: "3 марта 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/manul-portrait-serious-jkfEhUGCRutPaLtqJ6kU7v.webp",
  },
  {
    id: 6,
    icon: "🔬",
    tag: "Исследования",
    title: "Современные методы изучения манула",
    excerpt: "Фотоловушки, генетический анализ, GPS-трекинг — как технологии помогают учёным понимать жизнь манула.",
    content: `
      <h2>Технологии в изучении манула</h2>
      <p>За последние 10 лет методы изучения манула претерпели значительные изменения. Современные технологии позволяют получать данные, недоступные ранее.</p>
      
      <h3>Фотоловушки</h3>
      <p>Камеры с датчиками движения — основной метод учёта. Одна фотоловушка работает до 6 месяцев без обслуживания. Анализ фотографий позволяет:</p>
      <ul>
        <li>Оценить численность популяции</li>
        <li>Изучить суточную активность</li>
        <li>Идентифицировать отдельных особей (по уникальному рисунку шерсти)</li>
        <li>Зафиксировать поведение в естественной среде</li>
      </ul>
      
      <h3>GPS-трекинг</h3>
      <p>Ошейники с GPS-передатчиками позволяют отслеживать перемещения особей в реальном времени. Данные включают:</p>
      <ul>
        <li>Размер индивидуального участка</li>
        <li>Маршруты перемещения</li>
        <li>Места охоты и отдыха</li>
        <li>Взаимодействие с другими особями</li>
      </ul>
      
      <h3>Генетический анализ</h3>
      <p>Исследование ДНК из образцов шерсти, фекалий и тканей позволяет:</p>
      <ul>
        <li>Оценить генетическое разнообразие популяций</li>
        <li>Выявить степень изоляции между группами</li>
        <li>Определить родственные связи</li>
        <li>Отследить миграционные пути</li>
      </ul>
      
      <blockquote>
        «Генетический мониторинг показал, что популяции манула в Забайкалье изолированы от монгольских уже более 50 лет. Это критически важно для планирования охранных мер.»
      </blockquote>
      
      <h3>Анализ стабильных изотопов</h3>
      <p>Исследование изотопного состава шерсти и когтей позволяет реконструировать рацион особи за последние несколько месяцев без прямого наблюдения.</p>
      
      <h3>ИИ и машинное обучение</h3>
      <p>Алгоритмы компьютерного зрения автоматически распознают манулов на фотографиях с фотоловушек, экономя сотни часов ручной обработки данных.</p>
      
      <h3>Перспективные направления</h3>
      <ul>
        <li>eDNA (экологическая ДНК) — анализ ДНК из почвы и воды</li>
        <li>Акустический мониторинг — запись и анализ вокализаций</li>
        <li>Спутниковый мониторинг habitat — оценка деградации среды</li>
      </ul>
    `,
    readTime: "10 мин",
    author: "Д-р биол. наук К.Л. Воронов",
    date: "20 марта 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028299853/8L2kXdaSWJnYMai9Jh2ccC/hero-manul-Y2nGWWx4dn7WXd3xkt2JdN.webp",
  },
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

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
                  Научно-популярные материалы
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
              База знаний
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Научно-популярные материалы<br />
              <em className="text-[oklch(0.38_0.11_145)]">о мануле</em>
            </h1>
            <p className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Подробные статьи о биологии, экологии, поведении и охране манула. 
              Материалы подготовлены на основе научных исследований и актуальных данных.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, i) => (
                <article
                  key={article.id}
                  className="bg-white border border-[oklch(0.88_0.015_75)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex px-3 py-1 rounded-full bg-[oklch(0.93_0.04_145)] text-[oklch(0.38_0.11_145)] text-xs font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {article.icon} {article.tag}
                      </span>
                      <span className="text-xs text-[oklch(0.55_0.03_65)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-[oklch(0.20_0.03_65)] text-lg mb-3 leading-snug group-hover:text-[oklch(0.38_0.11_145)] transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {article.title}
                    </h3>
                    <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-4 line-clamp-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[oklch(0.45_0.03_65)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {article.author}
                      </span>
                      <span className="text-xs text-[oklch(0.38_0.11_145)] font-medium"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Читать →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Article Modal */}
        {selectedArticle && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                  aria-label="Закрыть"
                >
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {selectedArticle.icon} {selectedArticle.tag}
                    </span>
                    <span className="text-xs text-white/80"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {selectedArticle.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selectedArticle.title}
                  </h2>
                  <div className="text-sm text-white/80"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {selectedArticle.author} · {selectedArticle.date}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10">
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:font-serif prose-headings:text-[oklch(0.20_0.03_65)]
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-[oklch(0.45_0.03_65)] prose-p:leading-relaxed prose-p:mb-4
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
                    prose-li:text-[oklch(0.45_0.03_65)] prose-li:mb-2
                    prose-blockquote:border-l-4 prose-blockquote:border-[oklch(0.38_0.11_145)] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[oklch(0.38_0.11_145)] prose-blockquote:my-6
                    prose-strong:font-semibold prose-strong:text-[oklch(0.20_0.03_65)]"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
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
