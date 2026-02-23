import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import rackLite1 from "@/assets/rack-lite-1.jpg";
import rackLite2 from "@/assets/rack-lite-2.jpg";
import rackLite3 from "@/assets/rack-lite-3.jpg";
import rackLite4 from "@/assets/rack-lite-4.jpg";
import { useState } from "react";

const productsData: Record<string, {
  title: string;
  images: string[];
  description: string;
  price: string;
  specs: { label: string; value: string }[];
  category: string;
  categoryHref: string;
}> = {
  "rack-lite": {
    title: "RACK LITE",
    images: [rackLite1, rackLite2, rackLite3, rackLite4],
    description:
      "Стойка для приседаний, которая становится тихим и надёжным партнёром в ваших тренировках. Болтовая сборка позволяет собрать её в гараже или зале, а при необходимости — легко разобрать и перевезти. Конструкция из стали 20 обеспечивает прочность и долговечность, а ответственные элементы из стали 09Г2С гарантируют безопасность при максимальных нагрузках.",
    price: "По запросу",
    specs: [
      { label: "Размер", value: "1700×1200×2300 мм" },
      { label: "Масса", value: "260 кг" },
      { label: "Конструкция", value: "Сталь 20" },
      { label: "Отв. элементы", value: "Сталь 09Г2С" },
      { label: "Сборка", value: "Болтовая" },
      { label: "Покрытие", value: "Порошковая окраска" },
    ],
    category: "Силовые рамы",
    categoryHref: "/products/power",
  },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? productsData[id] : null;
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <Layout>
        <section className="section-padding text-center">
          <h1 className="font-heading text-4xl uppercase mb-4">Товар не найден</h1>
          <Link to="/products/power" className="text-primary hover:underline">
            ← Вернуться к каталогу
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <Link
            to={product.categoryHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {product.category}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="overflow-hidden rounded-lg mb-4 bg-secondary">
                <img
                  src={product.images[activeImage]}
                  alt={product.title}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`overflow-hidden rounded border-2 transition-colors ${
                      activeImage === i ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-auto aspect-square object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary text-sm font-heading uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl uppercase tracking-wider mt-2 mb-6">
                {product.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {product.specs.map((s) => (
                  <div key={s.label} className="bg-card border border-border rounded p-3">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="font-heading text-sm">{s.value}</p>
                  </div>
                ))}
              </div>

              <p className="font-heading text-2xl text-primary mb-6">{product.price}</p>

              <Link
                to="/company"
                className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Связаться для заказа
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
