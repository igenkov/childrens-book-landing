'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('leads', JSON.stringify(leads));
    
    // Show thank you message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Character */}
            <div className="hidden md:block w-1/4">
              <div className="w-40 h-40 bg-purple-200 rounded-full flex items-center justify-center">
                <span className="text-4xl">🦊</span>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-purple-900 leading-tight">
                  Вълшебна История за<br />
                  Приятелство и Доброта
                </h1>
                <p className="text-xl md:text-2xl text-gray-700">
                  Детска книга, която учи на ценности чрез приключения и топли илюстрации
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-lg">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <span>👶</span>
                    <span>За 3-6 години</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <span>🇧🇬</span>
                    <span>На български</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <span>❤️</span>
                    <span>С любов написана</span>
                  </div>
                </div>
              </div>

              {/* Book Cover */}
              <div className="mt-12">
                <div className="w-64 h-80 mx-auto bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-sm">Поставете корицата на книгата тук</p>
                    <p className="text-xs mt-2 opacity-75">/images/book-cover.jpg</p>
                  </div>
                </div>
              </div>

              <a 
                href="#rezervacia" 
                className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Запази Своята Книга 📚
              </a>
            </div>

            {/* Right Character */}
            <div className="hidden md:block w-1/4">
              <div className="w-40 h-40 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-4xl">🐦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center mx-auto">
                <span className="text-5xl">✨</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Защо Тази Книга е Специална?
            </h2>
            <p className="text-xl text-gray-600">
              Повече от история - това е начин да споделите ценности с вашето дете
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Учи на Приятелство',
                description: 'Чрез топли истории вашето дете ще научи истинската стойност на приятелството и взаимопомощта'
              },
              {
                icon: '🎨',
                title: 'Красиви Илюстрации',
                description: 'Всяка страница е пълна с цветни, приветливи рисунки, които ще запленят детското въображение'
              },
              {
                icon: '💝',
                title: 'Позитивни Ценности',
                description: 'История, която насърчава добротата, емпатията и желанието да помагаме на другите'
              },
              {
                icon: '🌟',
                title: 'Емоционално Развитие',
                description: 'Засяга важни моменти от емоционалното развитие на детето'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-32 h-32 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                <span className="text-5xl">📖</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Надникнете в Книгата
            </h2>
            <p className="text-xl text-gray-600">
              Вижте примери от страниците на нашата приказка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                page: 1,
                text: '"Докато преминаваше край горското поточе, Лисан забеляза нещо необичайно. До водата седеше някой, когото никога не беше виждал преди."'
              },
              {
                page: 2,
                text: '"- Това наистина е сериозно. Трябва да разберем защо водата изчезва... Имам идея! Ако полетя високо в небето, мога да видя откъде идва водата и защо изчезва по пътя."'
              },
              {
                page: 3,
                text: '"Лисан искаше да помогне, но не знаеше как. Беше прекарал целия си живот сред храсти и дървета и не разбираше много от води и езера."'
              },
              {
                page: 4,
                text: '"На това магично място където пътища от различни светове се срещаха, гората се докосваше до златистите дюни, а планинските скали се редуваха с цветни дървета."'
              }
            ].map((preview, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                  <div className="text-center text-purple-900 p-8">
                    <div className="text-6xl mb-4">📄</div>
                    <p className="text-sm">Страница {preview.page}</p>
                    <p className="text-xs mt-2 opacity-75">/images/page-{preview.page}.jpg</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic">{preview.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 text-center">
            За Автора
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <div className="text-6xl mb-2">👤</div>
                  <p className="text-xs text-purple-900">Вашата снимка тук</p>
                  <p className="text-xs text-purple-700 mt-1">/images/author.jpg</p>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Здравейте! Аз съм [Вашето Име], и тази книга е резултат от моята любов към децата и вярата, че добрите истории могат да формират характер.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Историята за Лисан и неговите приключения е вдъхновена от [вашата история - защо написахте книгата]. Вярвам, че всяко дете заслужава да расте с истории, които го учат на доброта, емпатия и приятелство.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  С тази книга искам да помогна на родителите да споделят важни ценности с децата си по забавен и ангажиращ начин.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-32 h-32 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                <span className="text-5xl">💰</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Изберете Вашия Пакет
            </h2>
            <p className="text-xl text-gray-600">
              Специални оферти за семейства и за подаръци
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Една Книга',
                subtitle: 'За вашето дете',
                price: '29',
                originalPrice: null,
                savings: null,
                features: [
                  '✓ Пълноцветна книга',
                  '✓ Високо качество',
                  '✓ Безплатна доставка'
                ],
                popular: false
              },
              {
                name: 'Две Книги',
                subtitle: 'За двама приятели',
                price: '49',
                originalPrice: '58',
                savings: 'Спестявате 9 лв!',
                features: [
                  '✓ 2 пълноцветни книги',
                  '✓ Високо качество',
                  '✓ Безплатна доставка',
                  '✓ Бонус стикери'
                ],
                popular: true
              },
              {
                name: 'Три Книги',
                subtitle: 'Най-добра стойност',
                price: '69',
                originalPrice: '87',
                savings: 'Спестявате 18 лв!',
                features: [
                  '✓ 3 пълноцветни книги',
                  '✓ Високо качество',
                  '✓ Безплатна доставка',
                  '✓ Бонус стикери',
                  '✓ Активности PDF'
                ],
                popular: false
              }
            ].map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-semibold">
                    ✓ ПОПУЛЯРЕН
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.subtitle}</p>
                  <div className="mb-6">
                    {pkg.originalPrice && (
                      <div className="text-gray-400 line-through text-xl mb-1">{pkg.originalPrice} лв</div>
                    )}
                    <div className="text-5xl font-bold text-purple-900 mb-2">
                      {pkg.price} <span className="text-2xl">лв</span>
                    </div>
                    {pkg.savings && (
                      <div className="text-green-600 font-semibold">{pkg.savings}</div>
                    )}
                    {!pkg.originalPrice && (
                      <div className="text-gray-600">+ безплатна доставка</div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="#rezervacia" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Продължи към Поръчка →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center mx-auto">
                <span className="text-5xl">💬</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Какво Казват Родителите
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stars: 5,
                text: '"Детето ми обожава тази книга! Всяка вечер иска да я чета отново. Историята е толкова мила и учи на важни ценности."',
                author: 'Мария, мама на 4-годишна'
              },
              {
                stars: 5,
                text: '"Прекрасна книга с красиви илюстрации. След като я прочетохме, дъщеря ми започна да споделя играчките си с приятелите."',
                author: 'Петър, баща на 5-годишна'
              },
              {
                stars: 5,
                text: '"Най-накрая българска детска книга с модерни илюстрации и смислена история! Синът ми я обожава."',
                author: 'Елена, мама на 6-годишен'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-md">
                <div className="text-yellow-500 text-2xl mb-4">
                  {'⭐'.repeat(testimonial.stars)}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <p className="text-purple-900 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-32 h-32 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                <span className="text-5xl">❓</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Често Задавани Въпроси
            </h2>
            <p className="text-xl text-gray-600">
              Отговори на най-честите въпроси на родителите
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'За каква възраст е подходяща книгата?',
                a: 'Книгата е специално създадена за деца на възраст 3-6 години. Историята и илюстрациите са адаптирани за това възрастово ниво.'
              },
              {
                q: 'Кога ще получа книгата?',
                a: 'След потвърждение на поръчката, книгата ще бъде изпратена в рамките на 3-5 работни дни. Доставката отнема допълнително 2-3 дни.'
              },
              {
                q: 'В какъв формат е книгата?',
                a: 'Книгата е печатна, с твърда корица, пълноцветни илюстрации на висококачествена хартия. Формат А4, около 40 страници.'
              },
              {
                q: 'Мога ли да я поръчам като подарък?',
                a: 'Разбира се! При поръчка можете да посочите адрес за доставка, различен от вашия, и да добавите поздравително съобщение.'
              },
              {
                q: 'Какъв е начинът на плащане?',
                a: 'Приемаме плащания с банков превод, карта или наложен платеж при доставка.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-purple-900 hover:bg-purple-50 transition-colors">
                  {faq.q}
                </summary>
                <div className="px-6 py-4 bg-purple-50 text-gray-700">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="rezervacia" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Резервирайте Вашето Копие
            </h2>
            <p className="text-xl text-gray-600">
              Запазете книгата на специална цена и получете първо вашия екземпляр
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">Благодарим!</h3>
              <p className="text-green-700">Вашата резервация беше получена. Ще се свържем с вас скоро!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Вашето име *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Иван Петров"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Вашият имейл *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Телефон (по избор)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="+359 888 123 456"
                  />
                </div>

                <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎁</span>
                    <div>
                      <h4 className="font-bold text-purple-900 mb-1">Специална Оферта</h4>
                      <p className="text-sm text-purple-800">
                        Резервирайте сега и получете ексклузивно PDF с образователни активности за вашето дете
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Запази Своята Книга 📚
                </button>

                <p className="text-sm text-gray-600 text-center">
                  Вашите данни са защитени и няма да бъдат споделяни с трети страни
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg mb-2">© 2024 Всички права запазени</p>
          <p className="text-purple-300">Детска книга за приятелство и взаимопомощ | За деца 3-6 години</p>
        </div>
      </footer>
    </main>
  );
}
