import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const productLinks = [
  { title: "Силовые тренажеры", href: "/products/power" },
  { title: "Кардио тренажеры", href: "/products/cardio" },
  { title: "Функциональный тренинг", href: "/products/functional" },
];

const navLinks = [
  { title: "Главная", href: "/" },
  { title: "О нас", href: "/about" },
  { title: "О компании", href: "/company" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => location.pathname === href;
  const isProductActive = productLinks.some((l) => location.pathname.startsWith(l.href));

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center h-16 md:h-20 px-4">
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`font-heading text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                isActive(l.href) ? "text-primary" : "text-foreground/80"
              }`}
            >
              {l.title}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`font-heading text-sm uppercase tracking-widest transition-colors hover:text-primary flex items-center gap-1 ${
                isProductActive ? "text-primary" : "text-foreground/80"
              }`}
            >
              Продукция <ChevronDown className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 pt-2 w-64 z-[100]"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="bg-card border border-border rounded-lg shadow-xl py-2">
                  {productLinks.map((l) => (
                    <Link
                      key={l.href}
                      to={l.href}
                      className={`block px-4 py-3 text-sm transition-colors hover:bg-accent hover:text-primary ${
                        isActive(l.href) ? "text-primary" : "text-foreground/80"
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {l.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <button className="md:hidden ml-auto text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col py-4 px-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`font-heading text-sm uppercase tracking-widest py-3 border-b border-border transition-colors ${
                  isActive(l.href) ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {l.title}
              </Link>
            ))}
            <p className="font-heading text-xs uppercase tracking-widest text-muted-foreground pt-4 pb-2">Продукция</p>
            {productLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm py-3 border-b border-border transition-colors pl-4 ${
                  isActive(l.href) ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {l.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
