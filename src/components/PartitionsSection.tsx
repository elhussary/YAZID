import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShieldCheck, FileText, CheckCircle, Building2, School, Stethoscope } from "lucide-react";
import LightboxModal from "./LightboxModal";

// Assets for Phenolic Partitions (Page 18-19)
import img1165 from "@/assets/img1165.jpg";
import img1218 from "@/assets/img1218.jpg";
import img1219 from "@/assets/img1219.jpg";
import img1220 from "@/assets/img1220.jpg";
import img1242 from "@/assets/img1242.jpg";

const PartitionsSection = () => {
  const { t } = useTranslation();
  const [datasheetOpen, setDatasheetOpen] = useState(false);

  const applications = [
    { title: t("part_u1"), icon: Building2 },
    { title: t("part_u2"), icon: School },
    { title: t("part_u3"), icon: Stethoscope },
  ];

  const galleryShots = [
    { img: img1218, title: "قواطع حمامات فينوليك لمبنى تجاري" },
    { img: img1219, title: "خزانات ودواليب مدارس وأندية رياضية" },
    { img: img1220, title: "سطح مختبر ومراحيض مقاومة للمياه" },
  ];

  return (
    <section id="partitions" className="py-24 bg-background relative overflow-hidden pattern-watermark">
      <div className="container mx-auto px-4 space-y-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase matching Page 18 */}
          <motion.div
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative border-4 border-brand shadow-2xl overflow-hidden group">
              <img
                src={img1165}
                alt="Phenolic toilet partitions and cubicles"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 bg-brand-maroon text-brand border border-brand font-heading text-xs font-black px-3 py-1.5 uppercase">
                HIGH PRESSURE PHENOLIC BOARDS
              </div>
            </div>
          </motion.div>

          {/* Copy & Details matching Page 18 */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-maroon text-white text-xs font-black uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <span>HEAVY-DUTY COMMERCIAL SPECIFICATIONS</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-black text-foreground tracking-tight">
              {t("part_title")}
              <span className="block text-brand text-xl font-bold mt-1">{t("part_sub")}</span>
            </h2>
            <span className="block h-1.5 w-20 bg-brand" />

            <p className="font-body text-lg text-foreground/90 leading-relaxed text-justify">
              {t("part_text")}
            </p>

            <div className="space-y-3 pt-2">
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="bg-card border-2 border-border p-4 flex items-start gap-4 hover:border-brand transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 bg-brand-maroon text-brand flex items-center justify-center shrink-0 font-black border border-brand/40">
                    <app.icon className="w-5 h-5" />
                  </div>
                  <p className="font-body text-sm font-bold text-foreground pt-2">
                    {app.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setDatasheetOpen(true)}
                className="px-6 py-3.5 bg-brand-maroon border-2 border-brand text-brand font-heading font-black text-xs uppercase tracking-widest hover:bg-brand hover:text-brand-foreground transition-all flex items-center gap-2 shadow-xl"
              >
                <FileText className="w-4 h-4" />
                <span>{t("part_datasheet_title")}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Partitions Gallery Grid matching Page 19 */}
        <div className="space-y-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-2xl font-black text-brand-maroon">تطبيقات قواطع الفينوليك والدواليب</h3>
            <span className="text-xs text-muted-foreground font-mono">PAGE 19 PORTFOLIO</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryShots.map((shot, i) => (
              <div key={i} className="group relative overflow-hidden border-2 border-border shadow-lg bg-ink">
                <img
                  src={shot.img}
                  alt={shot.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="font-heading text-xs font-bold text-amber-300">{shot.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Phenolic Datasheet matching Page 19 */}
      <LightboxModal
        isOpen={datasheetOpen}
        onClose={() => setDatasheetOpen(false)}
        imageSrc={img1242}
        title={t("part_datasheet_title")}
      />
    </section>
  );
};

export default PartitionsSection;
