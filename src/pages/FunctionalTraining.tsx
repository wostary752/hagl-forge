import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import Layout from "@/components/Layout";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto text-center bg-card border border-border rounded-lg p-12"
          >
            <Construction className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="font-heading text-2xl uppercase tracking-wider mb-4">
              Раздел в разработке
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Мы работаем над линейкой оборудования для функционального тренинга. Скоро здесь появятся кроссоверы, канатные станции и модульные рамы.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
