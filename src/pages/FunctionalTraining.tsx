import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: "crossover-1", title: "HAGL CROSSOVER-700", description: "Кроссовер с двойным блоком. Регулировка высоты в 20 позициях. Вес стека 2×90 кг.", price: "По запросу" },
  { id: "functional-1", title: "HAGL FUNCTIONAL RIG", description: "Функциональная рама для групповых тренировок. Модульная система расширения.", price: "По запросу" },
  { id: "cable-1", title: "HAGL CABLE STATION", description: "Тросовая станция с верхним и нижним блоком. Компактное решение для любого зала.", price: "По запросу" },
];

export default function FunctionalTraining() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl uppercase tracking-wider text-center mb-4"
          >
            Функциональный <span className="text-primary">тренинг</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-12">
            Оборудование для функциональных и групповых тренировок
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} title={p.title} image="/placeholder.svg" description={p.description} price={p.price} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
