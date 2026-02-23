import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import rackLite1 from "@/assets/rack-lite-1.jpg";
import rackLite2 from "@/assets/rack-lite-2.jpg";

type SubCategory = "all" | "racks" | "benches" | "machines";

const filters: { label: string; value: SubCategory }[] = [
  { label: "Все", value: "all" },
  { label: "Силовые рамы", value: "racks" },
  { label: "Скамьи и стойки", value: "benches" },
  { label: "Нагружаемые тренажеры", value: "machines" },
];

const products = [
  {
    id: "rack-lite",
    title: "RACK LITE",
    image: rackLite1,
    description: "Силовая рама для приседаний с болтовой сборкой. 1700×1200×2300 мм, 260 кг. Сталь 20 / 09Г2С.",
    price: "По запросу",
    category: "racks" as SubCategory,
  },
  {
    id: "rack-lite-pro",
    title: "RACK LITE PRO",
    image: rackLite2,
    description: "Усиленная версия с верхним и нижним блоком. Полный набор для силового тренинга.",
    price: "По запросу",
    category: "racks" as SubCategory,
  },
  {
    id: "bench-adjustable",
    title: "BENCH ADJ-200",
    description: "Регулируемая скамья с 7 положениями спинки. Максимальная нагрузка 400 кг.",
    image: rackLite1,
    price: "По запросу",
    category: "benches" as SubCategory,
  },
  {
    id: "leg-press",
    title: "LEG PRESS HP-500",
    description: "Жим ногами под углом 45°. Грузоподъёмность 600 кг. Плавная система нагружения.",
    image: rackLite2,
    price: "По запросу",
    category: "machines" as SubCategory,
  },
];

export default function PowerEquipment() {
  const [filter, setFilter] = useState<SubCategory>("all");

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl uppercase tracking-wider text-center mb-4"
          >
            Силовые <span className="text-primary">тренажеры</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Профессиональное силовое оборудование для коммерческих залов и домашнего использования
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`font-heading text-xs uppercase tracking-widest px-5 py-2.5 rounded border transition-colors ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                title={p.title}
                image={p.image}
                description={p.description}
                price={p.price}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
