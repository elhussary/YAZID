import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote, FileText, Sparkles, LayoutGrid, ZoomIn } from "lucide-react";
import LightboxModal from "./LightboxModal";

// Assets for Page 6-13
import img400 from "@/assets/img400.jpg";
import img505 from "@/assets/img505.jpg";
import img506 from "@/assets/img506.jpg";
import img507 from "@/assets/img507.jpg";
import img508 from "@/assets/img508.jpg";
import img509 from "@/assets/img509.jpg";
import img510 from "@/assets/img510.jpg";
import img588 from "@/assets/img588.jpg";
import img589 from "@/assets/img589.jpg";
import img590 from "@/assets/img590.jpg";
import img676 from "@/assets/img676.jpg";
import img677 from "@/assets/img677.jpg";
import img678 from "@/assets/img678.jpg";
import img679 from "@/assets/img679.jpg";
import img885 from "@/assets/img885.jpg";

const HplSection = () => {
  const { t } = useTranslation();
  const [datasheetOpen, setDatasheetOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  // 6 Circular Feature Circles matching Page 8 of PDF
  const circleFeatures = [
    { text: "ألوان حصرية وثابتة مدى الحياة", color: "bg-[#6b7c65]" }, // Olive green
    { text: "ملمس خشبي مميز جداً", color: "bg-[#6b7c65]" },          // Olive green
    { text: "يتحمل درجة الحرارة العالية", color: "bg-[#6b7c65]" },   // Olive green
    { text: "مقاوم مثالي للخدوش", color: "bg-[#8b5538]" },          // Brown
    { text: "لا يتأثر بالماء و سهل التنظيف", color: "bg-[#c85a32]" },// Terracotta orange
    { text: "مقاوم للبكتيريا", color: "bg-[#541e20]" },             // Dark maroon
  ];

  // 3 Pillar Services matching bottom of Page 8
  const pillars = [
    { title: "تصميم", img: img588 },
    { title: "توريد", img: img589 },
    { title: "تركيب", img: img590 },
  ];

  const applications = [
    { name: t("hpl_a1"), img: img505 },
    { name: t("hpl_a2"), img: img506 },
    { name: t("hpl_a3"), img: img507 },
    { name: t("hpl_a4"), img: img508 },
    { name: t("hpl_a5"), img: img509 },
    { name: t("hpl_a6"), img: img510 },
  ];

  const galleryShots = [
    { img: img676, title: "مطابخ وفاصل ديكور HPL" },
    { img: img677, title: "تكسيات حوائط وأبواب فندقية" },
    { img: img678, title: "خزائن ودواليب HPL" },
    { img: img679, title: "قواطع حمامات وأثاث خشبي" },
  ];

  return (
    <section id="hpl" className="py-24 bg-background relative overflow-hidden pattern-watermark">
      <div className="container mx-auto px-4 space-y-24">
        {/* Intro Grid matching Page 6 of PDF */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Tall Image matching Page 6 Left Column */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative border-4 border-brand shadow-2xl overflow-hidden rounded-t-[40px] rounded-b-none group">
              <img
                src={img400}
                alt="HPL high pressure laminate modern kitchen bar"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 bg-brand text-brand-foreground font-heading text-xs font-black px-3 py-1.5 uppercase">
                HIGH PRESSURE LAMINATES
              </div>
            </div>
          </motion.div>

          {/* Copy & Quote Box matching Page 6 Right Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-maroon text-brand font-heading text-xs font-black uppercase">
              <Sparkles className="w-4 h-4" />
              <span>SUPERIOR SURFACE TECHNOLOGY</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl font-black text-foreground tracking-tight">
              {t("hpl_title")}
              <span className="block text-brand text-2xl font-bold mt-1">{t("hpl_sub")}</span>
            </h2>
            <span className="block h-1.5 w-20 bg-brand" />

            <p className="font-body text-lg text-foreground/90 leading-relaxed text-justify">
              {t("hpl_text")}
            </p>

            {/* Dark Maroon Quote Callout matching Page 6 Bottom Box */}
            <div className="bg-brand-maroon border-2 border-brand text-white p-6 sm:p-8 shadow-2xl relative">
              <Quote className="w-10 h-10 text-brand absolute -top-5 right-6 bg-brand-maroon p-1 border border-brand" />
              <p className="font-heading text-xl sm:text-2xl font-black text-amber-300 leading-snug pt-2">
                "{t("hpl_quote")}"
              </p>
            </div>

            <p className="font-body text-sm text-muted-foreground bg-muted p-4 border-s-4 border-brand italic">
              {t("hpl_usage_note")}
            </p>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* EXACT DESIGN MATCH: Page 8 - مميزات ألواح HPL & Circular Circles */}
        {/* ============================================================== */}
        <div className="bg-white/80 dark:bg-ink/80 border-2 border-border p-8 sm:p-12 shadow-2xl space-y-12 rounded-2xl">
          {/* Header */}
          <div className="text-start pb-4 border-b-2 border-foreground/20">
            <h3 className="font-heading text-3xl sm:text-4xl font-black text-foreground tracking-tight underline underline-offset-8 decoration-brand">
              مميزات ألواح HPL :
            </h3>
          </div>

          {/* 6 Circles in 2 Rows matching Page 8 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {circleFeatures.map((circle, idx) => (
              <motion.div
                key={idx}
                className="relative flex items-center justify-center p-2 rounded-full border-2 border-slate-400/60 shadow-xl aspect-square w-44 sm:w-48 mx-auto group hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className={`w-full h-full rounded-full ${circle.color} flex items-center justify-center p-4 text-center shadow-inner border border-white/30`}>
                  <span className="font-heading font-black text-white text-base sm:text-lg leading-snug">
                    {circle.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3 Tall Pillar Cards: تصميم - توريد - تركيب matching Page 8 Bottom */}
          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="relative overflow-hidden rounded-t-[50px] rounded-b-2xl border-2 border-brand/50 shadow-2xl h-80 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setLightboxImg({ src: pillar.img, title: pillar.title })}
              >
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent flex flex-col justify-end items-center pb-6 text-center">
                  <span className="font-heading text-3xl font-black text-white tracking-widest">
                    {pillar.title}
                  </span>
                  <div className="w-16 h-0.5 bg-brand mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6 Core Applications Grid matching Page 7 of PDF */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-heading text-2xl sm:text-4xl font-black text-brand-maroon flex items-center justify-center gap-2">
              <LayoutGrid className="w-6 h-6 text-brand" />
              <span>{t("hpl_apps_title")}</span>
            </h3>
            <span className="block h-1 w-16 bg-brand mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={app.name}
                className="bg-card border-2 border-border overflow-hidden shadow-lg group hover:border-brand transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="relative h-48 overflow-hidden bg-ink">
                  <img
                    src={app.img}
                    alt={app.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <span className="absolute bottom-3 right-3 bg-brand-maroon text-brand font-heading text-xs font-black px-3 py-1 border border-brand/50">
                    {app.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* HPL Gallery Showcase matching Page 9 */}
        <div className="space-y-6">
          <h4 className="font-heading text-xl font-black text-brand-maroon">تطبيقات الأثاث والتشطيبات الداخلية بـ HPL:</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryShots.map((shot, i) => (
              <div key={i} className="group relative overflow-hidden border-2 border-border shadow-md">
                <img
                  src={shot.img}
                  alt={shot.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                  <span className="font-heading text-xs font-bold text-brand">{shot.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* EMBEDDED DATASHEET IMAGE: Page 13 - داتا شيت خاص بمواصفات ألواح HPL */}
        {/* ============================================================== */}
        <motion.div
          className="bg-card border-4 border-brand p-6 sm:p-10 shadow-2xl space-y-6 text-center rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-maroon text-brand font-heading text-xs font-black uppercase">
            <FileText className="w-4 h-4" />
            <span>TECHNICAL SPECIFICATIONS SHEET</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-4xl font-black text-foreground">
            {t("hpl_datasheet_title")}
          </h3>
          <span className="block h-1.5 w-20 bg-brand mx-auto" />

          {/* Embedded Datasheet Image Display */}
          <div
            className="relative border-2 border-border shadow-xl overflow-hidden max-w-4xl mx-auto group cursor-pointer bg-white"
            onClick={() => setDatasheetOpen(true)}
          >
            <img
              src={img885}
              alt="داتا شيت خاص بمواصفات ألواح HPL"
              className="w-full h-auto object-contain max-h-[750px] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-6 py-3 bg-brand text-brand-foreground font-heading font-black text-sm uppercase tracking-widest shadow-2xl flex items-center gap-2">
                <ZoomIn className="w-5 h-5" />
                <span>تكبير الداتا شيت لكامل الشاشة</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for HPL Datasheet & images */}
      <LightboxModal
        isOpen={datasheetOpen || !!lightboxImg}
        onClose={() => {
          setDatasheetOpen(false);
          setLightboxImg(null);
        }}
        imageSrc={lightboxImg?.src || img885}
        title={lightboxImg?.title || t("hpl_datasheet_title")}
      />
    </section>
  );
};

export default HplSection;
