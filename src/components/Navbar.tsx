import { useEffect, useState } from "react";
import { Menu, Globe, PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Sheet, SheetContent } from "./ui/sheet";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_exclusive"), href: "#exclusive" },
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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-xl text-primary-foreground border-b border-brand/20 py-2.5"
          : "bg-gradient-to-b from-ink/90 via-ink/60 to-transparent text-primary-foreground py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Brand Emblem */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-brand bg-brand-maroon flex items-center justify-center font-heading font-black text-brand text-xl shadow-md group-hover:scale-105 transition-transform">
            Y
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-sm md:text-base font-black tracking-wider text-white">
              {t("brand_name")}
            </span>
            <span className="bg-brand text-brand-foreground text-[10px] font-extrabold px-1.5 py-0.5 tracking-widest self-start mt-0.5">
              {t("brand_sub")}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-xs font-bold tracking-widest uppercase hover:text-brand transition-colors text-primary-foreground/90 hover:underline underline-offset-4"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 ps-4 border-s border-white/20">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-brand/60 text-brand text-xs font-black uppercase hover:bg-brand hover:text-brand-foreground transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              {i18n.language === "ar" ? "EN" : "عربي"}
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 bg-brand text-brand-foreground text-xs font-black uppercase hover:brightness-110 transition shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              {t("cta_contact")}
            </a>
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1 border border-brand/60 text-brand text-xs font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            {i18n.language === "ar" ? "EN" : "عربي"}
          </button>
          <button
            onClick={() => setOpen(true)}
            className="p-1.5 text-white hover:text-brand"
            aria-label="Open navigation menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={i18n.language === "ar" ? "right" : "left"} className="bg-ink text-primary-foreground border-brand/30 pt-14">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
            <div className="w-9 h-9 border-2 border-brand bg-brand-maroon flex items-center justify-center font-heading font-black text-brand text-lg">
              Y
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-sm font-black text-white">
                {t("brand_name")}
              </span>
              <span className="bg-brand text-brand-foreground text-[9px] font-bold px-1 py-0.5">
                {t("brand_sub")}
              </span>
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-base font-bold tracking-wider uppercase text-primary-foreground/90 hover:text-brand transition-colors py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-brand text-brand-foreground font-bold text-sm uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4" />
              {t("cta_contact")}
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
