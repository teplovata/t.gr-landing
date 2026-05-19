// import { useState } from 'react';
import accentBg from './assets/bg-hero.jpg';
import carHero from './assets/car-hero1.png';
import document from './assets/doc.jpg'
// import stamp1 from './assets/stamp1.png';
// import stamp2 from './assets/stamp2.png';

// Иконки
const CheckIcon = ({ className = "w-5 h-5 text-accent" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-blue-600' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Данные карусели
// const carExamples = [
//   { id: 1, name: 'LiXiang L9', year: '2024', price: '6 850 000 ₽', image: 'https://images.unsplash.com/photo-1617624085910-b3f33b5b6b5d?w=600&auto=format&fit=crop' },
//   { id: 2, name: 'Zeekr 001', year: '2023', price: '5 200 000 ₽', image: 'https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=600&auto=format&fit=crop' },
//   { id: 3, name: 'BYD Han', year: '2024', price: '4 950 000 ₽', image: 'https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=600&auto=format&fit=crop' },
//   { id: 4, name: 'Exeed RX', year: '2024', price: '4 600 000 ₽', image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=600&auto=format&fit=crop' },
// ];

// Компонент фиксированной шапки
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brutal-black backdrop-blur-sm ">
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
          className="btn hidden md:block border border-accent text-accent hover:bg-accent hover:text-black px-4 py-2 text-sm font-bold transition-colors"
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
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carExamples.length);
  // const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carExamples.length) % carExamples.length);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Отступ под фиксированную шапку */}
      <div className="h-16 md:h-20"></div>

      {/* 1. Hero  */}
      <section id="hero" className="relative bg-cover bg-center bg-no-repeat py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px]"
          style={{ backgroundImage: `url(${accentBg})` }}></div>
        <div className="absolute inset-0 bg-black/70 "></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                Поставка авто из Китая под ключ:
                <span className="block text-accent">ваш клиент — наша работа</span>
              </h1>
              <p className="text-light-gray text-lg md:text-xl mb-8 max-w-lg">
                Работаем по партнёрской модели. Вы привлекаете клиента и зарабатываете на своей марже — мы берём на себя Китай: проверку, выкуп, логистику и документы.
              </p>
              <a
                href="https://t.me/your_telegram"
                className="btn inline-block bg-accent hover:bg-accent-hover text-black font-bold py-3 px-8 transition-colors"
              >
                Рассчитать стоимость
              </a>
            </div>
            <div className="relative h-full md:h-65">
              <img
                src={carHero}
                alt="Авто"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Кому нужно (белый фон) */}
      {/* <section id="for-whom" className="section-white py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Кому это нужно</h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Вы хотите работать с авто из Китая, но у вас нет связей, опыта или понимания, как устроены сделки на китайской стороне. Мы — ваша команда в Китае, которая работает напрямую с китайскими дилерами.
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
                <li className="flex items-start gap-2"><CheckIcon /> <span>Подбор вариантов</span></li>
                <li className="flex items-start gap-2"><CheckIcon /> <span>Полная проверка в Китае</span></li>
                <li className="flex items-start gap-2"><CheckIcon /> <span>Доставка до города РФ с контролем</span></li>
                <li className="flex items-start gap-2"><CheckIcon /> <span>Выдача автомобиля клиенту</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* 3. Дорожная карта (чёрный фон) */}
      <section id="roadmap" className="bg-linear-to-r from-brutal-black to-accent text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Как мы работаем</h2>
          {/* <p className="text-light-gray text-lg mb-10">Шесть этапов. Одна фиксированная стоимость.</p> */}

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-accent"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
              {[
                { step: 1, title: 'Запрос', desc: 'Вы даете модель и бюджет клиента. Мы присылаем варианты.' },
                { step: 2, title: 'Инспекция', desc: 'Делаем полную диагностику автомобиля и присылаем фото и видеоотчет до оплаты.' },
                { step: 3, title: 'Инвойс', desc: 'Бронируем автомобиль и выставляем на него инвойс.' },
                { step: 4, title: 'Логистика', desc: 'Забираем автомобиль, готовим документы и отправляем в город таможенного оформления.' },
                { step: 5, title: 'Растаможка', desc: 'Взаимодействие с брокером в РФ, помощь клиенту с оплатой пошлин.' },
                { step: 6, title: 'Логистика и выдача', desc: 'Организовываем транспортировку авто в город клиента.' },
              ].map((item) => {
                return (
                  <div key={item.step} className="bg-white  rounded-xl p-5 relative z-10 overflow-hidden">
                    <div className="flex items-center gap-2 mb-2 justify-end">
                      <span className="absolute -top-1 right-1 text-9xl font-bold text-accent/15 leading-none pointer-events-none select-none">{item.step}</span>
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-accent font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-mid-gray">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Стоимость (белый фон) */}
      <section id="pricing" className="section-white py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Сколько это стоит</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Карточка Китай */}
            <div className="border border-gray-300 p-8 bg-gray-50 rounded-xl relative">
              {/* Иконка Китая */}
              <div className="absolute top-4 right-4 text-5xl select-none pointer-events-none">
                🇨🇳
              </div>

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

            {/* Карточка Россия */}
            <div className="border border-gray-300 p-8 bg-gray-50 rounded-xl relative">
              {/* Иконка России */}
              <div className="absolute top-4 right-4 text-5xl select-none pointer-events-none">
                🇷🇺
              </div>

              <div className="text-accent text-sm font-bold tracking-wider mb-1">ЭТАП 2. РОССИЯ</div>
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className="text-4xl font-bold text-gray-900">50 000</span>
                <span className="text-4xl font-bold text-gray-900 ml-1">₽</span>
              </div>
              <p className="text-gray-600 mb-4">Наше вознаграждение + Ваша надбавка</p>
              <p className="text-sm border-t border-gray-300 pt-4 text-gray-700">
                Оплата наших услуг по проверке, логистике и оформлению.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-300 p-6 text-sm rounded-xl">
            <p className="font-bold text-gray-900 text-base mb-5">
              Что входит в наши 50 000 ₽:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Этап 1: Поиск и сделка */}
              <div className="border border-gray-200 bg-white p-4 rounded-xl">
                <div className="text-accent text-xs font-bold tracking-wider mb-3">
                  ЭТАП 1. ПОИСК И СДЕЛКА
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Поиск автомобиля за рубежом по заданным параметрам</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Ведение переговоров с продавцами от имени клиента</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Контроль оплаты</span>
                  </li>
                </ul>
              </div>

              {/* Этап 2: Проверка и подготовка */}
              <div className="border border-gray-200 bg-white p-4 rounded-xl">
                <div className="text-accent text-xs font-bold tracking-wider mb-3">
                  ЭТАП 2. ПРОВЕРКА И ОТПРАВКА
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Проверка авто в Китае (фото/видеоотчет)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Подготовка к транспортировке: экспортные документы</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Организация вывоза авто из Китая до таможни</span>
                  </li>
                </ul>
              </div>

              {/* Этап 3: Доставка и выдача */}
              <div className="border border-gray-200 bg-white p-4 rounded-xl">
                <div className="text-accent text-xs font-bold tracking-wider mb-3">
                  ЭТАП 3. ТАМОЖНЯ И ВЫДАЧА
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Контроль документов на всех этапах логистики</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Информирование о ходе логистики</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Организация и сопровождение таможенной очистки</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckIcon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>Организация доставки в город клиента</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Карусель авто (чёрный фон) */}
      {/* <section id="examples" className="bg-linear-to-r from-brutal-black via-accent to-white text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-2">Реальные примеры заказов</h2>
          <p className="text-white mb-8">Это не склад. Это то, что мы уже привезли нашим партнерам</p>

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
      </section> */}

      {/* Отзывы */}
      <section id="reviews" className="section-white py-16 bg-brutal-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-10 text-white">Отзывы партнёров</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Отзыв 1 */}
            <div className="flex flex-col border border-gray-200 rounded-xl p-6 bg-white">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < 5} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                «Полгода работаем с ребятами. Раньше сам мотался в Китай, теперь просто передаю заявку и получаю готовый результат. Клиенты довольны скоростью, я — экономией времени.»
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-2xl">
                  🦊
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Дмитрий К.</p>
                  <p className="text-gray-500 text-xs">Частный партнёр, Москва</p>
                </div>
              </div>
            </div>

            {/* Отзыв 2 */}
            <div className="flex flex-col border border-gray-200 rounded-xl p-6 bg-white">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < 5} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                «Привёл клиента на Mazda CX-5 — сам бы я с китайскими дилерами не справился. Всё проверили, показали фотоотчёт до оплаты. Чувствуется, что люди знают своё дело.»
              </p>
              <div className="flex items-center gap-3 mt-auto">

                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-2xl">
                  🐯
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Алексей С.</p>
                  <p className="text-gray-500 text-xs">Независимый специалист, Новосибирск</p>
                </div>
              </div>
            </div>

            {/* Отзыв 3 */}
            <div className="flex flex-col border border-gray-200 rounded-xl p-6 bg-white">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < 5} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                «Три машины за последние два месяца. Ни одной проблемы с документами, всё прозрачно. Работаем дальше.»
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-2xl">
                  🦁
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Руслан М.</p>
                  <p className="text-gray-500 text-xs">Предприниматель, Казань</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Гарантии и Договор (белый фон) */}
      <section id="guarantee" className="section-white py-16 border-y border-gray-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Левая колонка — текст */}
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
                  className="btn inline-block border border-accent text-accent hover:bg-accent hover:text-black font-bold py-3 px-6 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Скачать пример договора (PDF)
                </a>
              </div>
            </div>

            {/* Правая колонка — реквизиты */}
            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
              <h3 className="text-sm font-bold text-accent tracking-wider mb-4 uppercase">Реквизиты компании</h3>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Наименование</span>
                  <span className="font-medium text-gray-900">ИП Ващенко Денис Батькович</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">ИНН</span>
                  <span className="font-medium text-gray-900">1234567890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">КПП</span>
                  <span className="font-medium text-gray-900">123456789</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">ОГРН</span>
                  <span className="font-medium text-gray-900">1234567890123</span>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Р/с</span>
                  <span className="font-medium text-gray-900">40702810000000000000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Банк</span>
                  <span className="font-medium text-gray-900 text-right max-w-[180px]">ПАО «СБЕРБАНК»</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">БИК</span>
                  <span className="font-medium text-gray-900">044525225</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Корр. счёт</span>
                  <span className="font-medium text-gray-900">30101810400000000225</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Пример документов */}
      <section id="docs-example" className="section-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Пример документов</h2>

          <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 w-75%">
            <img
              src={document}
              alt="Пример сертификата"
              className="w-full h-auto"
            />
          </div>

          <p className="text-sm text-gray-500 mt-3 text-center">
            Все автомобили проходят полное таможенное оформление с выдачей необходимых документов
          </p>
        </div>
      </section>


      {/* 7. Контакты  */}
      <footer id="contacts" className="bg-brutal-black text-white py-12 border-t border-mid-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Обсудить заказ</h2>

          {/* Соцсети */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Telegram */}
            <a
              href="https://t.me/your_telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.46-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.168.331.016.122.036.314.02.486z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/7XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          <a
            href="https://t.me/your_telegram"
            className="text-2xl font-mono border-b-2 border-accent pb-1 hover:text-accent transition-colors"
          >
            +7 (XXX) XXX-XX-XX
          </a>
          <p className="text-light-gray mt-4">Telegram / WhatsApp</p>
          <p className="text-light-gray mt-2">Денис, руководитель направления Китай</p>

          <div className="mt-12 text-xs text-light-gray/50 border-t border-accent pt-6">
            <p>ИП Ващенко Д.Батькович · ИНН 1234567890 · ОГРН 1234567890123</p>
            <p className="mt-2">© 2026 Все права защищены. Работаем по договору.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;