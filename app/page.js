'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState('single')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission - can be replaced with actual API call
    setTimeout(() => {
      // TODO: Replace with secure backend API call to store form data
      // SECURITY: Removed console.log to prevent sensitive data exposure
      // SECURITY: Removed localStorage storage to prevent PII storage in browser
      setSubmitted(true)
      setLoading(false)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-peach-50 to-coral-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-coral-100">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Благодарим Ви! 🎉
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Вашата заявка е получена успешно. Ще се свържем с Вас скоро с подробности за книгата.
            </p>
            <div className="bg-peach-50 rounded-2xl p-8 mb-8 border border-peach-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                Проверете имейла си за потвърждение. Ако не го виждате, погледнете в спам папката.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-peach-600 hover:text-peach-700 font-semibold text-lg transition-colors duration-200"
            >
              ← Назад към началната страница
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-peach-50 via-sand-50 to-sage-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32">
        {/* Floating Character - Top Left Corner (Desktop) */}
        <div className="hidden lg:block absolute left-4 top-4 w-48 xl:w-64 opacity-90 pointer-events-none">
          <Image
            src="/images/character-hero-left.png"
            alt="Персонаж"
            width={256}
            height={256}
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Вълшебна История за<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-coral-600 inline-block mt-2">
                Приятелство и Доброта
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Детска книга, която учи на ценности чрез приключения и топли илюстрации
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-peach-100">
                <span className="text-peach-600 font-semibold text-lg">👶 За 3-6 години</span>
              </div>
              <div className="bg-white rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-coral-100">
                <span className="text-coral-600 font-semibold text-lg">🇧🇬 На български</span>
              </div>
              <div className="bg-white rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-sage-100">
                <span className="text-sage-600 font-semibold text-lg">❤️ Написана с любов</span>
              </div>
            </div>
          </div>

          {/* Book Covers Carousel */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-16 px-4">
            {/* Left Book - Coming Soon */}
            <div className="hidden sm:block relative w-32 md:w-48 lg:w-56 flex-shrink-0 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[3/4] rounded-2xl shadow-xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/coming-soon-cover-1.jpg"
                  alt="Очаквайте скоро"
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-center font-bold text-sm md:text-lg lg:text-xl px-2">
                    Очаквайте<br />скоро
                  </span>
                </div>
              </div>
            </div>

            {/* Main Book Cover */}
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 flex-shrink-0 z-10">
              <div className="relative aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden bg-gray-100 hover:shadow-3xl transition-shadow duration-300 ring-1 ring-gray-200 transform hover:scale-105">
                <Image
                  src="/images/book-cover.jpg"
                  alt="Корица на книгата"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Right Book - Coming Soon */}
            <div className="hidden sm:block relative w-32 md:w-48 lg:w-56 flex-shrink-0 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[3/4] rounded-2xl shadow-xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/coming-soon-cover-2.jpg"
                  alt="Очаквайте скоро"
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-center font-bold text-sm md:text-lg lg:text-xl px-2">
                    Очаквайте<br />скоро
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#rezervacia"
              className="inline-block bg-gradient-to-r from-peach-600 to-coral-600 text-white text-xl md:text-2xl font-bold px-12 md:px-16 py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-peach-700 hover:to-coral-700"
            >
              Запази Своята Книга 📚
            </a>
          </div>
        </div>
      </section>

      {/* What Makes It Special Section */}
      <section className="py-20 md:py-32 bg-white relative">
        {/* Decorative Character Image */}
        <div className="absolute top-10 right-4 md:right-10 w-32 md:w-48 opacity-80 pointer-events-none">
          <Image
            src="/images/character-benefits.png"
            alt="Персонаж"
            width={192}
            height={192}
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Защо Тази Книга е Специална?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Повече от история - това е начин да споделите ценности с вашето дете
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
            <div className="text-center group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden relative border-2 border-gray-100">
                <Image
                  src="/images/icon-friendship.png"
                  alt="Приятелство"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Учи на Приятелство</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Чрез топли истории вашето дете ще научи истинската стойност на приятелството и взаимопомощта
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden relative border-2 border-gray-100">
                <Image
                  src="/images/icon-illustrations.png"
                  alt="Илюстрации"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Красиви Илюстрации</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Всяка страница е пълна с цветни, приветливи рисунки, които ще запленят детското въображение
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden relative border-2 border-gray-100">
                <Image
                  src="/images/icon-values.png"
                  alt="Ценности"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Позитивни Ценности</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                История, която насърчава добротата, емпатията и желанието да помагаме на другите
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden relative border-2 border-gray-100">
                <Image
                  src="/images/icon-emotional.png"
                  alt="Емоционално развитие"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Емоционално Развитие</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Засяга важни моменти от емоционалното развитие на детето
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-peach-50 to-coral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Надникнете в Книгата
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Вижте примери от страниците на нашата история
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
            {/* Page Preview 1 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/images/page-1.jpg"
                  alt="Страница 1"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "Докато преминаваше край горското поточе, Лисан забеляза нещо необичайно. До водата седеше някой, когото никога не беше виждал преди."
                </p>
              </div>
            </div>

            {/* Page Preview 2 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/images/page-2.jpg"
                  alt="Страница 2"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "- Това наистина е сериозно. Трябва да разберем защо водата изчезва... Имам идея! Ако полетя високо в небето, мога да видя откъде идва водата и защо изчезва по пътя."
                </p>
              </div>
            </div>

            {/* Page Preview 3 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/images/page-3.jpg"
                  alt="Страница 3"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "Лисан искаше да помогне, но не знаеше как. Беше прекарал целия си живот сред храсти и дървета и не разбираше много от води и езера."
                </p>
              </div>
            </div>

            {/* Page Preview 4 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/images/page-4.jpg"
                  alt="Страница 4"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "На това магично място където пътища от различни светове се срещаха, гората се докосваше до златистите дюни, а планинските скали се редуваха с цветни дървета."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                За Автора
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Здравейте! Аз съм [Вашето Име], и тази книга е резултат от моята любов към децата и вярата, че добрите истории могат да формират характер.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Историята за Лисан и неговите приключения е вдъхновена от [вашата история - защо написахте книгата]. Вярвам, че всяко дете заслужава да расте с истории, които го учат на доброта, емпатия и приятелство.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                С тази книга искам да помогна на родителите да споделят важни ценности с децата си по забавен и ангажиращ начин.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-peach-100 to-coral-100">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">👤</div>
                    <p className="text-gray-600 text-lg">Вашата снимка тук</p>
                    <p className="text-gray-500 text-sm mt-2">(Качете /images/author.jpg)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-peach-50 to-sand-50 relative">
        {/* Decorative Character */}
        <div className="hidden lg:block absolute right-10 top-20 w-48 opacity-75 pointer-events-none">
          <Image
            src="/images/character-pricing.png"
            alt="Персонаж"
            width={192}
            height={192}
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Изберете Вашия Пакет
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Специални оферти за семейства и за подаръци
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Single Book */}
            <div
              onClick={() => setSelectedPackage('single')}
              className={`bg-white rounded-3xl p-8 md:p-10 shadow-xl cursor-pointer transition-all duration-300 ${
                selectedPackage === 'single' ? 'ring-4 ring-peach-500 scale-105' : 'hover:shadow-2xl'
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Една Книга
                </h3>
                <p className="text-gray-600">За вашето дете</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold text-peach-600 mb-2">
                  29 лв
                </div>
                <p className="text-gray-500">+ безплатна доставка</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Пълноцветна книга</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Високо качество</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Безплатна доставка</span>
                </li>
              </ul>
              {selectedPackage === 'single' && (
                <div className="absolute top-4 right-4">
                  <div className="bg-peach-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                </div>
              )}
            </div>

            {/* 2 Books Bundle - POPULAR */}
            <div
              onClick={() => setSelectedPackage('double')}
              className={`bg-white rounded-3xl p-8 md:p-10 shadow-xl cursor-pointer transition-all duration-300 relative ${
                selectedPackage === 'double' ? 'ring-4 ring-coral-500 scale-105' : 'hover:shadow-2xl'
              }`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-coral-500 to-peach-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ПОПУЛЯРЕН
                </span>
              </div>
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Две Книги
                </h3>
                <p className="text-gray-600">За двама приятели</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-sm text-gray-500 line-through mb-1">58 лв</div>
                <div className="text-5xl md:text-6xl font-bold text-coral-600 mb-2">
                  49 лв
                </div>
                <p className="text-green-600 font-semibold">Спестявате 9 лв!</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">2 пълноцветни книги</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Високо качество</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Безплатна доставка</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Бонус стикери</span>
                </li>
              </ul>
              {selectedPackage === 'double' && (
                <div className="absolute top-4 right-4">
                  <div className="bg-coral-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                </div>
              )}
            </div>

            {/* 3 Books Bundle - BEST VALUE */}
            <div
              onClick={() => setSelectedPackage('triple')}
              className={`bg-white rounded-3xl p-8 md:p-10 shadow-xl cursor-pointer transition-all duration-300 ${
                selectedPackage === 'triple' ? 'ring-4 ring-sage-500 scale-105' : 'hover:shadow-2xl'
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Три Книги
                </h3>
                <p className="text-gray-600">Най-добра стойност</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-sm text-gray-500 line-through mb-1">87 лв</div>
                <div className="text-5xl md:text-6xl font-bold text-sage-600 mb-2">
                  69 лв
                </div>
                <p className="text-green-600 font-semibold">Спестявате 18 лв!</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">3 пълноцветни книги</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Високо качество</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Безплатна доставка</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Бонус стикери</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-1">✓</span>
                  <span className="text-gray-700">Активности PDF</span>
                </li>
              </ul>
              {selectedPackage === 'triple' && (
                <div className="absolute top-4 right-4">
                  <div className="bg-sage-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#rezervacia"
              className="inline-block bg-gradient-to-r from-peach-600 to-coral-600 text-white text-xl md:text-2xl font-bold px-12 md:px-16 py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-peach-700 hover:to-coral-700"
            >
              Продължи към Поръчка →
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20 leading-tight">
            Какво Казват Родителите
          </h2>

          <div className="grid md:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                name: "Мария",
                role: "мама на 4-годишна",
                quote: "Детето ми обожава тази книга! Всяка вечер иска да я чета отново. Историята е толкова мила и учи на важни ценности.",
                photo: "/images/review-photo-1.jpg",
                bgColor: "bg-peach-50",
                borderColor: "border-peach-100"
              },
              {
                name: "Петър",
                role: "баща на 5-годишна",
                quote: "Прекрасна книга с красиви илюстрации. След като я прочетохме, дъщеря ми започна да споделя играчките си с приятелите.",
                photo: "/images/review-photo-2.png",
                bgColor: "bg-coral-50",
                borderColor: "border-coral-100"
              },
              {
                name: "Елена",
                role: "мама на 6-годишен",
                quote: "Най-накрая българска детска книга с модерни илюстрации и смислена история! Синът ми я обожава.",
                photo: "/images/review-photo-3.jpg",
                bgColor: "bg-sand-50",
                borderColor: "border-sand-100"
              },
              {
                name: "Иван",
                role: "баща на 3-годишен",
                quote: "Купих книгата като подарък и не съжалявам. Синът ми иска да я чете всяка вечер преди лягане.",
                photo: "/images/review-photo-4.png",
                bgColor: "bg-sage-50",
                borderColor: "border-sage-100"
              },
              {
                name: "Анна",
                role: "мама на 5-годишни близнаци",
                quote: "И двете ми деца обичат тази книга! Чудесен начин да научат за приятелството и добротата.",
                photo: "/images/review-photo-5.png",
                bgColor: "bg-sky-50",
                borderColor: "border-sky-100"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`${testimonial.bgColor} rounded-2xl p-5 border ${testimonial.borderColor} hover:shadow-lg transition-shadow duration-300`}>
                {/* Review Photo */}
                <div className="mb-4 rounded-xl overflow-hidden aspect-[4/3] bg-gray-200">
                  {testimonial.photo ? (
                    <Image
                      src={testimonial.photo}
                      alt={`Снимка от ${testimonial.name}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                      <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Няма снимка</span>
                    </div>
                  )}
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}, {testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-sand-50 to-peach-50 relative">
        {/* Decorative Character */}
        <div className="hidden lg:block absolute right-8 bottom-20 w-48 opacity-75 pointer-events-none">
          <Image
            src="/images/character-faq.png"
            alt="Персонаж"
            width={192}
            height={192}
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Често Задавани Въпроси
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Отговори на най-честите въпроси на родителите
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 pr-8">
                  За каква възраст е подходяща книгата?
                </span>
                <span className="text-peach-600 text-2xl flex-shrink-0">
                  {openFaq === 1 ? '−' : '+'}
                </span>
              </button>
              {openFaq === 1 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Книгата е специално създадена за деца на възраст от 3 до 6 години. Историята е написана с език и сюжет, подходящи за това възрастово ниво, а илюстрациите са цветни и ангажиращи за малките читатели.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 pr-8">
                  Кога ще получа книгата?
                </span>
                <span className="text-peach-600 text-2xl flex-shrink-0">
                  {openFaq === 2 ? '−' : '+'}
                </span>
              </button>
              {openFaq === 2 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Понастоящем приемаме предварителни поръчки. Очакваме книгата да бъде готова и изпратена през [месец/дата]. Ще ви уведомим по имейл веднага щом книгата е готова за изпращане. Доставката обикновено отнема 2-3 работни дни.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 pr-8">
                  В какъв формат е книгата?
                </span>
                <span className="text-peach-600 text-2xl flex-shrink-0">
                  {openFaq === 3 ? '−' : '+'}
                </span>
              </button>
              {openFaq === 3 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Книгата е с твърди корици и пълноцветни страници с високо качество на печат. Размерът е оптимален за малки ръце - приятна за държане и разглеждане. Всяка страница е отпечатана на плътна хартия, устойчива на четене от деца.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 pr-8">
                  Мога ли да я поръчам като подарък?
                </span>
                <span className="text-peach-600 text-2xl flex-shrink-0">
                  {openFaq === 4 ? '−' : '+'}
                </span>
              </button>
              {openFaq === 4 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Разбира се! Книгата е чудесен подарък за рождени дни, Коледа или всеки друг специален повод. Можете да поръчате няколко екземпляра с отстъпка чрез нашите пакетни оферти. При желание можем да включим и подаръчна опаковка.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-900 pr-8">
                  Какъв е начинът на плащане?
                </span>
                <span className="text-peach-600 text-2xl flex-shrink-0">
                  {openFaq === 5 ? '−' : '+'}
                </span>
              </button>
              {openFaq === 5 && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Приемаме банков превод и наложен платеж. Всички плащания са сигурни и защитени. След резервация ще получите имейл с инструкции за завършване на поръчката и опциите за плащане.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="rezervacia" className="py-20 md:py-32 bg-gradient-to-br from-peach-600 via-coral-600 to-coral-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-coral-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Резервирайте Вашето Копие
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Запазете книгата на специална цена и получете първо вашия екземпляр
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-3">
                  Вашето име *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-peach-500 focus:outline-none focus:ring-2 focus:ring-peach-200 text-lg transition-all duration-200"
                  placeholder="Иван Петров"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-3">
                  Вашият имейл *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-peach-500 focus:outline-none focus:ring-2 focus:ring-peach-200 text-lg transition-all duration-200"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-semibold text-gray-700 mb-3">
                  Телефон (по избор)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-peach-500 focus:outline-none focus:ring-2 focus:ring-peach-200 text-lg transition-all duration-200"
                  placeholder="+359 888 123 456"
                />
              </div>

              <div className="bg-peach-50 rounded-2xl p-8 border border-peach-100">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎁</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2 text-lg">Специална Оферта</p>
                    <p className="text-gray-600 leading-relaxed">
                      Резервирайте сега и получете ексклузивно PDF с образователни активности за вашето дете
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-peach-600 to-coral-600 text-white text-xl md:text-2xl font-bold py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:from-peach-700 hover:to-coral-700"
              >
                {loading ? 'Изпращане...' : 'Запази Своята Книга 📚'}
              </button>

              <p className="text-center text-sm text-gray-500 leading-relaxed">
                Вашите данни са защитени и няма да бъдат споделяни с трети страни
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            © 2024 Всички права запазени
          </p>
          <p className="text-gray-500 leading-relaxed">
            Детска книга за приятелство и взаимопомощ | За деца 3-6 години
          </p>
        </div>
      </footer>
    </main>
  )
}
