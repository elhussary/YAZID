import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDown } from "lucide-react";
import hero from "@/assets/p1_4.jpg.asset.json";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      <img
        src={hero.url}
        alt="Wood-clad building facade at dusk"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

      <div className="container relative z-10 mx-auto px-4 pb-24 pt-40 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            {t("brand_name")}
          </h1>
          <span className="inline-block mt-3 bg-brand text-brand-foreground font-heading text-lg md:text-2xl font-extrabold px-3 py-1">
            {t("brand_sub")}
          </span>

          <p className="mt-8 font-body text-lg md:text-2xl text-primary-foreground/85 max-w-2xl leading-relaxed">
            {t("hero_desc")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#materials"
              className="px-7 py-3.5 bg-brand text-brand-foreground font-body text-sm font-bold uppercase tracking-widest hover:brightness-110 transition"
            >
              {t("cta_explore")}
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-primary-foreground/50 font-body text-sm font-bold uppercase tracking-widest hover:bg-primary-foreground hover:text-ink transition"
            >
              {t("cta_contact")}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 inset-x-0 z-10 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to about"
          className="p-3 rounded-full border border-primary-foreground/30 text-primary-foreground animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
