import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BadgeCheck, Globe2 } from "lucide-react";
import img280 from "@/assets/img280.jpg";

const ExclusiveSection = () => {
  const { t } = useTranslation();

  return (
    <section id="exclusive" className="relative py-32 overflow-hidden bg-ink text-primary-foreground border-y-4 border-brand">
      {/* Background image from Page 4 */}
      <img
        src={img280}
        alt="Saudi business partnership handshake"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/80 to-ink/90" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-brand-foreground font-heading font-black text-xs uppercase tracking-widest shadow-xl">
            <Globe2 className="w-4 h-4" />
            <span>EXCLUSIVE REGIONAL DISTRIBUTOR</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t("excl_title")}
          </h2>

          {/* Yellow/Gold Banner Box matching Page 4 of Portfolio20 PDF */}
          <div className="bg-gradient-to-r from-amber-500 via-brand to-amber-500 text-brand-foreground p-8 sm:p-10 shadow-2xl border-2 border-white/30 text-center">
            <BadgeCheck className="w-12 h-12 text-ink mx-auto mb-4" />
            <p className="font-body text-xl sm:text-3xl font-black leading-snug">
              "{t("excl_text")}"
            </p>
            <p className="font-heading text-base sm:text-xl font-bold mt-4 text-ink/80 tracking-wide">
              {t("excl_sub")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveSection;
