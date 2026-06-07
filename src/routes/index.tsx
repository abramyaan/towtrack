import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, Mail, MapPin, Truck, Wrench, ChevronLeft, ChevronRight,
  Shield, Clock, Award, ThumbsUp, Check,
} from "lucide-react";

import evacuator from "@/assets/evacu.jpeg";
import manipulator from "@/assets/manip.jpg";
import samosval from "@/assets/samosvalo.jpeg";
import excavator from "@/assets/exka.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Slide = {
  title: string;
  image: string;
  price: string;
  href: string;
};

const slides: Slide[] = [
  { title: "Эвакуатор", image: evacuator, price: "от 2 000 ₽/час", href: "#catalog" },
  { title: "Манипулятор", image: manipulator, price: "от 2 500 ₽/час", href: "#catalog" },
  { title: "Мини самосвал", image: samosval, price: "от 2 200 ₽/час", href: "#catalog" },
  { title: "Мини экскаватор", image: excavator, price: "от 2 800 ₽/час", href: "#catalog" },
];

const utp = [
  { icon: Award, title: "10 лет на рынке", text: "Опыт работ с 2015 года в Екатеринбурге и области" },
  { icon: Clock, title: "Выезд 24/7", text: "Подаём технику в течение часа после заявки" },
  { icon: Shield, title: "Своя техника", text: "Без посредников — техника в нашем автопарке" },
  { icon: ThumbsUp, title: "Честная цена", text: "Без скрытых платежей, расчёт по факту" },
];

const catalog = [
  {
    title: "Эвакуатор",
    image: evacuator,
    price: "от 2 000 ₽/час",
    specs: ["Грузоподъёмность до 5 т", "Платформа 5,5 м", "Лебёдка 5 т", "Полная и частичная погрузка"],
  },
  {
    title: "Манипулятор",
    image: manipulator,
    price: "от 2 500 ₽/час",
    specs: ["Стрела до 7 т / 20 м", "Кузов 6,2 × 2,4 м", "Грузоподъёмность борта 10 т", "Работа с длинномерами"],
  },
  {
    title: "Мини самосвал",
    image: samosval,
    price: "от 2 200 ₽/час",
    specs: ["Объём кузова до 6 м³", "Грузоподъёмность 5 т", "Самосвальная разгрузка", "Сыпучие и строй-мусор"],
  },
  {
    title: "Мини экскаватор",
    image: excavator,
    price: "от 2 800 ₽/час",
    specs: ["Глубина копания 3 м", "Ширина 1,5 м (узкие места)", "Сменные ковши", "Для частных и стройплощадок"],
  },
];

