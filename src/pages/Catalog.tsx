import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import rackLiteMain from "@/assets/rack-lite-main.jpg";
import discRack2 from "@/assets/disc-rack-2.png";
import barbellRackLoaded from "@/assets/barbell-rack-loaded.png";
import { Dumbbell, Heart, Zap, Package } from "lucide-react";

const allProducts = [
  {
    id: "rack-lite",
    title: "RACK LITE",
    image: rackLiteMain,
    description: "Стойка для приседаний. Болтовая сборка, сталь 20 и 09Г2С. Надёжный партнёр для серьёзных тренировок.",
    price: "152 000 ₽",
    category: "Силовые тренажеры",
    href: "/product/rack-lite",
  },
  {
    id: "disc-rack-8",
    title: "Стойка для дисков HGL01",
    image: discRack2,
    description: "Сталь 3 мм, восемь держателей 50 мм. Компактная — подойдёт и залу, и дому.",
    price: "34 800 ₽",
    category: "Вспомогательное оборудование",
    href: "/product/disc-rack-8",
    imageNaturalSize: true,
  },
  {
    id: "barbell-rack-10",
    title: "Стойка для 10 грифов HGL02",
    image: barbellRackLoaded,
    description: "Надёжная стойка для хранения до 10 грифов. Каркас из стали 20, А-образная конструкция.",
    price: "65 000 ₽",
    category: "Вспомогательное оборудование",
    href: "/product/barbell-rack-10",
    imageNaturalSize: true,
  },
];

const comingSoon = [
  { title: "Кардио тренажеры", icon: Heart, description: "Беговые дорожки, велотренажеры, эллипсы", href: "/products/cardio" },
  { title: "Функциональный тренинг", icon: Zap, description: "Канатные машины, TRX, кроссоверы", href: "/products/functional" },
];

export default function Catalog() {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'2\' fill=\'white\'/%3E%3C/svg%3E")', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl uppercase tracking-wider text-center mb-4"
          >
            Весь <span className="text-primary">ассортимент</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный каталог оборудования HAGL — от силовых рам до стоек для хранения
          </p>

          {/* Available products */}
          <h2 className="font-heading text-2xl uppercase tracking-wider mb-6">
            В <span className="text-primary">наличии</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard
                  title={p.title}
                  image={p.image}
                  description={p.description}
                  price={p.price}
                  href={p.href}
                  imageNaturalSize={p.imageNaturalSize}
                />
              </motion.div>
            ))}
          </div>

          {/* Coming soon categories */}
          <h2 className="font-heading text-2xl uppercase tracking-wider mb-6">
            Скоро в <span className="text-primary">каталоге</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {comingSoon.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={cat.href}
                  className="block bg-card border border-border rounded-lg p-8 text-center hover-lift group"
                >
                  <cat.icon className="h-12 w-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-heading text-xl uppercase tracking-wide mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                  <span className="inline-block mt-4 text-xs text-muted-foreground/60 font-heading uppercase tracking-widest">В разработке</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
