import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import discRackNew from "@/assets/disc-rack-new.png";
import barbellRackLoaded from "@/assets/barbell-rack-loaded.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const discRacks = [
  {
    id: "disc-rack-8",
    title: "Стойка для дисков HGL01",
    image: discRackNew,
    description:
      "Сталь 3 мм, восемь держателей 50 мм. Компактная — подойдёт и залу, и дому. Порошковое покрытие сохраняет вид на годы.",
    price: "34 800 ₽",
  },
  {
    id: "barbell-rack-10",
    title: "Стойка для 10 грифов HGL02",
    image: barbellRackLoaded,
    description:
      "Надёжная стойка для хранения до 10 грифов. Прочный каркас из стали 20 выдерживает интенсивную эксплуатацию. Компактная А-образная конструкция экономит место в зале.",
    price: "65 000 ₽",
  },
];

const benches: unknown[] = [];
const holders: unknown[] = [];

export default function AuxiliaryEquipment() {
  const [activeTab, setActiveTab] = useState("disc-racks");

  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'2\' fill=\'white\'/%3E%3C/svg%3E")', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl uppercase tracking-wider text-center mb-4"
          >
            Вспомогательное <span className="text-primary">оборудование</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Стойки для дисков, скамейки, держатели и аксессуары для комфортной организации пространства зала
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-3 mb-10 w-auto h-auto p-2 bg-muted/50 rounded-lg">
              <TabsTrigger value="disc-racks" className="font-heading uppercase tracking-wider px-6 py-3 text-sm">
                Стойки
              </TabsTrigger>
              <TabsTrigger value="benches" className="font-heading uppercase tracking-wider px-6 py-3 text-sm">
                Скамейки
              </TabsTrigger>
              <TabsTrigger value="holders" className="font-heading uppercase tracking-wider px-6 py-3 text-sm">
                Держатели
              </TabsTrigger>
            </TabsList>

            <TabsContent value="disc-racks">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {discRacks.map((p) => (
                  <ProductCard
                    key={p.id}
                    title={p.title}
                    image={p.image}
                    description={p.description}
                    price={p.price}
                    href={`/product/${p.id}`}
                    imageNaturalSize
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="benches">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center py-16 text-muted-foreground"
              >
                Раздел в разработке. Скоро здесь появятся скамейки для жима и гиперэкстензии.
              </motion.div>
            </TabsContent>

            <TabsContent value="holders">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center py-16 text-muted-foreground"
              >
                Раздел в разработке. Скоро здесь появятся держатели для гантелей и блинов.
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
