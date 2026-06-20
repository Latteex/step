import Footer from "@/components/Footer";

export default function PersonalDataPolicy() {
  return (
    <div className="min-h-screen bg-[oklch(0.95_0.015_85)]">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[oklch(0.93_0.04_145)] to-[oklch(0.90_0.04_145)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/manul-portrait-serious.webp"
            alt="Манул"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.93_0.04_145)]/90 to-[oklch(0.90_0.04_145)]/90" />
        </div>
        <div className="container text-center relative">
          <div
            className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Правовая информация
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.20_0.03_65)] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Политика<br />
            <em>обработки персональных данных</em>
          </h1>
          <p
            className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Условия обработки, хранения и защиты персональных данных пользователей 
            сайта «Степной хранитель» в соответствии с ФЗ-152.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="bg-white border border-[oklch(0.88_0.015_75)] rounded-3xl p-8 md:p-12 space-y-10">
            
            {/* 1. Общие положения */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                1. Общие положения
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Настоящая Политика обработки персональных данных (далее — «Политика») составлена 
                  в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» 
                  (далее — ФЗ-152) и определяет политику Общества с ограниченной ответственностью 
                  «Степной хранитель» (далее — Оператор) по обработке и защите персональных данных.
                </p>
                <p>
                  <strong>Оператор:</strong> Студенческая инициатива проекта «Степной хранитель», 
                  представляемая участниками проекта Финансового университета при Правительстве РФ.
                </p>
                <p>
                  <strong>Дата вступления в силу:</strong> 15 января 2026 г.
                </p>
              </div>
            </div>

            {/* 2. Перечень данных */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                2. Перечень персональных данных, подлежащих обработке
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Оператор может обрабатывать следующие персональные данные Пользователя:</p>
                
                <div className="bg-[oklch(0.93_0.04_145)]/30 border border-[oklch(0.85_0.04_145)] rounded-xl p-5 mt-4">
                  <h3 className="font-bold text-[oklch(0.20_0.03_65)] mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    2.1. Данные, предоставляемые пользователем добровольно:
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Имя (фамилия, имя)</li>
                    <li>Электронная почта (email)</li>
                    <li>Текст обращения / предложения (содержание пользовательского контента)</li>
                  </ul>
                </div>

                <div className="bg-[oklch(0.93_0.04_145)]/30 border border-[oklch(0.85_0.04_145)] rounded-xl p-5 mt-4">
                  <h3 className="font-bold text-[oklch(0.20_0.03_65)] mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    2.2. Данные, автоматически предоставляемые при использовании Сайта:
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP-адрес</li>
                    <li>Информация, полученная с помощью cookie-файлов</li>
                    <li>Данные о браузере (или иной программе, через которую осуществляется доступ)</li>
                    <li>Время доступа</li>
                    <li>Реферер (адрес предыдущей страницы)</li>
                    <li>User-Agent (параметры браузера)</li>
                  </ul>
                </div>

                <p className="mt-4">
                  <strong>Безопасные протоколы:</strong> Оператор обеспечивает безопасную передачу 
                  персональных данных пользователя с использованием протокола HTTPS.
                </p>
              </div>
            </div>

            {/* 3. Цели */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                3. Цели обработки персональных данных
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Персональные данные пользователя Оператор обрабатывает в следующих целях:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Обработка запросов и обращений пользователей (через формы на Сайте)</li>
                  <li>Предоставление пользователям доступной информации</li>
                  <li>Настройка Сайта под индивидуальные потребности пользователя</li>
                  <li>Улучшение качества Сайта и удобства пользования</li>
                  <li>Статистический анализ посещаемости и использования Сайта</li>
                  <li>Проведение исследований, связанных с защитой природы</li>
                </ol>
              </div>
            </div>

            {/* 4. Принципы */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                4. Принципы обработки персональных данных
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Обработка персональных данных осуществляется на основе и соблюдением следующих принципов (ст. 5 ФЗ-152):</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Законность:</strong> обработка осуществляется на законной и справедливой основе</li>
                  <li><strong>Ограничение целей:</strong> обработка ограничена достижением конкретных, заранее определённых целей</li>
                  <li><strong>Соответствие:</strong> объём и характер обрабатываемых данных соответствуют заявленным целям</li>
                  <li><strong>Достаточность:</strong> обрабатываемые персональные данные являются достаточными для целей обработки</li>
                  <li><strong>Точность:</strong> данные должны быть точными и при необходимости обновляться</li>
                  <li><strong>Ограничение хранения:</strong> хранение данных осуществляется не дольше, чем этого требуют цели</li>
                </ol>
              </div>
            </div>

            {/* 5. Согласие */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                5. Согласие пользователя на обработку персональных данных
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Использование Сайта означает безоговорочное согласие пользователя с настоящей 
                  Политикой и указанными в ней условиями. Если пользователь не согласен с данными 
                  условиями, он должен прекратить использование Сайта.
                </p>
                <p>
                  <strong>Порядок получения согласия:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>При заполнении форм на Сайте — путём отправки заполненной формы (активное действие пользователя)</li>
                  <li>При первом посещении Сайта — путём продолжения использования Сайта после ознакомления с Политикой</li>
                </ul>
                <p className="mt-4">
                  <strong>Отзыв согласия:</strong> Пользователь может отозвать своё согласие на обработку 
                  персональных данных, направив письменное уведомление Оператору на 
                  <strong> stepnoy.hranitel@fa.ru</strong>.
                </p>
              </div>
            </div>

            {/* 6. Порядок */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                6. Порядок сбора, хранения, передачи и других видов обработки
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  <strong>Оператор обеспечивает сохранность персональных данных</strong> и принимает 
                  дополнительные меры, исключающие доступ к персональным данным неуполномоченных лиц.
                </p>
                <p>
                  <strong>Персональные данные пользователя</strong> Оператор не передаётся третьим лицам 
                  за исключением случаев, прямо предусмотренных настоящей Политикой.
                </p>
                
                <div className="bg-[oklch(0.93_0.04_145)]/30 border border-[oklch(0.85_0.04_145)] rounded-xl p-5 mt-4">
                  <h3 className="font-bold text-[oklch(0.20_0.03_65)] mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Хранение персональных данных:
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Персональные данные хранятся в электронной форме</li>
                    <li>Хранение осуществляется на серверах, расположенных на территории РФ</li>
                    <li>Срок хранения определяется достижением целей обработки или отзывом согласия</li>
                    <li>После достижения целей данные подлежат уничтожению</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. Права пользователя */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                7. Права пользователя
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Пользователь имеет право на:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Получение информации, касающейся обработки его персональных данных</li>
                  <li>Требовать от Оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если они являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                  <li>Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке</li>
                </ol>
                <p className="mt-4">
                  Для реализации указанных прав пользователь направляет запрос Оператору по адресу: 
                  <strong> stepnoy.hranitel@fa.ru</strong>
                </p>
              </div>
            </div>

            {/* 8. Обязанности */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                8. Обязанности Оператора
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Оператор имеет право:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Получвать достоверные данные о пользователе</li>
                  <li>Вносить изменения в настоящую Политику</li>
                  <li>Ограничивать доступ к Сайту в случае нарушения пользователем условий Политики</li>
                </ol>
                <p className="mt-4">Оператор обязан:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Использовать полученные данные исключительно для указанных в Политике целей</li>
                  <li>Обеспечить конфиденциальность персональных данных</li>
                  <li>Принимать меры для уничтожения или блокирования персональных данных по достижении целей обработки</li>
                  <li>Отвечать на обращения пользователей в сроки, установленные ФЗ-152</li>
                  <li>Опубликовывать или обеспечивать беспрепятственный доступ к настоящей Политике</li>
                </ol>
              </div>
            </div>

            {/* 9. Ответственность */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                9. Ответственность сторон
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Оператор несёт ответственность за обработку персональных данных в соответствии 
                  с законодательством Российской Федерации.
                </p>
                <p>
                  В случае утраты или раскрытия персональных данных Оператор не несёт ответственность, 
                  если указанные данные стали публичным достоянием до их утраты или раскрытия, 
                  а также в случае действий непреодолимой силы.
                </p>
              </div>
            </div>

            {/* 10. Разрешение споров */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                10. Разрешение споров
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  До обращения в суд с иском по спорам, возникающим из отношений между Пользователем 
                  и Оператором, Пользователь предъявляет претензию. Письменная претензия принимается 
                  на адрес: <strong>stepnoy.hranitel@fa.ru</strong>.
                </p>
                <p>
                  Срок рассмотрения претензии — 30 дней с момента получения.
                </p>
                <p>
                  При не достижении соглашения спор подлежит разрешению в судебном порядке 
                  в соответствии с законодательством РФ.
                </p>
              </div>
            </div>

            {/* 11. Заключительные положения */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                11. Заключительные положения
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Настоящая Политика действует бессрочно до её замены новой редакцией. 
                  Все изменения публикуются на Сайте.
                </p>
                <p>
                  Настоящая Политика может быть изменена Оператором без уведомления пользователя. 
                  Новая редакция Политики вступает в силу с момента её размещения на Сайте.
                </p>
                <p>
                  Дата последнего обновления: <strong>15 января 2026 г.</strong>
                </p>
                <p className="text-sm text-[oklch(0.55_0.03_65)] mt-6 pt-4 border-t border-[oklch(0.88_0.015_75)]">
                  Настоящая Политика составлена в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ 
                  «О персональных данных», Гражданским кодексом Российской Федерации и иными нормативными 
                  правовыми актами Российской Федерации.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
