import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layers, ArrowRight } from "lucide-react";
import img400 from "@/assets/img400.jpg";
import img932 from "@/assets/img932.jpg";
import img215 from "@/assets/img215.jpg";
import img327 from "@/assets/img327.jpg";

const MaterialsSection = () => {
  const { t } = useTranslation();

  const items = [
    { key: "hpl", img: img400, href: "#hpl", badge: "HPL" },
    { key: "wpc", img: img932, href: "#wpc", badge: "WPC" },
    { key: "pvc", img: img215, href: "#about", badge: "PVC" },
    { key: "rockwool", img: img327, href: "#about", badge: "صوف حجري" },
  ];

  return (
    <section id="materials" className="py-24 bg-muted/60 relative overflow-hidden pattern-watermark">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-maroon text-white text-xs font-black uppercase tracking-widest">
            <Layers className="w-4 h-4 text-brand" />
            <span>MATERIALS & PRODUCTS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            {t("mat_title")}
          </h2>
          <span className="block h-1.5 w-20 bg-brand mx-auto" />
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {t("mat_sub")}
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.key}
              href={it.href}
              className="group bg-card border-2 border-border overflow-hidden hover:border-brand transition-all shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden h-56 bg-ink">
                <img
                  src={it.img}
                  alt={t(`mat_${it.key}`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-brand-maroon border border-brand text-brand font-heading text-xs font-black px-3 py-1 shadow-md">
                  {it.badge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-black text-foreground group-hover:text-brand transition-colors">
                    {t(`mat_${it.key}`)}
                  </h3>
                  <span className="block h-1 w-10 bg-brand mt-2" />
                  <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
                    {t(`mat_${it.key}_desc`)}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center gap-2 text-xs font-black uppercase text-brand-maroon group-hover:text-brand transition-colors">
                  <span>تصفح تفاصيل المادة</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
