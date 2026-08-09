import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import hpl from "@/assets/p7_5.jpg.asset.json";
import wpc from "@/assets/p17_7.jpg.asset.json";
import pvc from "@/assets/p12_8.jpg.asset.json";
import rock from "@/assets/p17_8.jpg.asset.json";

const items = [
  { key: "hpl", img: hpl, href: "#hpl" },
  { key: "wpc", img: wpc, href: "#wpc" },
  { key: "pvc", img: pvc, href: "#materials" },
  { key: "rockwool", img: rock, href: "#materials" },
];

const MaterialsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="materials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            {t("mat_title")}
          </h2>
          <span className="block h-1 w-16 bg-brand mt-4" />
          <p className="mt-5 font-body text-lg text-muted-foreground">
            {t("mat_sub")}
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.key}
              href={it.href}
              className="group bg-card border border-border overflow-hidden hover:border-brand transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="overflow-hidden">
                <img
                  src={it.img.url}
                  alt={t(`mat_${it.key}`)}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-extrabold tracking-wide">
                  {t(`mat_${it.key}`)}
                </h3>
                <span className="block h-0.5 w-8 bg-brand mt-3" />
                <p className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">
                  {t(`mat_${it.key}_desc`)}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
