import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import avatarIllustration from "@/assets/avatar-illustration.png";

const HeroSection = () => {
  const { title, year, name } = portfolioConfig;

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-coral/10" />
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-ocean/10" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-forest/10" />
      </div>

      {/* Avatar Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-6"
      >
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-card shadow-xl">
          <img
            src={avatarIllustration}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Main Hero Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative text-center"
      >
        <h1 className="hero-title relative">
          <span className="relative inline-block">
            P
            <span className="absolute -top-2 -right-4 text-2xl md:text-4xl text-coral font-bold">
              +
            </span>
          </span>
          <span className="relative">
            ortf
            <span className="absolute -top-6 md:-top-8 right-0 text-lg md:text-2xl font-bold text-foreground">
              {year}
            </span>
          </span>
          <span className="text-coral italic">o</span>
          <span>li</span>
          <span className="text-coral italic">o</span>
        </h1>
      </motion.div>

      {/* Name Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8"
      >
        <div className="relative">
          {/* Lanyard effect */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-0.5 h-8 bg-muted-foreground/30" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-3 h-3 rounded-full bg-muted-foreground/50" />
          
          {/* Badge */}
          <div className="bg-card border border-border rounded-xl px-6 py-4 shadow-lg">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
              Designer
            </p>
            <p className="font-heading font-bold text-lg">{name}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
