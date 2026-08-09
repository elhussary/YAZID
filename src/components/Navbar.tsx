import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Sheet, SheetContent } from "./ui/sheet";
import logo from "@/assets/p1_5.jpg.asset.json";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_materials"), href: "#materials" },
    { label: t("nav_hpl"), href: "#hpl" },
    { label: t("nav_wpc"), href: "#wpc" },
    { label: t("nav_partitions"), href: "#partitions" },
    { label: t("nav_gallery"), href: "#gallery" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  const toggleLang = () => {
    const next = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(next);
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border text-foreground"
          : "bg-transparent text-primary-foreground"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Yazid Al-Husseini Trading Est. logo"
            className="w-10 h-10 object-contain"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-heading text-sm font-extrabold tracking-widest">
              {t("brand_name")}
            </span>
            <span className="mt-1 self-start bg-brand text-brand-foreground text-[10px] font-bold px-1.5 py-0.5">
              {t("brand_sub")}
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-xs font-semibold tracking-[0.15em] uppercase hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-current/30 text-xs font-bold uppercase hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {i18n.language === "ar" ? "EN" : "AR"}
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2 py-1 border border-current/30 text-xs font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            {i18n.language === "ar" ? "EN" : "AR"}
          </button>
          <button onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="top" className="pt-12">
          <ul className="flex flex-col items-center gap-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base font-semibold tracking-widest uppercase text-foreground hover:text-brand transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
