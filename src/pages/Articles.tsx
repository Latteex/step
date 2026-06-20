import { useState } from "react";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

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
          </div>
          <div className="container text-center relative">
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
        <Footer />
      </div>
  );
}
