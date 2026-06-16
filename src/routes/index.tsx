import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import tgIcon from "@/assets/tg.png";
import maxIcon from "@/assets/max.png";
import {
  Phone, Mail, MapPin, Truck, Wrench, ChevronLeft, ChevronRight,
  Shield, Clock, Award, ThumbsUp, Check, Menu, X,
} from "lucide-react";

import evacuator from "@/assets/evacu.jpeg";
import evacuator2 from "@/assets/evac2.jpg";
import evacuator3 from "@/assets/evac3.jpg";
import manipulator from "@/assets/manip.jpg";
import manipulator2 from "@/assets/manip2.jpg";
import bur1 from "@/assets/bur1.jpg";
import bur2 from "@/assets/bur2.jpg";
import samosval from "@/assets/samosvalo.jpeg";
import samosval2 from "@/assets/samosval2.jpg";
import samosval3 from "@/assets/samosval3.jpg";
import excavator from "@/assets/exka.jpg";
import excavator2 from "@/assets/exka2.jpg";
import excavator3 from "@/assets/exka3.jpg";
import img1990 from "@/assets/IMG_1990.jpeg";
import img2165 from "@/assets/IMG_2165.jpeg";
import img2501 from "@/assets/IMG_2501.jpeg";
import img2816 from "@/assets/IMG_2816.jpeg";
import img2971 from "@/assets/IMG_2971.jpeg";
import img3410 from "@/assets/IMG_3410.jpeg";
import img3455 from "@/assets/IMG_3455.jpeg";
import manipulatorPhoto from "@/assets/манипулятор.jpeg";
import specavto from "@/assets/спецавто.webp";
import specavto1 from "@/assets/спецавто1.webp";
import specavto2 from "@/assets/спецавто2.webp";
import excavatorPhoto from "@/assets/экскаватор.jpeg";

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
    images: [evacuator, evacuator2, evacuator3],
    price: "от 2 000 ₽/час",
    specs: ["Грузоподъёмность до 5 т", "Платформа 5,5 м", "Лебёдка 5 т", "Полная и частичная погрузка"],
  },
  {
    title: "Манипулятор",
    images: [manipulator, manipulator2],
    price: "от 2 500 ₽/час",
    specs: ["Стрела до 7 т / 20 м", "Кузов 6,2 × 2,4 м", "Грузоподъёмность борта 10 т", "Работа с длинномерами"],
  },
  {
    title: "Мини самосвал",
    images: [samosval, samosval2, samosval3],
    price: "от 2 200 ₽/час",
    specs: ["Объём кузова до 6 м³", "Грузоподъёмность 5 т", "Самосвальная разгрузка", "Сыпучие и строй-мусор"],
  },
  {
    title: "Мини экскаватор",
    images: [excavator, excavator2, excavator3],
    price: "от 2 800 ₽/час",
    specs: ["Глубина копания 3 м", "Ширина 1,5 м (узкие места)", "Сменные ковши", "Для частных и стройплощадок"],
  },
  {
    title: "Спецтехника для бурения",
    images: [bur1, bur2],
    price: "от 2 500 ₽/час",
    specs: ["Глубина копания 5 м", "Ширина 1,5 м (узкие места)", "Сменные ковши", "Для частных и стройплощадок"],
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
      <PhotoGrid />
      <About />
      <PriceList />
      <RequestForm />
      <Contacts />
      <Footer />

      {/* Кнопка звонка справа внизу */}
      <a
        href="tel:+79655067816"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform active:scale-90"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
      </a>
    </div>
  );
}

export default Index;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary text-primary-foreground grid place-items-center">
            <Truck className="size-5" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-base sm:text-lg">СпецАвто 96</div>
            <div className="text-[11px] sm:text-xs text-muted-foreground">Аренда спецтехники. Эвакуатор Екатеринбург</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#catalog" className="hover:text-primary">Каталог</a>
          <a href="#about" className="hover:text-primary">Услуги</a>
          <a href="#price" className="hover:text-primary">Цены</a>
          <a href="#contacts" className="hover:text-primary">Контакты</a>
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+79655067816"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <Phone className="size-4" />
            +7 (965) 506-78-16
          </a>
          <a href="#request" className="btn-primary hover:btn-primary-hover text-sm !py-2 !px-4">
            Заявка
          </a>
        </div>

        {/* Mobile right: иконки + бургер */}
        <div className="flex md:hidden items-center gap-3">
          
          <a href="https://t.me/yourhandle" aria-label="Telegram" target="_blank" rel="noopener noreferrer"
  className="size-10 rounded-xl grid place-items-center transition overflow-hidden">
  <img src={tgIcon} alt="Telegram" className="w-full h-full object-cover" />
