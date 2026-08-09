import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();

  const items = [
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

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            {t("contact_title")}
          </h2>
          <span className="block h-1 w-16 bg-brand mt-4" />
          <p className="mt-5 font-body text-lg text-muted-foreground">
            {t("contact_text")}
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {items.map((it, i) => {
            const Inner = (
              <>
                <it.icon className="w-6 h-6 text-brand" />
                <p className="mt-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {it.label}
                </p>
                <p className="mt-2 font-heading text-lg font-bold" dir="ltr">
                  {it.value}
                </p>
              </>
            );
            return (
              <motion.div
                key={it.label}
                className="border border-border p-6 hover:border-brand transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                {it.href ? (
                  <a href={it.href} className="block">
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
