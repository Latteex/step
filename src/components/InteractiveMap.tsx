

export interface HabitatPoint {
  id: string;
  name: string;
  region: string;
  x: number; // percentage from left
  y: number; // percentage from top
  description: string;
  features: string[];
  population?: string;
  threats?: string[];
}

const habitatPoints: HabitatPoint[] = [
  // Россия - с запада на восток
  {
    id: "altai",
    name: "Алтай",
    region: "Россия",
    x: 48,
    y: 35,
    description: "Западный предел ареала манула в России. Чуйская степь — ключевое местообитание.",
    features: [
      "Горно-степные ландшафты",
      "Чуйская степь — ключевое местообитание",
      "Близость к границам Казахстана, Монголии, Китая",
    ],
    population: "~150–250 особей",
    threats: ["Туризм", "Дорожное строительство"],
  },
  {
    id: "tyva",
    name: "Тыва",
    region: "Россия",
    x: 56,
    y: 38,
    description: "Периферийная популяция на границе с Монголией. Высокогорные степи.",
    features: [
      "Полупустынные ландшафты",
      "Высокогорные степи (до 3 000 м)",
      "Минимальная антропогенная нагрузка",
    ],
    population: "~300–500 особей",
    threats: ["Изоляция популяции", "Изменение климата"],
  },
  {
    id: "buryatia",
    name: "Бурятия",
    region: "Россия",
    x: 64,
    y: 35,
    description: "Значимая популяция на юге Бурятии. Трансграничная с Монголией.",
    features: [
      "Прибайкальские степи",
      "Смешанные ландшафты: степь + горная тайга",
      "Трансграничная популяция с Монголией",
    ],
    population: "~600–900 особей",
    threats: ["Фрагментация ареала", "Сокращение кормовой базы"],
  },
  {
    id: "zabaikalie",
    name: "Забайкальский край",
    region: "Россия",
    x: 73,
    y: 32,
    description: "Основной ареал манула в России. Ключевой регион для сохранения вида.",
    features: [
      "Степные и полупустынные ландшафты",
      "Высокая плотность пищух — основной кормовой базы",
      "Наличие нор сурков для укрытий",
      "Горный рельеф обеспечивает защиту",
    ],
    population: "~2 000–2 500 особей",
    threats: ["Распашка земель", "Развитие инфраструктуры", "Браконьерство"],
  },
  // Монголия - центр ареала
  {
    id: "mongolia",
    name: "Монголия",
    region: "Монголия",
    x: 60,
    y: 45,
    description: "Крупнейшая в мире популяция манула. ~60% глобального ареала.",
    features: [
      "Обширные степные пространства",
      "Минимальная хозяйственная деятельность",
      "Традиционное кочевое скотоводство",
      "Национальные парки и заповедники",
    ],
    population: "~5 000–7 000 особей",
    threats: ["Рост поголовья скота", "Охота ради меха"],
  },
  // Казахстан
  {
    id: "kazakhstan",
    name: "Казахстан",
    region: "Казахстан",
    x: 40,
    y: 42,
    description: "Восточный и юго-восточный Казахстан — важная часть ареала.",
    features: [
      "Полупустынные ландшафты",
      "Прибалхашские степи",
      "Алтайский регион на востоке",
    ],
    population: "~1 000–1 500 особей",
    threats: ["Освоение земель", "Сокращение численности сурков"],
  },
  // Кыргызстан
  {
    id: "kyrgyzstan",
    name: "Кыргызстан",
    region: "Кыргызстан",
    x: 45,
    y: 48,
    description: "Горные районы Кыргызстана — периферийная часть ареала.",
    features: [
      "Высокогорные степи Памиро-Алая",
      "Тянь-Шаньские хребты",
      "Заповедные территории",
    ],
    population: "~150–250 особей",
    threats: ["Браконьерство", "Конфликты с местным населением"],
  },
  // Китай
  {
    id: "china",
    name: "Китай (Тибет, Внутренняя Монголия)",
    region: "Китай",
    x: 70,
    y: 55,
    description: "Китай занимает ~25% глобального ареала манула.",
    features: [
      "Высокогорные плато Тибета (до 5 000 м)",
      "Степи Внутренней Монголии",
      "Экстремальные климатические условия",
    ],
    population: "~3 000–4 000 особей",
    threats: ["Перевыпас скота", "Добыча полезных ископаемых"],
  },
  // Афганистан
  {
    id: "afghanistan",
    name: "Афганистан",
    region: "Афганистан",
    x: 38,
    y: 50,
    description: "Северо-восточные горные районы Афганистана.",
    features: [
      "Горные степи Гиндукуша",
      "Минимальные исследования",
      "Трансграничная популяция с Таджикистаном",
    ],
    population: "~100–200 особей (оценка)",
    threats: ["Военные действия", "Отсутствие охраны", "Браконьерство"],
  },
  // Иран - западный предел
  {
    id: "iran",
    name: "Иран",
    region: "Иран",
    x: 28,
    y: 52,
    description: "Западный предел ареала манула. Популяция фрагментирована.",
    features: [
      "Полупустынные плато",
      "Горные степи Загроса",
      "Изолированные очаги обитания",
    ],
    population: "~50–100 особей",
    threats: ["Критическая фрагментация", "Охота", "Потеря местообитаний"],
  },
];

