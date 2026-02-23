import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";

type SubCategory = "all" | "treadmills" | "bikes" | "ellipticals";

const filters: { label: string; value: SubCategory }[] = [
  { label: "Все", value: "all" },
  { label: "Беговые дорожки", value: "treadmills" },
  { label: "Велотренажеры", value: "bikes" },
  { label: "Эллиптические", value: "ellipticals" },
];

const products = [
  { id: "treadmill-1", title: "HAGL RUN-800", description: "Коммерческая беговая дорожка. Скорость до 22 км/ч, наклон до 15%.", price: "По запросу", category: "treadmills" as SubCategory },
  { id: "bike-1", title: "HAGL CYCLE-300", description: "Вертикальный велотренажер с магнитной системой нагружения. 24 уровня.", price: "По запросу", category: "bikes" as SubCategory },
  { id: "elliptical-1", title: "HAGL ELLIPSE-500", description: "Эллиптический тренажер с длиной шага 51 см. Электромагнитное сопротивление.", price: "По запросу", category: "ellipticals" as SubCategory },
];

export default function CardioEquipment() {
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
            Кардио <span className="text-primary">тренажеры</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-10">
            Оборудование для кардиозон профессионального уровня
          </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} title={p.title} image="/placeholder.svg" description={p.description} price={p.price} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
