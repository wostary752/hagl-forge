import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Award, Wrench, Dumbbell, Heart, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import ContactFormDialog from "@/components/ContactFormDialog";
import heroBg from "@/assets/hero-bg.jpg";
import rackLite from "@/assets/rack-lite-1.jpg";

const categories = [
  { title: "Силовые тренажеры", icon: Dumbbell, description: "Рамы, скамьи, нагружаемые тренажеры", href: "/products/power" },
  { title: "Кардио тренажеры", icon: Heart, description: "Беговые дорожки, велотренажеры, эллипсы", href: "/products/cardio" },
  { title: "Функциональный тренинг", icon: Zap, description: "Канатные машины, TRX, кроссоверы", href: "/products/functional" },
];

const advantages = [
  { icon: Shield, title: "Гарантия качества", text: "Все тренажеры проходят многоступенчатый контроль качества" },
  { icon: Award, title: "Профессиональное оборудование", text: "Используется в элитных фитнес-клубах и спортзалах" },
  { icon: Wrench, title: "Надёжная конструкция", text: "Сталь 20 и 09Г2С — материалы, проверенные временем" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider mb-6"
          >
            HAGL — <span className="text-gradient-red">Сила</span> начинается здесь
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Профессиональное спортивное оборудование для тех, кто понимает, что такое настоящая работа с железом
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/products/power"
              className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-primary/90 transition-colors"
            >
              Перейти к продукции
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl uppercase tracking-wider mb-6"
          >
            О бренде <span className="text-primary">HAGL</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            HAGL — это бренд, рождённый из страсти к силовому спорту и инженерной точности. 
            Мы создаём тренажеры не для галочки в каталоге, а для людей, которые понимают, 
            что такое настоящая работа с железом. Каждая деталь продумана до мелочей.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wider text-center mb-12">
            Категории <span className="text-primary">продукции</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={cat.href}
                  className="block bg-background border border-border rounded-lg p-8 text-center hover-lift group"
                >
                  <cat.icon className="h-12 w-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-heading text-xl uppercase tracking-wide mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <img src={rackLite} alt="HAGL Rack Lite" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-heading uppercase tracking-widest">Хит продаж</span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wider mt-2 mb-6">
                RACK LITE
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Стойка для приседаний, которая становится тихим и надёжным партнёром в ваших тренировках. 
                Болтовая сборка позволяет собрать её в гараже или зале, а при необходимости — легко разобрать и перевезти.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card border border-border rounded p-3">
                  <p className="text-xs text-muted-foreground">Размер</p>
                  <p className="font-heading text-sm">1700×1200×2300 мм</p>
                </div>
                <div className="bg-card border border-border rounded p-3">
                  <p className="text-xs text-muted-foreground">Масса</p>
                  <p className="font-heading text-sm">260 кг</p>
                </div>
              </div>
              <Link
                to="/products/power"
                className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Смотреть в каталоге
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wider text-center mb-12">
            Наши <span className="text-primary">преимущества</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <a.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-lg uppercase tracking-wide mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wider mb-6">
            Готовы <span className="text-primary">начать?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Свяжитесь с нами для консультации или подбора оборудования для вашего зала
          </p>
          <ContactFormDialog>
            <button className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-primary/90 transition-colors">
              Связаться с нами
            </button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
}
