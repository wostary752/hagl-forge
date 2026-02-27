import { motion } from "framer-motion";
import { Ruler, Cog, MessageSquare, Palette, Factory, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ContactFormDialog from "@/components/ContactFormDialog";

const steps = [
  { icon: MessageSquare, title: "Обсуждение идеи", text: "Вы рассказываете нам о своих потребностях, а мы предлагаем оптимальные решения" },
  { icon: Ruler, title: "Проектирование", text: "Наши инженеры создают 3D-модель и техническую документацию" },
  { icon: Palette, title: "Дизайн и отделка", text: "Выбор цвета, покрытия и брендирования под ваш зал" },
  { icon: Factory, title: "Производство", text: "Изготовление на собственном производстве с контролем качества" },
];

const features = [
  "Любые габариты и конфигурации",
  "Индивидуальный дизайн и брендирование",
  "Нестандартные нагрузочные характеристики",
  "Адаптация под особенности помещения",
  "Интеграция в существующую линейку оборудования",
  "Уникальные тренажеры для специализированных тренировок",
];

export default function CustomDevelopment() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container mx-auto relative z-10 px-4 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-primary text-sm font-heading uppercase tracking-[0.3em] mb-4"
          >
            Индивидуальный подход
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider mb-6"
          >
            Персональная <span className="text-gradient-red">разработка</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Создаём спортивное оборудование по вашему индивидуальному запросу — от идеи до готового изделия
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ContactFormDialog defaultProduct="Персональная разработка">
              <button className="bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm px-10 py-4 rounded hover:bg-primary/90 transition-colors">
                Обсудить проект
              </button>
            </ContactFormDialog>
          </motion.div>
        </div>
      </section>

      {/* What we can do */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wider text-center mb-4">
            Что мы <span className="text-primary">можем</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Наша команда инженеров и конструкторов готова реализовать любую вашу идею в металле
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-5 bg-background border border-border rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wider text-center mb-4">
            Как это <span className="text-primary">работает</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Простой и прозрачный процесс от первого обращения до готового тренажёра
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 text-xs font-heading text-primary/50">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-lg uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl text-center px-4">
          <Cog className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wider mb-6">
            Есть <span className="text-primary">идея?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Расскажите нам о вашем проекте — мы оценим возможности и предложим решение. 
            Консультация бесплатна.
          </p>
          <ContactFormDialog defaultProduct="Персональная разработка">
            <button className="bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm px-10 py-4 rounded hover:bg-primary/90 transition-colors">
              Связаться с нами
            </button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
}
