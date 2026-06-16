import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";

export const Route = createFileRoute("/spasibo")({
  component: Spasibo,
});

function Spasibo() {
  useEffect(() => {
    // Безопасный вызов Яндекс.Метрики без ругани TypeScript
    if (typeof window !== "undefined" && (window as any).ym) {
      (window as any).ym(109869713, "reachGoal", "form_submit");
    } else {
      console.warn("Яндекс.Метрика не инициализирована или заблокирована.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-border rounded-3xl p-8 text-center shadow-xl flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="size-16 rounded-full bg-primary/10 text-primary grid place-items-center">
          <CheckCircle className="size-10" />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Заявка принята!</h1>
          <p className="mt-2 text-muted-foreground">
            Спасибо за обращение. Наш оператор свяжется с вами в течение 15–30 минут для подтверждения заказа и расчёта стоимости.
          </p>
        </div>

        <div className="w-full bg-secondary/50 rounded-2xl p-4 flex flex-col gap-2 text-sm">
          <div className="text-muted-foreground">Срочный вопрос? Звоните напрямую:</div>
          <a href="tel:+79655067816" className="font-bold text-lg text-foreground hover:text-primary transition flex items-center justify-center gap-2">
            <Phone className="size-4" /> +7 (965) 506-78-16
          </a>
        </div>

        <Link
          to="/"
          className="btn-primary hover:btn-primary-hover w-full justify-center flex items-center gap-2 text-sm py-3"
        >
          <ArrowLeft className="size-4" /> Вернуться на главную
        </Link>
      </div>
    </div>
  );
}