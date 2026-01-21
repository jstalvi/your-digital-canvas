import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";

const AboutSection = () => {
  const { hero } = portfolioConfig;

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            {hero.greeting}{" "}
            <span className="text-coral">{hero.firstName}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
            {hero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
