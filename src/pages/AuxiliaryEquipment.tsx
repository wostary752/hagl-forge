import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import discRack1 from "@/assets/disc-rack-1.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const discRacks = [
  {
    id: "disc-rack-8",
    title: "Стойка для дисков HGL01",
    image: discRack1,
    description:
      "Сталь 3 мм, восемь держателей 50 мм. Компактная — подойдёт и залу, и дому. Порошковое покрытие сохраняет вид на годы.",
    price: "34 800 ₽",
  },
];

const benches: unknown[] = [];
const holders: unknown[] = [];

export default function AuxiliaryEquipment() {
  const [activeTab, setActiveTab] = useState("disc-racks");

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
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
            <TabsList className="flex flex-wrap justify-center gap-2 mb-10 w-full h-auto p-2 bg-muted/50">
              <TabsTrigger value="disc-racks" className="font-heading uppercase tracking-wider">
                Стойки для дисков
              </TabsTrigger>
              <TabsTrigger value="benches" className="font-heading uppercase tracking-wider">
                Скамейки
              </TabsTrigger>
              <TabsTrigger value="holders" className="font-heading uppercase tracking-wider">
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
