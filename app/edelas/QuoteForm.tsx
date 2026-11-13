"use client";

import { FormEvent } from "react";
import { CONTACT_EMAIL, productTypes, quantities } from "./content";

const inputClass =
  "w-full border-0 border-b border-black/30 bg-transparent px-0 py-2 text-base outline-none transition-colors focus:border-black";
const labelClass = "mb-1 block text-sm";

export default function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const lines = [
      ["Imię i nazwisko", field("name")],
      ["E-mail", field("email")],
      ["Firma / marka", field("company")],
      ["Strona / social media", field("website")],
      ["Rodzaj produktu", field("product")],
      ["Szacowana ilość", field("quantity")],
      ["Planowana data dostawy", field("deliveryDate")],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);

    const body = `${lines.join("\n")}\n\nOpis projektu:\n${field("description")}`;
    const subject = `Zapytanie ofertowe – ${field("company") || field("name")}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-x-12 gap-y-8 md:grid-cols-2"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Imię i nazwisko *
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Służbowy adres e-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="company" className={labelClass}>
          Nazwa firmy / marki
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          className={inputClass}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="website" className={labelClass}>
          Strona internetowa lub media społecznościowe
        </label>
        <input id="website" name="website" className={inputClass} />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="product" className={labelClass}>
          Rodzaj produktu
        </label>
        <select
          id="product"
          name="product"
          defaultValue=""
          className={inputClass}
        >
          <option value="">Wybierz</option>
          {productTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="quantity" className={labelClass}>
          Szacowana ilość
        </label>
        <select
          id="quantity"
          name="quantity"
          defaultValue=""
          className={inputClass}
        >
          <option value="">Wybierz</option>
          {quantities.map((quantity) => (
            <option key={quantity}>{quantity}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="deliveryDate" className={labelClass}>
          Planowana data dostawy
        </label>
        <input
          id="deliveryDate"
          name="deliveryDate"
          type="date"
          className={`${inputClass} md:max-w-xs`}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="description" className={labelClass}>
          Opis projektu *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className={`${inputClass} resize-y`}
        />
      </div>
      <label className="flex items-center gap-3 md:col-span-2">
        <input
          type="checkbox"
          name="consent"
          required
          className="h-4 w-4 accent-black"
        />
        <span>Wyrażam zgodę na Politykę Prywatności *</span>
      </label>
      <button
        type="submit"
        className="bg-black py-3 text-white transition-colors hover:bg-neutral-800 md:col-span-2"
      >
        Wyślij zapytanie ofertowe
      </button>
    </form>
  );
}
