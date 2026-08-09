import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PenTool, Truck, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";
import img215 from "@/assets/img215.jpg";
import img98 from "@/assets/img98.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

  const categories = [
    { name: "PVC", desc: "ألواح PVC للديكور والجدران والأسقف", bg: "bg-brand-maroon text-white border-brand/50" },
    { name: "HPL", desc: "ألواح الميلامين عالية الضغط HPL", bg: "bg-brand-maroon text-white border-brand/50" },
    { name: "WPC", desc: "الخشب الصناعي WPC المقاوم للظروف الجوية", bg: "bg-brand-wood text-white border-amber-500/50" },
    { name: "صوف حجري", desc: "أنظمة العزل الحراري والصوتي المقاومة للحريق", bg: "bg-brand text-brand-foreground border-brand-maroon" },
  ];

  const services = [
    { icon: PenTool, title: t("about_point_1"), desc: "تصميم هندسي وديكوري احترافي" },
    { icon: Truck, title: t("about_point_2"), desc: "توريد وتأمين كميات ومواصفات عالمية" },
    { icon: Wrench, title: t("about_point_3"), desc: "تركيب عالي الدقة بإشراف مهندسين متخصصين" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden pattern-watermark">
      <div className="container mx-auto px-4">
        {/* Main Header & Image matching Page 3 of Portfolio20 */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <motion.div
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative border-4 border-brand shadow-2xl overflow-hidden group">
              <img
                src={img215}
                alt="Yazid Al-Husseini modern living room decor"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={img98}
                alt="Wood panel texture detail"
                className="w-full h-44 object-cover border-2 border-brand/30 shadow-md"
              />
              <div className="bg-brand-maroon text-white p-6 border-2 border-brand flex flex-col justify-center text-center">
                <ShieldCheck className="w-8 h-8 text-brand mx-auto mb-2" />
                <h4 className="font-heading font-black text-lg text-brand">خبرة وجودة ممتدة</h4>
                <p className="font-body text-xs text-amber-100/80 mt-1">تأمين ومواصفات معتمدة لجميع القطاعات</p>
              </div>
            </div>
          </motion.div>

          {/* Copy & Maroon Banner matching Page 3 */}
          <motion.div
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Dark Maroon Box matching PDF Page 3 Header */}
            <div className="bg-brand-maroon border-2 border-brand p-6 sm:p-8 text-center shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-brand-foreground text-xs font-black px-4 py-0.5 uppercase tracking-widest">
                {t("about_sub")}
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
                {t("about_title")}
              </h2>
            </div>

            <p className="font-body text-lg sm:text-xl text-foreground/90 leading-relaxed text-justify font-medium">
              {t("about_text")}
            </p>

            {/* 4 Category Badges matching Page 3 Circles */}
            <div className="space-y-3 pt-2">
              <h3 className="font-heading text-base font-black uppercase tracking-wider text-brand-maroon flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand" />
                <span>عائلات التوريد الرئيسية:</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className={`${cat.bg} border p-4 text-center shadow-md flex flex-col justify-center items-center hover:scale-105 transition-transform`}
                  >
                    <span className="font-heading text-xl font-black tracking-wide">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Services: Design, Supply, Install matching PDF footer */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-heading text-2xl font-black text-brand-maroon">
              {t("services_title")}
            </h3>
            <span className="block h-1 w-16 bg-brand mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="bg-card border-2 border-border p-8 text-center hover:border-brand transition-all shadow-md group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 bg-brand-maroon text-brand border-2 border-brand mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <s.icon className="w-8 h-8" />
                </div>
                <h4 className="mt-6 font-heading text-xl font-black text-foreground">
                  {s.title}
                </h4>
                <p className="mt-3 font-body text-sm text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
