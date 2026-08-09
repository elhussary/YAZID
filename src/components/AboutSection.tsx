import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PenTool, Truck, Wrench } from "lucide-react";
import about from "@/assets/p2_5.jpg.asset.json";
import about2 from "@/assets/p11_6.jpg.asset.json";

const AboutSection = () => {
  const { t } = useTranslation();
  const points = [
    { icon: PenTool, key: "about_point_1" },
    { icon: Truck, key: "about_point_2" },
    { icon: Wrench, key: "about_point_3" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={about.url}
            alt="Interior living room with wooden lamp"
            className="w-full h-72 md:h-96 object-cover"
            loading="lazy"
          />
          <img
            src={about2.url}
            alt="Hallway with wood panelling"
            className="w-full h-72 md:h-96 object-cover mt-10"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            {t("about_title")}
          </h2>
          <span className="block h-1 w-16 bg-brand mt-4" />
          <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed">
            {t("about_text")}
          </p>
          <p className="mt-6 font-heading text-xl md:text-2xl font-bold text-foreground">
            {t("hero_tagline")}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {points.map((p) => (
              <div key={p.key} className="border border-border p-4 text-center">
                <p.icon className="w-6 h-6 text-brand mx-auto" />
                <p className="mt-3 font-body text-sm font-bold uppercase tracking-wider">
                  {t(p.key)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
