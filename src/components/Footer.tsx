import { useTranslation } from "react-i18next";
import logo from "@/assets/p1_5.jpg.asset.json";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-ink text-primary-foreground py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Yazid Al-Husseini Trading Est. logo"
            className="w-10 h-10 object-contain"
          />
          <div className="leading-tight">
            <p className="font-heading text-sm font-extrabold tracking-widest">
              {t("brand_name")}
            </p>
            <span className="inline-block mt-1 bg-brand text-brand-foreground text-[10px] font-bold px-1.5">
              {t("brand_sub")}
            </span>
          </div>
        </div>

        <p className="font-body text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {t("brand_name")}. {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
