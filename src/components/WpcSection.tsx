import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Leaf, Flame, Sun, Shield, Sparkles, Trees } from "lucide-react";

// Assets for WPC (Page 5, 14-17)
import img325 from "@/assets/img325.jpg";
import img326 from "@/assets/img326.jpg";
import img327 from "@/assets/img327.jpg";
import img932 from "@/assets/img932.jpg";
import img980 from "@/assets/img980.jpg";
import img981 from "@/assets/img981.jpg";
import img982 from "@/assets/img982.jpg";
import img983 from "@/assets/img983.jpg";
import img1040 from "@/assets/img1040.jpg";
import img1041 from "@/assets/img1041.jpg";
import img1042 from "@/assets/img1042.jpg";
import img1043 from "@/assets/img1043.jpg";

const WpcSection = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, key: "wpc_f1", color: "bg-amber-600" },
    { icon: Leaf, key: "wpc_f2", color: "bg-emerald-600" },
    { icon: Sun, key: "wpc_f3", color: "bg-brand" },
  ];

  const showcaseShots = [
    { img: img325, title: "أسقف برغولات خشبية خارجية" },
    { img: img326, title: "تكسيات جدران وأسقف WPC" },
    { img: img327, title: "أرضيات مسبح وجلسات خشب صناعي" },
    { img: img932, title: "مظهر الخشب الطبيعي الداخلي" },
    { img: img1040, title: "مظلات وبرجولات حدائق" },
    { img: img1041, title: "تكسيات واجهات خشبية مقاومة للمطبات" },
  ];

  return (
    <section id="wpc" className="py-24 bg-ink text-primary-foreground relative overflow-hidden border-t-4 border-brand">
      {/* Background Decor */}
      <div className="absolute inset-0 pattern-watermark opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 space-y-16 relative z-10">
        {/* Intro Header matching Page 5 & Page 14 */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-wood text-white text-xs font-black uppercase tracking-widest border border-amber-500/40">
              <Trees className="w-4 h-4 text-brand" />
              <span>WOOD PLASTIC COMPOSITE</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-white">
              {t("wpc_title")}
            </h2>
            <span className="block h-1.5 w-20 bg-brand" />

            {/* Slogan Box matching Page 5 of PDF */}
            <div className="bg-brand-wood/60 border-2 border-brand p-6 shadow-2xl space-y-2">
              <div className="flex items-center gap-2 text-brand font-black text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>ECO-FRIENDLY INNOVATION</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-amber-300">
                {t("wpc_sub")}
              </h3>
            </div>

            <p className="font-body text-lg text-primary-foreground/85 leading-relaxed text-justify">
              {t("wpc_text")}
            </p>
          </motion.div>

          {/* Feature Image Grid matching Page 5 Visual Showcase */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={img325}
              alt="WPC ceiling louvers"
              className="w-full h-48 object-cover border-2 border-brand/40 shadow-lg"
            />
            <img
              src={img326}
              alt="WPC interior wall panels"
              className="w-full h-48 object-cover border-2 border-brand/40 shadow-lg"
            />
            <img
              src={img327}
              alt="WPC outdoor pool deck and luxury mosaic pool"
              className="col-span-2 w-full h-56 object-cover border-2 border-brand shadow-2xl"
            />
          </motion.div>
        </div>

        {/* 3 Core WPC Features matching Page 15 of PDF */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {features.map((f, i) => (
            <motion.div
              key={f.key}
              className="bg-white/5 border-2 border-white/10 p-8 hover:border-brand transition-all shadow-xl space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className={`w-14 h-14 ${f.color} text-white flex items-center justify-center font-black shadow-lg`}>
                <f.icon className="w-7 h-7" />
              </div>
              <p className="font-body text-lg font-bold text-white leading-relaxed">
                {t(f.key)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WPC Project Gallery Grid matching Page 16 & 17 */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-heading text-2xl font-black text-brand">معرض أعمال وتطبيقات WPC</h3>
            <span className="text-xs text-primary-foreground/60 font-mono">PAGES 16 & 17 PORTFOLIO</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {showcaseShots.map((shot, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden border border-brand/30 shadow-lg h-56"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <img
                  src={shot.img}
                  alt={shot.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 right-3 left-3 font-heading text-xs font-bold text-amber-300">
                  {shot.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WpcSection;
