import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDown, Award, Sparkles, ChevronRight } from "lucide-react";
import img11 from "@/assets/img11.jpg";
import img130 from "@/assets/img130.jpg";
import img48 from "@/assets/img48.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 bg-ink text-primary-foreground overflow-hidden flex flex-col justify-between">
      {/* Background Decor */}
      <div className="absolute inset-0 pattern-watermark opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-maroon/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Copy */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-maroon/80 border border-brand/40 text-brand text-xs font-black uppercase tracking-widest">
              <Award className="w-4 h-4 text-brand" />
              <span>YAZID AL-HUSSEINI TRADING EST.</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              {t("brand_name")} <br />
              <span className="text-brand inline-block mt-2 font-black">{t("brand_sub")}</span>
            </h1>

            <p className="font-body text-lg sm:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              {t("hero_desc")}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#materials"
                className="px-8 py-4 bg-brand text-brand-foreground font-heading font-black text-sm uppercase tracking-widest shadow-xl hover:bg-white hover:text-ink transition-all flex items-center gap-2 group"
              >
                <span>{t("cta_explore")}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-brand/80 text-white font-heading font-black text-sm uppercase tracking-widest hover:bg-brand-maroon transition-all"
              >
                {t("cta_contact")}
              </a>
            </div>
          </motion.div>

          {/* Featured Visual Grid matching Page 1 & 2 layout */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden border-2 border-brand/40 shadow-2xl group">
              <img
                src={img11}
                alt="Interior design fixture"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            </div>

            <div className="relative overflow-hidden border-2 border-brand/40 shadow-2xl group mt-6">
              <img
                src={img48}
                alt="Modern facade cladding"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Feature Slogan Banner matching Page 1 & 2 Bottom Banner */}
        <motion.div
          className="mt-12 relative overflow-hidden border-2 border-brand/50 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={img130}
            alt="Making your vision become a reality"
            className="w-full h-44 sm:h-52 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/90 via-brand/80 to-brand-maroon/90 flex flex-col items-center justify-center text-center p-4">
            <Sparkles className="w-6 h-6 text-brand mb-1 animate-pulse" />
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-wide uppercase">
              {t("hero_tagline_en")}
            </h2>
            <p className="font-body text-xl sm:text-2xl font-bold text-amber-200 mt-1">
              "{t("hero_tagline")}"
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 flex justify-center pt-6">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="p-3 bg-brand-maroon border border-brand text-brand hover:bg-brand hover:text-brand-foreground transition-all animate-bounce"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
