import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Square } from "lucide-react";
import a from "@/assets/p18_4.jpg.asset.json";
import b from "@/assets/p19_6.jpg.asset.json";
import c from "@/assets/p19_5.jpg.asset.json";

const PartitionsSection = () => {
  const { t } = useTranslation();
  const uses = ["part_u1", "part_u2", "part_u3"];

  return (
    <section id="partitions" className="py-24 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={a.url}
            alt="Phenolic toilet partitions"
            className="col-span-2 w-full h-64 object-cover"
            loading="lazy"
          />
          <img
            src={b.url}
            alt="Cubicle partitions in a facility"
            className="w-full h-44 object-cover"
            loading="lazy"
          />
          <img
            src={c.url}
            alt="Washroom with phenolic surfaces"
            className="w-full h-44 object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            {t("part_title")}
          </h2>
          <span className="block h-1 w-16 bg-brand mt-4" />
          <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed">
            {t("part_text")}
          </p>
          <ul className="mt-8 space-y-4">
            {uses.map((u) => (
              <li key={u} className="flex items-start gap-3">
                <Square className="w-4 h-4 text-brand fill-brand shrink-0 mt-1.5" />
                <span className="font-body text-base">{t(u)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PartitionsSection;
