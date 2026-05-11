import { useState } from 'react';
import accentBg from './assets/bg-hero.jpg';
import carHero from './assets/car-hero2.png';
import stamp1 from './assets/stamp1.png';
import stamp2 from './assets/stamp2.png';

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
    <header className="fixed top-0 left-0 w-full z-50 bg-brutal-black/95 backdrop-blur-sm ">
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carExamples.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carExamples.length) % carExamples.length);

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
            <div className="relative h-full md:h-55">
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
      <section id="examples" className="bg-linear-to-r from-brutal-black via-accent to-white text-white py-16">
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

            {/* Правая колонка — хаотичные штампы */}
            <div className="relative h-80 md:h-96 flex items-center justify-center">
              {/* Центральная группа — самый крупный */}
              <img
                src={stamp1}
                alt=""
                className="absolute w-36 md:w-44 opacity-40 -rotate-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
              />
              {/* Верхний левый — наезжает на центр */}
              <img
                src={stamp2}
                alt=""
                className="absolute w-32 md:w-40 opacity-35 rotate-6 top-4 left-2 pointer-events-none select-none"
              />
              {/* Верхний правый */}
              <img
                src={stamp1}
                alt=""
                className="absolute w-32 md:w-40 opacity-35 -rotate-12 top-2 right-2 pointer-events-none select-none"
              />
              {/* Нижний левый */}
              <img
                src={stamp2}
                alt=""
                className="absolute w-28 md:w-36 opacity-30 rotate-12 bottom-2 left-4 pointer-events-none select-none"
              />
              {/* Нижний правый */}
              <img
                src={stamp2}
                alt=""
                className="absolute w-28 md:w-36 opacity-30 -rotate-6 bottom-2 right-2 pointer-events-none select-none"
              />
              {/* Боковой левый */}
              <img
                src={stamp1}
                alt=""
                className="absolute w-24 md:w-32 opacity-25 -rotate-45 top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none"
              />
              {/* Боковой правый */}
              <img
                src={stamp2}
                alt=""
                className="absolute w-24 md:w-32 opacity-25 rotate-45 top-1/3 right-0 pointer-events-none select-none"
              />
              {/* Мелкий, но яркий — поверх всех */}
              <img
                src={stamp2}
                alt=""
                className="absolute w-20 md:w-24 opacity-45 -rotate-12 top-1/3 left-1/4 pointer-events-none select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Контакты  */}
      <footer id="contacts" className="bg-brutal-black text-white py-12 border-t border-mid-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Обсудить заказ</h2>
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