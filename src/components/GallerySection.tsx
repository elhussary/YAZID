import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import g1 from "@/assets/p9_5.jpg.asset.json";
import g2 from "@/assets/p11_4.jpg.asset.json";
import g3 from "@/assets/p11_5.jpg.asset.json";
import g4 from "@/assets/p12_4.jpg.asset.json";
import g5 from "@/assets/p12_6.jpg.asset.json";
import g6 from "@/assets/p10_5.jpg.asset.json";
import g7 from "@/assets/p17_9.jpg.asset.json";
import g8 from "@/assets/p7_8.jpg.asset.json";

const shots = [
  { img: g1, alt: "Entrance courtyard with decorative wood screens" },
  { img: g2, alt: "Bathroom with wood-look cabinetry" },
  { img: g3, alt: "Walk-in wardrobe" },
  { img: g4, alt: "Villa facade with wooden louvers" },
  { img: g5, alt: "Building exterior with cladding panels" },
  { img: g6, alt: "Entrance door with wood cladding" },
  { img: g7, alt: "Water feature wall" },
  { img: g8, alt: "Toilet cubicle doors" },
];

const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            {t("gallery_title")}
          </h2>
          <span className="block h-1 w-16 bg-brand mt-4" />
          <p className="mt-5 font-body text-lg text-muted-foreground">
            {t("gallery_sub")}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {shots.map((s, i) => (
            <motion.div
              key={i}
              className="overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            >
              <img
                src={s.img.url}
                alt={s.alt}
                loading="lazy"
                className="w-full h-56 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
