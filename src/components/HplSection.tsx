import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Check, Quote } from "lucide-react";
import main from "@/assets/p7_6.jpg.asset.json";
import kitchen from "@/assets/p10_4.jpg.asset.json";
import door from "@/assets/p7_7.jpg.asset.json";

const HplSection = () => {
  const { t } = useTranslation();
  const features = ["hpl_f1", "hpl_f2", "hpl_f3", "hpl_f4", "hpl_f5", "hpl_f6"];
  const apps = ["hpl_a1", "hpl_a2", "hpl_a3", "hpl_a4", "hpl_a5", "hpl_a6"];

  return (
    <section id="hpl" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight">
              {t("hpl_title")}
            </h2>
            <span className="block h-1 w-16 bg-brand mt-4" />
            <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed">
              {t("hpl_text")}
            </p>

            <div className="mt-8 flex items-start gap-3 border-s-4 border-brand bg-muted/60 p-5">
              <Quote className="w-5 h-5 text-brand shrink-0 mt-1" />
              <p className="font-heading text-lg md:text-xl font-bold">
                {t("hpl_quote")}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={main.url}
              alt="Kitchen with HPL wood-look surfaces"
              className="col-span-2 w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={kitchen.url}
              alt="Dark kitchen with HPL cladding"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <img
              src={door.url}
              alt="HPL door cladding"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f}
              className="flex items-start gap-3 border border-border p-5 hover:border-brand transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="w-6 h-6 bg-brand text-brand-foreground flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </span>
              <p className="font-body text-sm font-medium">{t(f)}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-heading text-xl font-extrabold uppercase tracking-widest">
            {t("hpl_apps_title")}
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {apps.map((a) => (
              <span
                key={a}
                className="px-4 py-2 bg-ink text-primary-foreground font-body text-xs font-bold uppercase tracking-widest"
              >
                {t(a)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HplSection;
