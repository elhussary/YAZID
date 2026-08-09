import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const contactItems = [
    {
      icon: Phone,
      label: t("contact_phone"),
      value: "+966 50 000 0000",
      href: "tel:+966500000000",
    },
    {
      icon: Mail,
      label: t("contact_email"),
      value: "info@yazidalhusseini.com",
      href: "mailto:info@yazidalhusseini.com",
    },
    {
      icon: MapPin,
      label: t("contact_address"),
      value: t("contact_address_value"),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("تم إرسال طلبكم بنجاح! سيتواصل معكم فريقنا الهندسي في أقرب وقت.");
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden pattern-watermark">
      <div className="container mx-auto px-4 space-y-16">
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-maroon text-white text-xs font-black uppercase tracking-widest">
            <Phone className="w-4 h-4 text-brand" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            {t("contact_title")}
          </h2>
          <span className="block h-1.5 w-20 bg-brand mx-auto" />
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {t("contact_text")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-card border-2 border-border p-6 shadow-md hover:border-brand transition-all flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 bg-brand-maroon text-brand border border-brand/40 flex items-center justify-center shrink-0 font-black">
                  <item.icon className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="font-heading text-xs font-black uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block font-heading text-lg font-black text-foreground hover:text-brand transition-colors"
                      dir="ltr"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-heading text-lg font-black text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="bg-brand-maroon text-white p-8 border-4 border-brand shadow-2xl space-y-3">
              <h4 className="font-heading text-xl font-black text-brand">مواعيد العمل والاستشارات</h4>
              <p className="font-body text-sm text-amber-100/90 leading-relaxed">
                من الأحد إلى الخميس: 8:00 صباحاً - 5:00 مساءً. <br />
                يسعدنا استقبال طلبات عينات المواد والداتا شيت الفنية.
              </p>
            </div>
          </div>

          {/* Interactive Request Form */}
          <motion.div
            className="lg:col-span-7 bg-card border-2 border-border p-8 sm:p-10 shadow-2xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-black text-brand-maroon">طلب عرض سعر وتزويد عينات</h3>

            {submitted ? (
              <div className="bg-emerald-500/10 border-2 border-emerald-500 p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-heading text-xl font-black text-emerald-800">تم استلام طلبكم بنجاح</h4>
                <p className="font-body text-sm text-emerald-700">
                  شكراً لتواصلكم مع مؤسسة يزيد الحسيني للتجارة. سيتواصل معكم ممثل المبيعات الفنية قريباً.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-body text-xs font-black uppercase text-foreground">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل الاسم الكامل"
                      className="w-full p-3.5 bg-background border-2 border-border focus:border-brand outline-none font-body text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-body text-xs font-black uppercase text-foreground">رقم الجوال *</label>
                    <input
                      type="tel"
                      required
                      placeholder="05xxxxxxxx"
                      className="w-full p-3.5 bg-background border-2 border-border focus:border-brand outline-none font-body text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-body text-xs font-black uppercase text-foreground">البريد الإلكتروني</label>
                    <input
                      type="email"
                      placeholder="example@domain.com"
                      className="w-full p-3.5 bg-background border-2 border-border focus:border-brand outline-none font-body text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-body text-xs font-black uppercase text-foreground">نوع المادة المطلوبة</label>
                    <select className="w-full p-3.5 bg-background border-2 border-border focus:border-brand outline-none font-body text-sm">
                      <option value="hpl">ألواح HPL الميلامين</option>
                      <option value="wpc">الخشب الصناعي WPC</option>
                      <option value="partitions">قواطع فينوليك للمراحيض</option>
                      <option value="pvc">ألواح PVC</option>
                      <option value="rockwool">صوف حجري عازل</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-body text-xs font-black uppercase text-foreground">تفاصيل المشروع / الكمية المطلوبة</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="اكتب تفاصيل مشروعكم والمساحة التقريبية..."
                    className="w-full p-3.5 bg-background border-2 border-border focus:border-brand outline-none font-body text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand text-brand-foreground font-heading font-black text-sm uppercase tracking-widest hover:bg-brand-maroon hover:text-white transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال طلب عينات وعرض سعر</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
