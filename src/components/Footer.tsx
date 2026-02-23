import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-2xl uppercase tracking-wider text-primary mb-4">HAGL</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональное спортивное оборудование. Сила, качество, надёжность.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest mb-4">Навигация</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <Link to="/about" className="hover:text-primary transition-colors">О нас</Link>
              <Link to="/company" className="hover:text-primary transition-colors">О компании</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest mb-4">Продукция</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/products/power" className="hover:text-primary transition-colors">Силовые тренажеры</Link>
              <Link to="/products/cardio" className="hover:text-primary transition-colors">Кардио тренажеры</Link>
              <Link to="/products/functional" className="hover:text-primary transition-colors">Функциональный тренинг</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest mb-4">Контакты</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>info@hagl.ru</p>
              <p>+7 (800) 123-45-67</p>
              <p>Москва, Россия</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © 2026 HAGL. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
