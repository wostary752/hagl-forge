import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  price?: string;
  href?: string;
}

export default function ProductCard({ title, image, description, price, href }: ProductCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card border border-border rounded-lg overflow-hidden hover-lift"
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg uppercase tracking-wide mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        {price && <p className="font-heading text-primary text-lg">{price}</p>}
        <span className="inline-block mt-3 text-sm text-primary font-medium border-b border-primary pb-0.5 group-hover:border-primary/50 transition-colors">
          Подробнее →
        </span>
      </div>
    </motion.div>
  );

  return href ? <Link to={href}>{content}</Link> : content;
}