interface InteractiveMapProps {
  onPointSelect?: (point: HabitatPoint | null) => void;
  selectedPoint: HabitatPoint | null;
}

export function InteractiveMap({ onPointSelect, selectedPoint }: InteractiveMapProps) {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-[oklch(0.92_0.02_75)] to-[oklch(0.90_0.02_75)] rounded-3xl overflow-hidden border border-[oklch(0.85_0.015_75)] shadow-xl">
      {/* Map background - Asia political map */}
      <div className="absolute inset-0 flex items-center justify-center bg-[oklch(0.92_0.02_75)]">
        <img
          src="/map-of-asia.png"
          alt="Карта Азии" referrerPolicy="no-referrer" crossOrigin="anonymous"
          className="max-w-full max-h-full object-contain"
          draggable={false}
        />
      </div>

      {/* Habitat points */}
      {habitatPoints.map((point) => {
        const isSelected = selectedPoint?.id === point.id;
        return (
          <button
            key={point.id}
            onClick={() => onPointSelect?.(isSelected ? null : point)}
            className="absolute group"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isSelected ? 30 : 10,
            }}
          >
            {/* Pulse ring */}
            <span
              className={`absolute inset-0 rounded-full animate-ping ${
                isSelected ? 'bg-[oklch(0.38_0.11_145)]/60' : 'bg-[oklch(0.38_0.11_145)]/30'
              }`}
              style={{ width: '40px', height: '40px', marginLeft: '-12px', marginTop: '-12px' }}
            />
            
            {/* Main dot */}
            <span
              className={`relative flex items-center justify-center rounded-full transition-all duration-200 ${
                isSelected 
                  ? 'w-5 h-5 bg-[oklch(0.38_0.11_145)]' 
                  : 'w-3.5 h-3.5 bg-[oklch(0.50_0.11_145)] group-hover:w-4.5 group-hover:h-4.5'
              }`}
              style={{ boxShadow: '0 0 0 3px white, 0 2px 8px rgba(0,0,0,0.15)' }}
            />
            
            {/* Label */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-white/95 rounded-md text-xs font-semibold whitespace-nowrap transition-opacity duration-200 ${
                isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
              }`}
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                color: 'oklch(0.30_0.03_65)',
                fontSize: '11px',
              }}
            >
              {point.name.split(' ')[0]}
            </span>
          </button>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[oklch(0.88_0.015_75)] shadow-sm">
        <span className="w-3 h-3 rounded-full bg-[oklch(0.38_0.11_145)]" style={{ boxShadow: '0 0 0 2px white' }} />
        <span className="text-xs font-medium" style={{ fontFamily: "'Montserrat', sans-serif", color: 'oklch(0.40_0.03_65)' }}>
          Ареал манула
        </span>
      </div>

      {/* Info Panel */}
      {selectedPoint && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white rounded-2xl shadow-2xl border border-[oklch(0.88_0.015_75)] p-5 fade-up visible" style={{ zIndex: 40 }}>
          <button
            onClick={() => onPointSelect?.(null)}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[oklch(0.93_0.04_145)] flex items-center justify-center text-[oklch(0.40_0.03_65)] hover:bg-[oklch(0.88_0.04_145)] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="mb-3">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {selectedPoint.region}
            </div>
            <h3 className="text-lg font-bold text-[oklch(0.20_0.03_65)] mt-1"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {selectedPoint.name}
            </h3>
          </div>

          <p className="text-sm text-[oklch(0.50_0.03_65)] leading-relaxed mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {selectedPoint.description}
          </p>

          {selectedPoint.population && (
            <div className="mb-3 p-2.5 bg-[oklch(0.93_0.04_145)] rounded-lg">
              <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Популяция
              </div>
              <div className="text-sm font-bold text-[oklch(0.20_0.03_65)]"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {selectedPoint.population}
              </div>
            </div>
          )}

          <div className="mb-3">
            <div className="text-xs font-semibold text-[oklch(0.38_0.11_145)] mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Особенности
            </div>
            <ul className="space-y-1">
              {selectedPoint.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[oklch(0.50_0.03_65)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.38_0.11_145)] flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {selectedPoint.threats && selectedPoint.threats.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-[oklch(0.60_0.11_25)] mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Угрозы
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedPoint.threats.map((threat, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[oklch(0.93_0.04_25)] text-[oklch(0.50_0.11_25)] text-xs rounded-md font-medium"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {threat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile hint */}
      {!selectedPoint && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center md:hidden pointer-events-none" style={{ zIndex: 20 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs text-[oklch(0.50_0.03_65)] shadow-lg"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Нажмите на точку для информации
          </div>
        </div>
      )}
    </div>
  );
}
