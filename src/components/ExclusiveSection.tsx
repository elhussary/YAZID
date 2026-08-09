import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BadgeCheck } from "lucide-react";
import img from "@/assets/p4_4.jpg.asset.json";

const ExclusiveSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-28 overflow-hidden">
      <img
        src={img.url}
        alt="Business handshake"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <motion.div
        className="container relative z-10 mx-auto px-4 text-center max-w-3xl text-primary-foreground"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <BadgeCheck className="w-10 h-10 text-brand mx-auto" />
        <h2 className="mt-6 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
          {t("excl_title")}
        </h2>
        <span className="block h-1 w-16 bg-brand mx-auto mt-4" />
        <p className="mt-6 font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          {t("excl_text")}
        </p>
      </motion.div>
    </section>
  );
};

export default ExclusiveSection;
