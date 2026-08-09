import { useTranslation } from "react-i18next";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-primary-foreground border-t-4 border-brand pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-brand bg-brand-maroon flex items-center justify-center font-heading font-black text-brand text-xl">
                Y
              </div>
              <div className="leading-tight">
                <p className="font-heading text-lg font-black tracking-wider text-white">
                  {t("brand_name")}
                </p>
                <span className="inline-block bg-brand text-brand-foreground text-[10px] font-extrabold px-1.5 py-0.5 tracking-widest mt-0.5">
                  {t("brand_sub")}
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 max-w-md leading-relaxed">
              {t("about_text")}
            </p>
            <p className="font-heading text-sm font-bold text-brand italic">
              "{t("hero_tagline")}" — {t("hero_tagline_en")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-black uppercase tracking-widest text-brand mb-4">
              المنتجات والخدمات
            </h4>
            <ul className="space-y-2.5 font-body text-xs text-primary-foreground/80">
              <li><a href="#hpl" className="hover:text-brand transition">ألواح HPL الميلامين</a></li>
              <li><a href="#wpc" className="hover:text-brand transition">الخشب الصناعي WPC</a></li>
              <li><a href="#partitions" className="hover:text-brand transition">قواطع الفينوليك للمراحيض</a></li>
              <li><a href="#exclusive" className="hover:text-brand transition">الوكالات الحصرية</a></li>
              <li><a href="#gallery" className="hover:text-brand transition">معرض المشاريع المنفذة</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="font-heading text-sm font-black uppercase tracking-widest text-brand mb-4">
              تواصل معنا
            </h4>
            <ul className="space-y-3 font-body text-xs text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand shrink-0" />
                <span>{t("contact_address_value")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand shrink-0" />
                <span dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand shrink-0" />
                <span>info@yazidalhusseini.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50 font-body">
          <p>
            © {new Date().getFullYear()} {t("brand_full")}. {t("footer_rights")}
          </p>

          {/* Page number motif matching PDF footer */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white/5 border border-brand/30 text-brand font-mono text-[11px]">
              YAZID-PORTFOLIO 2026
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-brand text-brand-foreground hover:brightness-110 transition shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
