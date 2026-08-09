import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Leaf, Flame, Sun } from "lucide-react";
import pergola from "@/assets/p14_4.jpg.asset.json";
import patio from "@/assets/p15_6.jpg.asset.json";
import gazebo from "@/assets/p15_7.jpg.asset.json";
import pool from "@/assets/p17_10.jpg.asset.json";
import deck from "@/assets/p17_5.jpg.asset.json";
import path from "@/assets/p16_4.jpg.asset.json";

const WpcSection = () => {
  const { t } = useTranslation();
  const features = [
    { icon: Sun, key: "wpc_f1" },
    { icon: Leaf, key: "wpc_f2" },
    { icon: Flame, key: "wpc_f3" },
  ];
  const shots = [
    { img: pergola, alt: "WPC pergola over a terrace" },
    { img: patio, alt: "Louvered patio roof" },
    { img: gazebo, alt: "WPC gazebo in a garden" },
    { img: pool, alt: "Pool surrounded by WPC decking" },
    { img: deck, alt: "WPC decking profile" },
    { img: path, alt: "Garden pathway in WPC decking" },
  ];

  return (
    <section id="wpc" className="py-24 bg-ink text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand">
            {t("wpc_sub")}
          </p>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            {t("wpc_title")}
          </h2>
          <span className="block h-1 w-16 bg-brand mt-4" />
          <p className="mt-6 font-body text-lg text-primary-foreground/80 leading-relaxed">
            {t("wpc_text")}
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.key}
              className="border border-primary-foreground/15 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <f.icon className="w-7 h-7 text-brand" />
              <p className="mt-4 font-body text-base leading-relaxed">
                {t(f.key)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {shots.map((s, i) => (
            <motion.img
              key={i}
              src={s.img.url}
              alt={s.alt}
              loading="lazy"
              className="w-full h-52 object-cover"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WpcSection;
