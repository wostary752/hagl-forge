import { motion } from "framer-motion";
import { Factory, CheckCircle, ShieldCheck, Award } from "lucide-react";
import Layout from "@/components/Layout";
import certificate1 from "@/assets/certificate-1.png";
import certificate2 from "@/assets/certificate-2.png";
import { useState } from "react";

const standards = [
  "Многоступенчатый контроль на каждом этапе производства",
  "Использование сертифицированных материалов (Сталь 20, 09Г2С)",
  "Порошковая покраска с антикоррозийной обработкой",
  "Испытание каждого изделия на предельные нагрузки",
  "Гарантия 3 года на все конструкционные элементы",
];

const certificates = [
  { image: certificate1, title: "Свидетельство АЦСТ-140-00681", description: "Аттестация технологии сварки РАД в соответствии с РД 03-615-03. Действительно до 22.07.2029 г." },
  { image: certificate2, title: "Свидетельство АЦСТ-140-00640", description: "Аттестация технологии сварки РД в соответствии с РД 03-615-03. Действительно до 24.01.2029 г." },
];

export default function Company() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl uppercase tracking-wider mb-6">
            О <span className="text-primary">компании</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed">
            HAGL — российский производитель профессионального спортивного оборудования. 
            Мы проектируем, производим и поставляем тренажеры, соответствующие самым высоким стандартам индустрии.
          </motion.p>
        </div>
      </section>

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

      {/* Certificates */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl uppercase tracking-wider mb-4">
              Сертификаты и <span className="text-primary">аттестации</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Производство аттестовано Национальным агентством контроля сварки (НАКС). 
              Свидетельства подтверждают готовность к применению аттестованной технологии сварки.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover-lift cursor-pointer"
                onClick={() => setLightbox(cert.image)}
              >
                <div className="bg-white p-4">
                  <img src={cert.image} alt={cert.title} className="w-full h-auto" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm uppercase tracking-wide mb-1">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Сертификат" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg" />
        </div>
      )}

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl text-center">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl uppercase tracking-wider mb-6">
            Гарантийная <span className="text-primary">политика</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Мы предоставляем гарантию 3 года на все конструкционные элементы тренажеров. 
            Гарантия распространяется на сварные швы, крепёжные узлы и основные рамы.
          </p>
        </div>
      </section>
    </Layout>
  );
}
