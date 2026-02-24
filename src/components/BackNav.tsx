import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const pages = [
  { title: "Главная", href: "/" },
  { title: "Силовые тренажеры", href: "/products/power" },
  { title: "Кардио тренажеры", href: "/products/cardio" },
  { title: "Функциональный тренинг", href: "/products/functional" },
  { title: "О нас", href: "/about" },
  { title: "О компании", href: "/company" },
];

export default function BackNav() {
  const location = useLocation();
  const currentIndex = pages.findIndex((p) => p.href === location.pathname);
  
  if (currentIndex <= 0) return null;

  const prev = pages[currentIndex - 1];

  return (
    <div className="container mx-auto px-4 pt-6">
      <Link
        to={prev.href}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {prev.title}
      </Link>
    </div>
  );
}
