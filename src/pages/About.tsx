import { motion } from "framer-motion";
import { Target, Eye, Trophy, Users } from "lucide-react";
import Layout from "@/components/Layout";
import rackGym from "@/assets/rack-gym.jpg";

const values = [
  { icon: Target, title: "Точность", text: "Каждый элемент изготавливается с точностью до миллиметра" },
  { icon: Eye, title: "Внимание к деталям", text: "Продуманная эргономика и дизайн" },
  { icon: Trophy, title: "Превосходство", text: "Стремление к лучшему результату в каждом продукте" },
  { icon: Users, title: "Для людей", text: "Оборудование, созданное спортсменами для спортсменов" },
];

export default function About() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl uppercase tracking-wider mb-6">
            О бренде <span className="text-primary">HAGL</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed">
            HAGL — это не просто производитель тренажеров. Это философия силы, воплощённая в стали.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-6">
              Наша <span className="text-primary">история</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Бренд HAGL родился из простой идеи: спортивное оборудование должно быть таким же сильным, 
              как и люди, которые на нём тренируются. Основатели компании — спортсмены и инженеры — 
              объединили свой опыт, чтобы создать линейку тренажеров, не имеющую аналогов по качеству 
              и функциональности.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Название HAGL вдохновлено образом викинга — воина, который не знает компромиссов. 
              Так же и наше оборудование: бескомпромиссное качество, суровая надёжность, 
              безупречная функциональность.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-lg overflow-hidden">
            <img src={rackGym} alt="Оборудование HAGL в спортзале" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-center mb-12">
            Миссия и <span className="text-primary">ценности</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-lg p-6 text-center hover-lift">
                <v.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-lg uppercase tracking-wide mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
