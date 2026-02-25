import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl prose prose-invert prose-sm">
          <h1 className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-8">
            Политика обработки персональных данных
          </h1>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">1. Общие положения</h2>
          <p className="text-muted-foreground leading-relaxed">
            Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей сайта HAGL (далее — Оператор).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Оператор обеспечивает защиту обрабатываемых персональных данных от несанкционированного доступа и разглашения в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">2. Сбор персональных данных</h2>
          <p className="text-muted-foreground leading-relaxed">
            Оператор собирает следующие персональные данные пользователей:
          </p>
          <ul className="text-muted-foreground list-disc pl-6 space-y-1">
            <li>Имя</li>
            <li>Номер телефона</li>
            <li>Адрес электронной почты</li>
            <li>Информация о интересующем товаре</li>
          </ul>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">3. Цели обработки</h2>
          <p className="text-muted-foreground leading-relaxed">
            Персональные данные обрабатываются в следующих целях:
          </p>
          <ul className="text-muted-foreground list-disc pl-6 space-y-1">
            <li>Обработка заявок и обратная связь с пользователем</li>
            <li>Предоставление консультаций по продукции</li>
            <li>Улучшение качества обслуживания</li>
          </ul>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">4. Защита данных</h2>
          <p className="text-muted-foreground leading-relaxed">
            Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">5. Права пользователя</h2>
          <p className="text-muted-foreground leading-relaxed">
            Пользователь имеет право на получение информации об обработке его персональных данных, а также на отзыв согласия на обработку данных путём направления письменного запроса на адрес электронной почты: hagl.info@mail.ru.
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">6. Файлы cookie</h2>
          <p className="text-muted-foreground leading-relaxed">
            Сайт использует файлы cookie для обеспечения корректной работы, анализа трафика и улучшения пользовательского опыта. Пользователь может отключить использование cookie в настройках браузера, однако это может повлиять на функциональность сайта.
          </p>

          <h2 className="font-heading text-xl uppercase tracking-wide mt-8 mb-4">7. Контактная информация</h2>
          <p className="text-muted-foreground leading-relaxed">
            По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться по адресу: hagl.info@mail.ru
          </p>
        </div>
      </section>
    </Layout>
  );
}
