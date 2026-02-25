import Layout from "@/components/Layout";

export default function LicenseAgreement() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl prose prose-invert prose-sm">
          <h1 className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-8">
            Лицензионное соглашение
          </h1>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">1. Предмет соглашения</h2>
          <p className="text-muted-foreground leading-relaxed">
            Настоящее Лицензионное соглашение (далее — Соглашение) регулирует условия использования сайта HAGL (далее — Сайт) и всех его материалов.
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">2. Условия использования</h2>
          <p className="text-muted-foreground leading-relaxed">
            Используя Сайт, пользователь подтверждает своё согласие с условиями настоящего Соглашения. Если пользователь не согласен с условиями, он обязан прекратить использование Сайта.
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">3. Интеллектуальная собственность</h2>
          <p className="text-muted-foreground leading-relaxed">
            Все материалы, размещённые на Сайте (тексты, изображения, логотипы, графические элементы, дизайн), являются объектами интеллектуальной собственности HAGL и защищены законодательством Российской Федерации. Копирование, распространение или иное использование материалов без письменного согласия правообладателя запрещено.
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">4. Ограничение ответственности</h2>
          <p className="text-muted-foreground leading-relaxed">
            Оператор не несёт ответственности за возможные технические сбои в работе Сайта, а также за любые убытки, понесённые пользователем в связи с использованием или невозможностью использования Сайта.
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">5. Изменения соглашения</h2>
          <p className="text-muted-foreground leading-relaxed">
            Оператор оставляет за собой право вносить изменения в настоящее Соглашение без предварительного уведомления пользователей. Актуальная версия Соглашения всегда доступна на данной странице.
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">6. Контактная информация</h2>
          <p className="text-muted-foreground leading-relaxed">
            По всем вопросам, связанным с настоящим Соглашением, вы можете обратиться по адресу: hagl.info@mail.ru
          </p>
        </div>
      </section>
    </Layout>
  );
}
