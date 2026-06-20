import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
            <em>конфиденциальности</em>
          </h1>
          <p
            className="text-[oklch(0.45_0.03_65)] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Настоящая политика разработана в соответствии с Федеральным законом 
            от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок 
            обработки данных пользователей сайта.
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
                  Настоящая Политика конфиденциальности (далее — «Политика») применяется к сайту 
                  «Степной хранитель» (далее — «Сайт»), расположенному по адресу 
                  <strong> stepnoy-hranitel.ru</strong> (доменное имя может быть изменено).
                </p>
                <p>
                  Администрация Сайта вправе вносить изменения в настоящую Политику. Новая редакция 
                  вступает в силу с момента размещения на Сайте, если иное не предусмотрено новой 
                  редакцией.
                </p>
                <p>
                  Используя Сайт, вы подтверждаете своё ознакомление с настоящей Политикой и согласие 
                  на обработку персональных данных в соответствии с ней.
                </p>
              </div>
            </div>

            {/* 2. Какие данные собираются */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                2. Какие персональные данные мы обрабатываем
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Мы обрабатываем следующие категории персональных данных:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Имя</strong> — для идентификации пользователя при отправке предложений</li>
                  <li><strong>Электронная почта (email)</strong> — для связи с пользователем</li>
                  <li><strong>Текст предложения/обращения</strong> — для обработки пользовательского контента</li>
                </ul>
                <p className="mt-4">
                  <strong>Автоматически собираемые данные:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP-адрес</li>
                  <li>Информация о браузере и устройстве</li>
                  <li>Дата и время обращения</li>
                  <li>Страницы Сайта, которые посещает пользователь</li>
                  <li>Файлы cookie (включая cookie предпочтений темы оформления)</li>
                </ul>
              </div>
            </div>

            {/* 3. Цели обработки */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                3. Цели обработки персональных данных
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Персональные данные обрабатываются в следующих целях:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Обработка пользовательских обращений и предложений (через формы на Сайте)</li>
                  <li>Связь с пользователем для уточнения деталей обращения</li>
                  <li>Аналитика использования Сайта и улучшение пользовательского опыта</li>
                  <li>Настройка отображения Сайта (выбор цветовой темы)</li>
                  <li>Статистические и исследовательские цели</li>
                </ul>
              </div>
            </div>

            {/* 4. Правовые основания */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                4. Правовые основания обработки
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Обработка персональных данных осуществляется на следующих правовых основаниях:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Согласие субъекта персональных данных (ст. 6 ч. 1 п. 1 ФЗ-152)</li>
                  <li>Необходимость обработки для достижения целей, указанных в настоящей Политике</li>
                  <li>Обработка общедоступных данных, предоставленных пользователем</li>
                </ul>
              </div>
            </div>

            {/* 5. Условия обработки */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                5. Условия обработки персональных данных
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Обработка персональных данных осуществляется на территории Российской Федерации 
                в соответствии с законодательством РФ.</p>
                <p>
                  <strong>Срок обработки:</strong> до момента достижения целей обработки или до отзыва 
                  согласия пользователя, если иное не предусмотрено законодательством РФ.
                </p>
                <p>
                  <strong>Меры защиты:</strong> Администрация Сайта принимает необходимые организационные 
                  и технические меры для защиты персональных данных от неправомерной обработки, включая:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ограничение доступа к персональным данным</li>
                  <li>Защиту от несанкционированного доступа</li>
                  <li>Резервное копирование данных</li>
                </ul>
              </div>
            </div>

            {/* 6. Передача данных */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                6. Передача данных третьим лицам
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Администрация Сайта <strong>не продаёт, не обменивает и не раскрывает</strong> 
                  переданные третьим лицам персональные данные пользователей, за исключением случаев, 
                  предусмотренных законодательством РФ.
                </p>
                <p>
                  Данные могут быть переданы третьим лицам в следующих случаях:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>С согласия пользователя</li>
                  <li>По запросу уполномоченных органов РФ</li>
                  <li>Для обеспечения функционирования Сайта (хостинг, аналитика)</li>
                </ul>
                <p>
                  Для аналитики используются сервисы, которые не передают данные пользователям Сайта 
                  для своих маркетинговых целей.
                </p>
              </div>
            </div>

            {/* 7. Cookie */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                7. Файлы cookie
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Сайт использует файлы cookie для обеспечения корректной работы и улучшения 
                  пользовательского опыта.
                </p>
                <p>
                  <strong>Используемые cookie:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Технические (необходимые):</strong> для работы Сайта (авторизация, безопасность)</li>
                  <li><strong>Функциональные:</strong> для запоминания настроек (выбор цветовой темы)</li>
                </ul>
                <p>
                  Пользователь может отключить использование cookie в настройках своего браузера. 
                  Обратите внимание, что в этом ряде функций Сайта могут работать некорректно.
                </p>
              </div>
            </div>

            {/* 8. Права пользователя */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                8. Права пользователя
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>Пользователь имеет следующие права в отношении своих персональных данных:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Право на получение информации</strong> об обработке своих персональных данных</li>
                  <li><strong>Право на доступ</strong> к своим персональным данным</li>
                  <li><strong>Право на уточнение (обновление, изменение)</strong> персональных данных</li>
                  <li><strong>Право на блокирование</strong> персональных данных</li>
                  <li><strong>Право на уничтожение</strong> персональных данных</li>
                  <li><strong>Право на отзыв согласия</strong> на обработку персональных данных</li>
                  <li><strong>Право на обжалование</strong> действий/бездействия при обработке персональных данных</li>
                </ul>
                <p className="mt-4">
                  Для реализации указанных прав направьте запрос на электронную почту: 
                  <strong> stepnoy.hranitel@fa.ru</strong>
                </p>
              </div>
            </div>

            {/* 9. Обратная связь */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                9. Порядок обращения по вопросам обработки персональных данных
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Все вопросы, связанные с обработкой персональных данных, можно направить по адресу: 
                  <strong> stepnoy.hranitel@fa.ru</strong>
                </p>
                <p>
                  Ответ на запрос предоставляется в течение 30 дней с момента получения запроса 
                  в соответствии с ч. 1 ст. 21 ФЗ-152.
                </p>
              </div>
            </div>

            {/* 10. Заключительные положения */}
            <div>
              <h2 className="text-2xl font-bold text-[oklch(0.20_0.03_65)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                10. Заключительные положения
              </h2>
              <div className="space-y-4 text-[oklch(0.45_0.03_65)] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <p>
                  Настоящая Политика является публичным документом и доступна по любому адресу 
                  Сайта в разделе «Документы».
                </p>
                <p>
                  Дата последнего обновления: <strong>15 января 2026 г.</strong>
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
