import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/common/Button'
import { cn } from '@/utils/cn'

export const Home: React.FC = () => {
  return (
    <div
      className={cn(
        'min-h-screen bg-background-gray-main',
      )}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <Navbar
        title="Степной хранитель"
        subtitle="Защита манула"
        navItems={[
          { label: 'О мануле', href: '#about' },
          { label: 'Проблемы', href: '#problems' },
          { label: 'Как помочь', href: '#help' },
        ]}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto py-12 md:py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Защита манула
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl">
            Информационно-просветительская платформа о мануле — редкой дикой кошке Забайкалья
          </p>
          <div className="flex gap-4">
            <Button variant="primary-brand" size="lg">
              Узнать больше
            </Button>
            <Button variant="secondary-main" size="lg">
              Помочь сейчас
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto py-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            О мануле
          </h2>
          <p className="text-text-secondary text-lg mb-4">
            Манул (Otocolobus manul) — это редкий вид дикой кошки, обитающий в степях и полупустынях Центральной Азии.
            Этот уникальный хищник адаптировался к суровым условиям высокогорья и является важным звеном в экосистеме Забайкалья.
          </p>
          <p className="text-text-secondary text-lg">
            К сожалению, популяция манула сокращается из-за браконьерства, разрушения мест обитания и изменения климата.
            Наша миссия — привлечь внимание к проблемам этого удивительного вида и собрать поддержку для его защиты.
          </p>
        </section>

        {/* Problems Section */}
        <section id="problems" className="bg-background-white-main py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>
              Проблемы
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background-card p-6 rounded-lg shadow-sm border border-border-main">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Браконьерство</h3>
                <p className="text-text-secondary">
                  Незаконная охота ради меха и традиционной медицины продолжает угрожать популяции манула.
                </p>
              </div>
              <div className="bg-background-card p-6 rounded-lg shadow-sm border border-border-main">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Потеря среды обитания</h3>
                <p className="text-text-secondary">
                  Расширение сельскохозяйственных земель и развитие инфраструктуры сокращают естественные местообитания вида.
                </p>
              </div>
              <div className="bg-background-card p-6 rounded-lg shadow-sm border border-border-main">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Изменение климата</h3>
                <p className="text-text-secondary">
                  Глобальные климатические изменения влияют на доступность пищи и условия выживания манула.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Help Section */}
        <section id="help" className="container mx-auto py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>
            Как помочь
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-button-primary-brand flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Распространяйте информацию</h3>
                  <p className="text-text-secondary">Рассказывайте друзьям и знакомым о проблеме исчезновения манула.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-button-primary-brand flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Поддержите природоохранные организации</h3>
                  <p className="text-text-secondary">Внесите свой вклад в фонды, занимающиеся защитой манула.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-button-primary-brand flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Станьте волонтёром</h3>
                  <p className="text-text-secondary">Участвуйте в программах по исследованию и защите вида.</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button variant="primary-brand" size="lg">
                Стать волонтёром
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background-nav py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-text-secondary text-sm">
              © 2024 Степной хранитель — Защита манула. Все права защищены.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
