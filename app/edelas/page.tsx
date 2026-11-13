import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { serif } from "./fonts";
import QuoteForm from "./QuoteForm";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  faqs,
  services,
  steps,
  testimonials,
} from "./content";

const heading = `${serif.className} font-bold tracking-tight`;

export default function EdelasPage() {
  return (
    <>
      <header className="sticky top-0 z-20 bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center px-6 md:px-12">
          <a href="#top" aria-label="EDELAS – strona główna">
            <Image
              src="/edelas/logo.png"
              alt="EDELAS"
              width={130}
              height={45}
              priority
            />
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
          <Image
            src="/edelas/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_25%]"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-24">
            <h1
              className={`${heading} max-w-3xl text-5xl leading-[1.05] text-white sm:text-6xl md:text-8xl`}
            >
              Produkcja odzieży premium
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              Najwyższej jakości produkcja marek własnych, stroje korporacyjne i
              autorskie kolekcje szwalnicze.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="#wycena"
                className="bg-black px-9 py-4 text-white transition-colors hover:bg-neutral-800"
              >
                Poproś o wycenę
              </a>
              <a
                href="#uslugi"
                className="border border-black bg-white px-9 py-4 text-black transition-colors hover:bg-neutral-100"
              >
                Realizacje
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="uslugi"
          className="mx-auto max-w-7xl scroll-mt-18 px-6 py-24"
        >
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className={`${heading} text-4xl md:text-6xl`}>Nasze usługi</h2>
            <p className="mt-6 text-lg">
              Produkcja odzieży premium dla marek własnych i firm. Oferujemy
              kompleksowe wsparcie – od projektu po dostawę.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="flex flex-col">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex-1 bg-neutral-100 p-8 md:p-12">
                  <h3 className={`${heading} text-3xl md:text-4xl`}>
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-relaxed">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className={`${heading} mb-16 text-center text-4xl md:text-6xl`}>
            Co mówią o nas nasi klienci?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.author}
                className="flex flex-col justify-between gap-8 bg-neutral-100 p-8"
              >
                <blockquote className="text-lg leading-relaxed">
                  „{item.quote}”
                </blockquote>
                <figcaption className="text-xl">{item.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="relative overflow-hidden py-24">
          <Image
            src="/edelas/fabric.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative mx-auto max-w-7xl px-6">
            <h2 className={`${heading} text-4xl text-white md:text-6xl`}>
              Jak to działa?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              Klarowny i prosty proces od briefu projektowego do gotowej
              odzieży.
            </p>
            <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-neutral-100 px-6 py-12 text-center"
                >
                  <span className={`${heading} text-4xl`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`${heading} mt-6 text-3xl leading-tight`}>
                    {step.title}
                  </h3>
                  <p className="mt-6 leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[2fr_3fr]">
          <div>
            <h2 className={`${heading} text-4xl md:text-5xl`}>
              Centrum wsparcia klienta B2B
            </h2>
            <p className="mt-6 text-lg">
              Zbiór kluczowych informacji dotyczących procesów szwalniczych,
              logistyki oraz personalizacji kolekcji EDELAS.
            </p>
          </div>
          <div className="border-t border-black/15">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                open={index === 0}
                className="group border-b border-black/15 py-8"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <FiChevronDown
                    aria-hidden
                    className="shrink-0 text-2xl transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Quote form */}
        <section
          id="wycena"
          className="mx-auto max-w-5xl scroll-mt-18 px-6 pb-24"
        >
          <h2
            className={`${serif.className} text-5xl font-normal tracking-tight md:text-7xl`}
          >
            Zapytanie ofertowe
          </h2>
          <p className="mt-8 mb-12">
            Prosimy o opisanie Państwa projektu. Skontaktujemy się z Państwem,
            przedstawiając spersonalizowaną propozycję produkcyjną.
          </p>
          <QuoteForm />
        </section>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
          <div>
            <Image
              src="/edelas/logo.png"
              alt="EDELAS"
              width={160}
              height={55}
            />
          </div>
          <div>
            <h2 className="mb-4 font-semibold">Informacje o firmie</h2>
            <p className="leading-relaxed text-neutral-700">
              Produkcja odzieży premium, personalizacja oraz rozwiązania private
              label dla firm i marek modowych.
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-semibold">Kontakt</h2>
            <ul className="space-y-2 text-neutral-700">
              <li>
                <a href={PHONE_HREF} className="hover:text-black">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>Ventame LLC Edelas</li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-black"
                >
                  <FaWhatsapp aria-hidden />
                  Wsparcie przez WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto max-w-7xl border-t border-black/10 px-6 py-8 text-sm text-neutral-600">
          © 2026 EDELAS. Wszelkie prawa zastrzeżone.
        </p>
      </footer>
    </>
  );
}
