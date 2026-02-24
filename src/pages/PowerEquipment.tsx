import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import rackLite2 from "@/assets/rack-lite-2.jpg";

const products = [
  {
    id: "rack-lite",
    title: "RACK LITE",
    image: rackLite2,
    description: "Силовая рама для приседаний с болтовой сборкой. 1700×1200×2300 мм, 260 кг. Сталь 20 / 09Г2С.",
    price: "Цена по запросу",
  },
];

export default function PowerEquipment() {
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                title={p.title}
                image={p.image}
                description={p.description}
                price={p.price}
                href={`/product/${p.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
