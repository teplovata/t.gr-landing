import { useState } from 'react';

// Иконки
const CheckIcon = ({ className = "w-5 h-5 text-accent" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Данные карусели
const carExamples = [
  { id: 1, name: 'LiXiang L9', year: '2024', price: '6 850 000 ₽', image: 'https://images.unsplash.com/photo-1617624085910-b3f33b5b6b5d?w=600&auto=format&fit=crop' },
  { id: 2, name: 'Zeekr 001', year: '2023', price: '5 200 000 ₽', image: 'https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=600&auto=format&fit=crop' },
  { id: 3, name: 'BYD Han', year: '2024', price: '4 950 000 ₽', image: 'https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=600&auto=format&fit=crop' },
  { id: 4, name: 'Exeed RX', year: '2024', price: '4 600 000 ₽', image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=600&auto=format&fit=crop' },
];

// Компонент фиксированной шапки
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brutal-black/95 backdrop-blur-sm border-b border-mid-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-white">T.</span>
          <span className="text-accent">GR</span>
          <span className="text-white font-normal ml-2">| АВТО ИЗ КИТАЯ</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <button onClick={() => scrollToSection('hero')} className="text-white hover:text-accent transition-colors">Главная</button>
          <button onClick={() => scrollToSection('for-whom')} className="text-white hover:text-accent transition-colors">Для кого</button>
          <button onClick={() => scrollToSection('roadmap')} className="text-white hover:text-accent transition-colors">Как работаем</button>
          <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-accent transition-colors">Стоимость</button>
          <button onClick={() => scrollToSection('examples')} className="text-white hover:text-accent transition-colors">Примеры</button>
          <button onClick={() => scrollToSection('guarantee')} className="text-white hover:text-accent transition-colors">Гарантии</button>
        </nav>
        <a
          href="https://t.me/your_telegram"
          className="hidden md:block border border-accent text-accent hover:bg-accent hover:text-black px-4 py-2 text-sm font-bold transition-colors"
        >
          Связаться
        </a>
        {/* Мобильная кнопка меню (упрощённо) */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carExamples.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carExamples.length) % carExamples.length);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Отступ под фиксированную шапку */}
      <div className="h-16 md:h-20"></div>

      {/* 1. Hero (чёрный фон) */}
      <section id="hero" className="bg-brutal-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                Поставка авто из Китая под ключ:
                <span className="block text-accent">ваш контроль — наше исполнение</span>
              </h1>
              <p className="text-light-gray text-lg md:text-xl mb-8 max-w-lg">
                Работаем с частными подборщиками и малым бизнесом. Бесплатно для вас. На себя берем логистику, проверку качества и юридическую чистоту.
              </p>
              <a
                href="https://t.me/your_telegram"
                className="inline-block bg-accent hover:bg-orange-600 text-black font-bold py-3 px-8 rounded-none transition-colors"
              >
                Рассчитать стоимость
              </a>
            </div>
            <div className="relative h-64 md:h-96 bg-dark-gray border border-mid-gray">
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop"
                alt="Инспекция авто"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-r from-brutal-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Кому нужно (белый фон) */}
      <section id="for-whom" className="section-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Кому это нужно</h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Если вы — частный специалист по подбору авто из Китая, и у вас есть очередь из знакомых, а времени сидеть на китайских аукционах или ругаться с брокерами нет — мы ваша служба тыла.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-accent mb-2">Ваша задача</h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start gap-2"><CheckIcon /> <span>Найти клиента</span></li>
                <li className="flex items-start gap-2"><CheckIcon /> <span>Взять депозит</span></li>
                <li className="flex items-start gap-2"><CheckIcon /> <span>Получить комиссию</span></li>
              </ul>
            </div>
            <div className="border border-gray-300 p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-accent mb-2">Наша задача</h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start gap-2"><CheckIcon /> <span>Подбор вариантов (бесплатно)</span></li>
                <li className="flex items-start gap-2"><CheckIcon /> <span>Полная проверка в Китае</span></li>
                <li className="flex items-start gap-2"><CheckIcon /> <span>Доставка до города РФ с контролем</span></li>
                <li className="flex items-start gap-2"><CheckIcon /> <span>Передача клиенту с вашими документами</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Дорожная карта (чёрный фон) */}
      <section id="roadmap" className="bg-brutal-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Как мы работаем</h2>
          {/* <p className="text-light-gray text-lg mb-10">Шесть этапов. Одна фиксированная стоимость.</p> */}

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-mid-gray"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
              {[
                { step: 1, title: 'Запрос', desc: 'Вы даете модель и бюджет клиента. Мы бесплатно присылаем варианты.' },
                { step: 2, title: 'Инвойс и депозит', desc: 'Вы выставляете инвойс клиенту. Депозит поступает продавцу в Китае.' },
                { step: 3, title: 'Инспекция', desc: 'Наш представитель осматривает авто. Фото и видеоотчет до оплаты.' },
                { step: 4, title: 'Логистика', desc: 'Морской фрахт или ЖД. Полное документальное сопровождение.' },
                { step: 5, title: 'Растаможка', desc: 'Взаимодействие с брокером в РФ, оплата пошлин клиентом.' },
                { step: 6, title: 'Выдача', desc: 'Финальный осмотр на СВХ. Передача авто вашему клиенту.' },
              ].map((item) => {
                return (
                  <div key={item.step} className="bg-dark-gray border border-mid-gray p-5 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-accent">{item.step}</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-light-gray">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Стоимость (белый фон) */}
      <section id="pricing" className="section-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Сколько это стоит</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="border border-gray-300 p-8 bg-gray-50">
              <div className="text-accent text-sm font-bold tracking-wider mb-1">ЭТАП 1. КИТАЙ</div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className="text-4xl font-bold text-gray-900">10 000 ¥</p>
                <p className="text-3xl mb-2 text-gray-600">(≈ 111 960 ₽)</p>
              </div>
              <p className="text-gray-600 mb-4">Платеж продавцу / площадке</p>
              <p className="text-sm border-t border-gray-300 pt-4 text-gray-700">
                Фиксированная предоплата за автомобиль. Вносится клиентом напрямую или через нас на инвойс в Китае. Возвратна только при отказе продавца.
              </p>
            </div>
            <div className="border border-gray-300 p-8 bg-gray-50">
              <div className="text-accent text-sm font-bold tracking-wider mb-1">ЭТАП 2. РОССИЯ</div>
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className="text-4xl font-bold text-gray-900">40 000</span>
                <span className="text-4xl text-gray-400 mx-1">—</span>
                <span className="text-4xl font-bold text-gray-900">50 000</span>
                <span className="text-4xl font-bold text-gray-900 ml-1">₽</span>
              </div>
              <p className="text-gray-600 mb-4">Наше вознаграждение + Ваша надбавка</p>
              <p className="text-sm border-t border-gray-300 pt-4 text-gray-700">
                Оплата наших услуг по проверке, логистике и оформлению. <span className="font-bold text-gray-900">Вы сами решаете, сколько добавить сверху для себя.</span>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-300 p-6 text-sm text-gray-700">
            <p className="font-bold text-gray-900 mb-2">Что входит в наши 40 000 — 50 000 ₽:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Выездной осмотр авто в Китае (фото/видеоотчет)</li>
              <li>Организация перевозки</li>
              <li>Взаимодействие с таможенным брокером в РФ</li>
              <li>Контроль выдачи авто на СВХ</li>
            </ul>
            <p className="font-bold text-gray-900 mb-2 mt-6">Не входит:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Таможенные пошлины и утильсбор (оплачиваются отдельно клиентом по факту растаможки)</li>
              <li>Ваша личная комиссия (назначаете сами)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Карусель авто (чёрный фон) */}
      <section id="examples" className="bg-brutal-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-2">Реальные примеры заказов</h2>
          <p className="text-light-gray mb-8">Это не склад. Это то, что мы уже привезли нашим партнерам за последние 3 месяца</p>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carExamples.map((car) => (
                  <div key={car.id} className="w-full shrink-0 px-2">
                    <div className="border border-mid-gray bg-dark-gray">
                      <img src={car.image} alt={car.name} className="w-full lg:h-100 h-64 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-bold">{car.name} {car.year}</h3>
                        <p className="text-accent font-bold text-lg">{car.price}</p>
                        <p className="text-sm text-light-gray mt-2">Привезено под клиента в Москву</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-brutal-black/80 border border-mid-gray p-2 hover:bg-accent hover:text-black transition-colors"
              aria-label="Предыдущий"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-brutal-black/80 border border-mid-gray p-2 hover:bg-accent hover:text-black transition-colors"
              aria-label="Следующий"
            >
              →
            </button>
          </div>
          <p className="text-center text-sm text-light-gray mt-4">
            {currentSlide + 1} / {carExamples.length}
          </p>
        </div>
      </section>

      {/* 6. Гарантии и Договор (белый фон) */}
      <section id="guarantee" className="section-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Работаем только по договору и в белую</h2>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span><span className="font-bold">Юридическое лицо РФ.</span> Платежи только на расчетный счет.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span><span className="font-bold">Фиксация условий.</span> В договоре прописаны сроки осмотра, условия возврата средств при браке.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span><span className="font-bold">Прозрачность.</span> Вы получаете копии экспортных деклараций.</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="/contract-example.pdf"
                  className="inline-block border border-accent text-accent hover:bg-accent hover:text-black font-bold py-3 px-6 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Скачать пример договора (PDF)
                </a>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-300 p-8">
              <p className="text-lg italic text-gray-800">«Если мы упустили царапину при осмотре в Китае — это наша проблема, не ваша и не клиента.»</p>
              <div className="mt-4 text-sm text-gray-600">— принцип нашей работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Контакты (чёрный фон) */}
      <footer id="contacts" className="bg-brutal-black text-white py-12 border-t border-mid-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Обсудить заказ</h2>
          <a
            href="https://t.me/your_telegram"
            className="text-2xl font-mono border-b-2 border-accent pb-1 hover:text-accent transition-colors"
          >
            +7 (XXX) XXX-XX-XX
          </a>
          <p className="text-light-gray mt-4">Telegram / WhatsApp</p>
          <p className="text-light-gray mt-2">Денис, руководитель направления Китай</p>

          <div className="mt-12 text-xs text-light-gray/50 border-t border-mid-gray pt-6">
            <p>ИП Ващенко Д.Батькович · ИНН 1234567890 · ОГРН 1234567890123</p>
            <p className="mt-2">© 2026 Все права защищены. Работаем по договору.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;