</a>
          <a href="https://max.ru/yourhandle" aria-label="Max" target="_blank" rel="noopener noreferrer"
            className="size-10 rounded-xl bg-card border border-border grid place-items-center transition">
            <img src={maxIcon} alt="Max" className="w-full h-full object-cover rounded-xl" />
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Меню"
            className="size-10 rounded-xl bg-card border border-border grid place-items-center hover:text-primary transition">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur px-4 py-4 flex flex-col gap-3">
          <a href="#catalog" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary py-2">Каталог</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary py-2">Услуги</a>
          <a href="#price" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary py-2">Цены</a>
          <a href="#contacts" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary py-2">Контакты</a>
          <a href="#request" onClick={() => setOpen(false)} className="btn-primary hover:btn-primary-hover w-full mt-1">
            Оставить заявку
          </a>
        </div>
      )}
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

        {/* Мобилка: заголовок сверху по центру */}
        <div className="lg:hidden text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold">Аренда спецтехники</h1>
          <p className="mt-1 text-lg font-semibold text-primary">Екатеринбург и область</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Слайдер */}
          <div className="w-full lg:w-2/3 shrink-0">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-card shadow-2xl border border-border">
              {slides.map((s, idx) => (
                <div key={s.title} className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}>
                  <img src={s.image} alt={s.title} width={1280} height={896}
                    loading={idx === 0 ? "eager" : "lazy"} className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-background/95 via-background/80 to-transparent">
                    <div className="flex items-end justify-between gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold">{s.title}</h3>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Аренда</div>
                        <div className="text-lg sm:text-xl lg:text-3xl font-bold text-primary">{s.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={prev} aria-label="Назад"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/90 hover:bg-[#1A1A1A] hover:text-white grid place-items-center shadow-lg transition">
                <ChevronLeft className="size-5" />
              </button>
              <button onClick={next} aria-label="Вперёд"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/90 hover:bg-[#1A1A1A] hover:text-white grid place-items-center shadow-lg transition">
                <ChevronRight className="size-5" />
              </button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {slides.map((_, idx) => (
                <button key={idx} aria-label={`Слайд ${idx + 1}`} onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[#1A1A1A]" : "w-3 bg-border"}`} />
              ))}
            </div>
          </div>

          {/* Правая колонка — только десктоп */}
          <div className="hidden lg:flex w-1/3 flex-col gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">Аренда спецтехники</h1>
              <p className="mt-2 text-xl font-semibold text-primary">Екатеринбург и область</p>
              <p className="mt-3 text-muted-foreground text-lg">
                Эвакуаторы, манипуляторы, самосвалы и экскаваторы — собственный автопарк без посредников.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {utp.map((u) => <UtpCard key={u.title} {...u} compact />)}
            </div>
            <a href="#request" className="btn-primary hover:btn-primary-hover inline-flex text-lg px-10 py-5 self-center">
              Оставить заявку
            </a>
          </div>

          {/* Мобилка: после слайдера */}
          <div className="w-full lg:hidden flex flex-col gap-4">
            <p className="text-center text-muted-foreground text-base">
              Эвакуаторы, манипуляторы, самосвалы и экскаваторы — собственный автопарк без посредников.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {utp.map((u) => <UtpCard key={u.title} {...u} compact />)}
            </div>
            <a href="#request" className="btn-primary hover:btn-primary-hover inline-flex text-base px-8 py-4 self-center">
              Оставить заявку
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function UtpCard({
  icon: Icon, title, align = "left", compact = false,
}: {
  icon: typeof Award; title: string; text: string; align?: "left" | "right"; compact?: boolean;
}) {
  return (
    <div className={`bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-sm flex gap-3 items-center ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <div className="shrink-0 size-10 sm:size-11 rounded-xl bg-secondary text-primary grid place-items-center">
        <Icon className="size-5" />
      </div>
      <div className={`font-bold ${compact ? "text-sm" : "text-base sm:text-lg"}`}>{title}</div>
    </div>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHead kicker="Каталог" title="Спецтехника в аренду" subtitle="Современный автопарк. Опытные операторы. Работаем по Екатеринбургу и всей Свердловской области." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {catalog.map((c) => (
            <CatalogCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogCard({ title, images, price, specs }: {
  title: string;
  images: string[];
  price: string;
  specs: string[];
}) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
  const next = () => setIdx((p) => (p + 1) % images.length);

  return (
    <article className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col">

      {/* Фото сверху на всю ширину */}
      <div className="relative w-full aspect-[16/9] bg-secondary/40 overflow-hidden">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {images.length > 1 && (
          <>
            <button onClick={(e) => { e.preventDefault(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 hover:bg-background grid place-items-center shadow transition">
              <ChevronLeft className="size-5" />
            </button>
            <button onClick={(e) => { e.preventDefault(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 hover:bg-background grid place-items-center shadow transition">
              <ChevronRight className="size-5" />
            </button>
            <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1">
              {images.map((_, i) => (
                <button key={i} onClick={(e) => { e.preventDefault(); setIdx(i); }}
                  className={`h-1 rounded-full transition-all ${i === idx ? "w-5 bg-white" : "w-2 bg-white/50"}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Текст снизу */}
      <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        <div className="text-2xl sm:text-3xl font-bold text-primary">{price}</div>
        <ul className="space-y-1.5 text-sm sm:text-base text-muted-foreground flex-1">
          {specs.map((s) => (
            <li key={s} className="flex gap-2">
              <Check className="size-4 text-primary shrink-0 mt-0.5" />{s}
            </li>
          ))}
        </ul>
        <a href="#request" className="btn-primary hover:btn-primary-hover w-full mt-2">
          Оставить заявку
        </a>
      </div>

    </article>
  );
}
const photoGrid = [
  evacuator, manipulatorPhoto, specavto, excavatorPhoto,
  img1990, img2165, img2501, img2816,
  img2971, img3410, img3455, specavto1,
];

function PhotoGrid() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {photoGrid.map((src, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden cursor-zoom-in"
            onClick={() => setSelected(src)}>
            <img
              src={src}
              alt={`Техника ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Лайтбокс */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 size-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition"
          >
            <X className="size-6" />
          </button>
          <img
            src={selected}
            alt="Фото"
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
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
    <section id="about" className="py-16 sm:py-24 bg-background">
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
  const navigate = useNavigate(); // Инициализируем навигацию
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.startsWith("8")) val = "7" + val.slice(1);
    if (val.startsWith("7")) val = val;
    else if (val.length > 0) val = "7" + val;
    if (val.length > 11) val = val.slice(0, 11);
    setPhone(val ? "+" + val : "");
    setPhoneError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 11) {
      setPhoneError("Введите корректный номер (11 цифр)");
      return;
    }

    // Собираем данные из полей формы
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const service = formData.get("service") as string;
    const comment = formData.get("comment") as string;

    // Константы твоего телеграм-бота
    const TELEGRAM_BOT_TOKEN = "8690752748:AAE3V_iR68Ys6iKRYcD7Rcw9nTFvGaZqXgk";
    const TELEGRAM_CHAT_ID = "-5497763573";

    // Красиво форматируем текст сообщения для группы (Markdown)
    const text = `
🚨 *Новая заявка на спецтехнику!*

👤 *Имя:* ${name}
📞 *Телефон:* [${phone}](tel:${phone})
🚜 *Техника:* ${service}
📝 *Комментарий:* ${comment || "Не указан"}
    `.trim();

    try {
      // Отправляем запрос в Telegram API
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке в Telegram");
      }

      // После успешной отправки редиректим на страницу спасибо:
      navigate({ to: "/spasibo" });
    } catch (error) {
      console.error("Не удалось отправить заявку в ТГ:", error);
      // Если ТГ упал, всё равно пускаем юзера на страницу спасибо, чтобы не пугать ошибками,
      // но в консоль пишем лог. Либо можешь вывести alert.
      navigate({ to: "/spasibo" });
    }
  };

  return (
    <section id="request" className="relative overflow-hidden">
      {/* Фон */}
      <img src={evacuator} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Левая часть — текст */}
        <div className="text-white">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-white/10 px-3 py-1 rounded-full">
            Заявка
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Предварительный заказ спецтехники и эвакуатора
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            Вы можете оставить заявку на запланированную дату и рассчитать стоимость с оператором.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a href="tel:+79655067816" className="flex items-center gap-3 text-white hover:text-primary transition">
              <Phone className="size-5 shrink-0" />
              <span className="text-lg font-semibold">+7 (965) 506-78-16</span>
            </a>
          </div>
        </div>

        {/* Правая часть — форма */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 sm:p-8 grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid">
              <label className="text-sm font-semibold mb-1.5 text-white">Ваше имя</label>
              <input name="name" placeholder="Иван" required
                className="bg-white/10 border border-white/30 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-white/50" />
            </div>
            <div className="grid">
              <label className="text-sm font-semibold mb-1.5 text-white">
                Телефон <span className="text-primary">*</span>
              </label>
              <input
                name="phone" type="tel" placeholder="+7"
                value={phone} onChange={handlePhone} required
                className={`bg-white/10 border rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-white/50 ${phoneError ? "border-red-400" : "border-white/30"}`}
              />
              {phoneError && <p className="text-xs text-red-400 mt-1">{phoneError}</p>}
            </div>
          </div>
          <div className="grid">
            <label className="text-sm font-semibold mb-1.5 text-white">Какая техника нужна</label>
            <select name="service"
              className="bg-white/10 border border-white/30 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-primary text-white">
              {slides.map((s) => <option key={s.title} className="text-black">{s.title}</option>)}
              <option className="text-black">Не знаю — нужна консультация</option>
            </select>
          </div>
          <div className="grid">
            <label className="text-sm font-semibold mb-1.5 text-white">Комментарий</label>
            <textarea name="comment" rows={3} placeholder="Адрес, дата, что нужно сделать (необязательно)"
              className="bg-white/10 border border-white/30 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-white/50" />
          </div>
          <button type="submit" className="btn-primary hover:btn-primary-hover justify-self-start">
            Отправить заявку
          </button>
          <p className="text-xs text-white/50">
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

 