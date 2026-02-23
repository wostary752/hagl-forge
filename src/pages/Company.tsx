import { motion } from "framer-motion";
import { Factory, CheckCircle, Handshake, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";

const standards = [
  "Многоступенчатый контроль на каждом этапе производства",
  "Использование сертифицированных материалов (Сталь 20, 09Г2С)",
  "Порошковая покраска с антикоррозийной обработкой",
  "Испытание каждого изделия на предельные нагрузки",
  "Гарантия 3 года на все конструкционные элементы",
];

const partners = [
  "Элитные фитнес-клубы России",
  "Спортивные университеты и академии",
  "Crossfit-залы и боксы",
  "Реабилитационные центры",
];

export default function Company() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl uppercase tracking-wider mb-6"
          >
            О <span className="text-primary">компании</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            HAGL — российский производитель профессионального спортивного оборудования. 
            Мы проектируем, производим и поставляем тренажеры, соответствующие самым высоким стандартам индустрии.
          </motion.p>
        </div>
      </section>

      {/* Production standards */}
      <section className="section-padding bg-card">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Factory className="h-10 w-10 text-primary mb-4" />
            <h2 className="font-heading text-3xl uppercase tracking-wider mb-6">
              Производственные <span className="text-primary">стандарты</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Наше производство оснащено современным оборудованием для лазерной резки, 
              гибки и сварки металлоконструкций. Каждый тренажер проходит полный цикл 
              контроля качества перед отправкой клиенту.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-xl uppercase tracking-wide mb-4">Контроль качества</h3>
            <div className="space-y-3">
              {standards.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Handshake className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl uppercase tracking-wider">
              Наши <span className="text-primary">партнёры</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p) => (
              <div key={p} className="bg-card border border-border rounded-lg p-5 text-center text-sm text-muted-foreground">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl text-center">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl uppercase tracking-wider mb-6">
            Гарантийная <span className="text-primary">политика</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Мы предоставляем гарантию 3 года на все конструкционные элементы тренажеров. 
            Гарантия распространяется на сварные швы, крепёжные узлы и основные рамы.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Дополнительно: пожизненная гарантия на рамные конструкции серии PRO.
          </p>
        </div>
      </section>
    </Layout>
  );
}