const priceList = [
  { name: "Эвакуатор (легковой, до 2,5 т)", price: "2 000 ₽/час", min: "Минимум 2 часа" },
  { name: "Эвакуатор (грузовой, до 5 т)", price: "2 800 ₽/час", min: "Минимум 3 часа" },
  { name: "Манипулятор 5 т", price: "2 500 ₽/час", min: "Минимум 4 часа" },
  { name: "Манипулятор 10 т", price: "3 500 ₽/час", min: "Минимум 4 часа" },
  { name: "Мини самосвал 5 т", price: "2 200 ₽/час", min: "Минимум 4 часа" },
  { name: "Мини экскаватор", price: "2 800 ₽/час", min: "Минимум 4 часа (смена 8 ч — 18 000 ₽)" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Catalog />
      <About />
      <PriceList />
      <RequestForm />
      <Contacts />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary text-primary-foreground grid place-items-center">
            <Truck className="size-5" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-base sm:text-lg">СпецАвто 96</div>
            <div className="text-[11px] sm:text-xs text-muted-foreground">Аренда спецтехники · Екатеринбург</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#catalog" className="hover:text-primary">Каталог</a>
          <a href="#about" className="hover:text-primary">Услуги</a>
          <a href="#price" className="hover:text-primary">Цены</a>
          <a href="#contacts" className="hover:text-primary">Контакты</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="tel:+79655067816" aria-label="Позвонить"
             className="hidden sm:flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <Phone className="size-4" />
            +7 (965) 506-78-16
          </a>
          <a href="#request" className="btn-primary hover:btn-primary-hover text-sm !py-2 !px-4">
            Заявка
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/50 via-background to-background" />
      <div className="max-w-7xl mx-auto px-4 pt-8 sm:pt-12 pb-12 sm:pb-20">

        {/* Desktop: две колонки. Mobile: стек */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Левая колонка — слайдер */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-card shadow-2xl border border-border">
              {slides.map((s, idx) => (
                <div
                  key={s.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1280}
                    height={896}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-contain bg-secondary/40"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent">
                    <div className="flex items-end justify-between gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold">{s.title}</h3>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Аренда</div>
                        <div className="text-lg sm:text-xl font-bold text-primary">{s.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={prev} aria-label="Назад"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground grid place-items-center shadow-lg transition">
                <ChevronLeft className="size-5" />
              </button>
              <button onClick={next} aria-label="Вперёд"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground grid place-items-center shadow-lg transition">
                <ChevronRight className="size-5" />
              </button>
            </div>
            {/* Dots */}
            <div className="mt-4 flex justify-center gap-2">
              {slides.map((_, idx) => (
                <button key={idx} aria-label={`Слайд ${idx + 1}`} onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-3 bg-border"}`} />
              ))}
            </div>
          </div>

          {/* Правая колонка — заголовок, УТП, кнопка */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary bg-secondary px-3 py-1 rounded-full">
                Екатеринбург и область
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
                Аренда спецтехники с подачей <span className="text-primary">за час</span>
              </h1>
              <p className="mt-3 text-muted-foreground text-base sm:text-lg">
                Эвакуаторы, манипуляторы, самосвалы и экскаваторы — собственный автопарк без посредников.
              </p>
            </div>

            {/* УТП */}
            <div className="grid grid-cols-2 gap-3">
              {utp.map((u) => (
                <UtpCard key={u.title} {...u} compact />
              ))}
            </div>

            {/* Кнопка */}
            <div>
              <a href="#request" className="btn-primary hover:btn-primary-hover inline-flex">
                Оставить заявку
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function UtpCard({
  icon: Icon, title, text, align = "left", compact = false,
}: {
  icon: typeof Award; title: string; text: string; align?: "left" | "right"; compact?: boolean;
}) {
  return (
    <div className={`bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-sm flex gap-3 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <div className="shrink-0 size-10 sm:size-11 rounded-xl bg-secondary text-primary grid place-items-center">
        <Icon className="size-5" />
      </div>
      <div>
        <div className={`font-bold ${compact ? "text-sm" : "text-base sm:text-lg"}`}>{title}</div>
        <div className={`text-muted-foreground ${compact ? "text-xs mt-0.5" : "text-sm mt-1"}`}>{text}</div>
      </div>
    </div>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHead kicker="Каталог" title="Спецтехника в аренду" subtitle="Современный автопарк. Опытные операторы. Работаем по Екатеринбургу и всей Свердловской области." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {catalog.map((c) => (
            <article key={c.title} className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col">
              <div className="aspect-[4/3] bg-secondary/40 overflow-hidden">
                <img src={c.image} alt={c.title} width={1280} height={896} loading="lazy"
                     className="w-full h-full object-contain group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold">{c.title}</h3>
                <div className="text-2xl font-bold text-primary">{c.price}</div>
                <ul className="space-y-1.5 text-sm text-muted-foreground flex-1">
                  {c.specs.map((s) => (
                    <li key={s} className="flex gap-2"><Check className="size-4 text-primary shrink-0 mt-0.5" />{s}</li>
                  ))}
                </ul>
                <a href="#request" className="btn-primary hover:btn-primary-hover w-full mt-2">Заказать</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const items = [
    "Доставка строительных материалов: кирпич, пеноблок, плитка, сухие смеси, доски, бревна.",
    "Перевозка железобетонных изделий: плит, панелей, свай, блоков, колец, профнастила, труб, арматуры, балок.",
    "Перевозка киосков, павильонов, бытовок, гаражей, биг-бэгов, генераторов, трансформаторов и станков.",
    "Перевозка и посадка деревьев.",
    "Эвакуация автомобилей и перевозка транспортных средств любого класса.",
    "Установка и перемещение оборудования, погрузо-разгрузочные работы на стройплощадке.",
  ];
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <SectionHead kicker="Для чего" title="Что мы делаем на наших манипуляторах и спецтехнике" align="left" />
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Мы предоставляем в аренду собственные манипуляторы, эвакуаторы, самосвалы и мини-экскаваторы для любых
            видов работ — от частной перевозки до обслуживания крупных строительных объектов в Екатеринбурге и
            Свердловской области.
          </p>
        </div>
        <ul className="space-y-3">
          {items.map((t) => (
            <li key={t} className="flex gap-3 bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="shrink-0 size-8 rounded-lg bg-primary text-primary-foreground grid place-items-center">
                <Wrench className="size-4" />
              </div>
              <span className="text-sm sm:text-base">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PriceList() {
  return (
    <section id="price" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHead kicker="Цены" title="Прайс на аренду спецтехники" subtitle="Стоимость указана с учётом подачи в черте города. По области — расчёт индивидуально." />
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          {priceList.map((row, idx) => (
            <div key={row.name}
                 className={`grid sm:grid-cols-[1fr_auto_auto] gap-2 sm:gap-6 items-center px-5 sm:px-7 py-4 sm:py-5 ${idx !== 0 ? "border-t border-border" : ""}`}>
              <div className="font-semibold">{row.name}</div>
              <div className="text-sm text-muted-foreground">{row.min}</div>
              <div className="text-lg font-bold text-primary sm:text-right">{row.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequestForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="request" className="py-16 sm:py-24 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHead kicker="Заявка" title="Оставьте заявку — перезвоним за 15 минут" />
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Ваше имя" name="name" placeholder="Иван" required />
            <Field label="Телефон" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
          </div>
          <div className="grid">
            <label className="text-sm font-semibold mb-1.5">Какая техника нужна</label>
            <select name="service" className="bg-background border border-input rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-ring">
              {slides.map((s) => <option key={s.title}>{s.title}</option>)}
              <option>Не знаю — нужна консультация</option>
            </select>
          </div>
          <div className="grid">
            <label className="text-sm font-semibold mb-1.5">Комментарий</label>
            <textarea name="comment" rows={3} placeholder="Адрес, дата, что нужно сделать"
                      className="bg-background border border-input rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button type="submit" className="btn-primary hover:btn-primary-hover justify-self-start">
            {sent ? "Заявка отправлена ✓" : "Отправить заявку"}
          </button>
          <p className="text-xs text-muted-foreground">
            Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid">
      <label className="text-sm font-semibold mb-1.5">{label}</label>
      <input {...props} className="bg-background border border-input rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHead kicker="Контакты" title="Свяжитесь с нами любым удобным способом" />
        <div className="grid sm:grid-cols-3 gap-4">
          <a href="tel:+79655067816" className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col gap-2">
            <div className="size-10 rounded-xl bg-secondary text-primary grid place-items-center"><Phone className="size-5" /></div>
            <div className="text-sm text-muted-foreground">Телефон</div>
            <div className="font-bold text-lg">+7 (965) 506-78-16</div>
          </a>
          <a href="mailto:spec.avto96@yandex.ru" className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col gap-2">
            <div className="size-10 rounded-xl bg-secondary text-primary grid place-items-center"><Mail className="size-5" /></div>
            <div className="text-sm text-muted-foreground">Email</div>
            <div className="font-bold text-lg break-all">spec.avto96@yandex.ru</div>
          </a>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col gap-2">
            <div className="size-10 rounded-xl bg-secondary text-primary grid place-items-center"><MapPin className="size-5" /></div>
            <div className="text-sm text-muted-foreground">Зона работы</div>
            <div className="font-semibold">Екатеринбург, Верхняя Пышма, Среднеуральск, Берёзовский</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} СпецАвто 96 — аренда спецтехники в Екатеринбурге</div>
        <a href="tel:+79655067816" className="font-semibold text-foreground hover:text-primary">+7 (965) 506-78-16</a>
      </div>
    </footer>
  );
}

function SectionHead({ kicker, title, subtitle, align = "center" }:
  { kicker: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === "center" ? "text-center max-w-2xl mx-auto" : ""}`}>
      <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-secondary px-3 py-1 rounded-full">
        {kicker}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground text-base sm:text-lg">{subtitle}</p>}
    </div>
  );
}
