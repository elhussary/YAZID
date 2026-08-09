import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Image as ImageIcon, ZoomIn } from "lucide-react";
import LightboxModal from "./LightboxModal";

// Assets for Gallery
import img717 from "@/assets/img717.jpg";
import img720 from "@/assets/img720.jpg";
import img721 from "@/assets/img721.jpg";
import img766 from "@/assets/img766.jpg";
import img767 from "@/assets/img767.jpg";
import img768 from "@/assets/img768.jpg";
import img818 from "@/assets/img818.jpg";
import img819 from "@/assets/img819.jpg";
import img820 from "@/assets/img820.jpg";
import img1040 from "@/assets/img1040.jpg";
import img1041 from "@/assets/img1041.jpg";
import img1042 from "@/assets/img1042.jpg";
import img1043 from "@/assets/img1043.jpg";
import img1091 from "@/assets/img1091.jpg";
import img1092 from "@/assets/img1092.jpg";
import img1094 from "@/assets/img1094.jpg";

const galleryItems = [
  { img: img717, title: "عينة تشطيبات HPL خشبية", category: "hpl" },
  { img: img720, title: "تكسيات جدران وسواتر HPL", category: "hpl" },
  { img: img721, title: "تشطيبات خشبية حرارية HPL", category: "hpl" },
  { img: img766, title: "ملمس خشبي غامق مقاوم للماء", category: "hpl" },
  { img: img767, title: "واجهات HPL مقاومة للعوامل الجوية", category: "hpl" },
  { img: img768, title: "ألواح ميلامين حرارية", category: "hpl" },
  { img: img818, title: "تشكيلة ألوان ونقشات HPL", category: "hpl" },
  { img: img819, title: "نموذج تشطيب أثاث HPL", category: "hpl" },
  { img: img820, title: "ديكورات وتكسيات خشبية", category: "hpl" },
  { img: img1040, title: "برجولات ومظلات WPC خارجية", category: "wpc" },
  { img: img1041, title: "تكسيات واجهات خشب صناعي WPC", category: "wpc" },
  { img: img1042, title: "أرضيات وجلسات حدائق WPC", category: "wpc" },
  { img: img1043, title: "سواتر وقواطع WPC معتمدة", category: "wpc" },
  { img: img1091, title: "لوفرز وتجليدات WPC خشبية", category: "wpc" },
  { img: img1092, title: "تشطيبات خارجية للمشاريع السكنية", category: "wpc" },
  { img: img1094, title: "تكسيات مباني وواجهات تجارية", category: "wpc" },
];

const GallerySection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((it) => it.category === filter);

  return (
    <section id="gallery" className="py-24 bg-muted/60 relative overflow-hidden pattern-watermark">
      <div className="container mx-auto px-4 space-y-12">
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-maroon text-white text-xs font-black uppercase tracking-widest">
            <ImageIcon className="w-4 h-4 text-brand" />
            <span>PORTFOLIO & PROJECT GALLERY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            {t("gallery_title")}
          </h2>
          <span className="block h-1.5 w-20 bg-brand mx-auto" />
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {t("gallery_sub")}
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: t("filter_all") },
              { id: "hpl", label: t("filter_hpl") },
              { id: "wpc", label: t("filter_wpc") },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-5 py-2 text-xs font-heading font-black uppercase tracking-widest transition-all ${
                  filter === btn.id
                    ? "bg-brand text-brand-foreground shadow-md border-2 border-brand-maroon"
                    : "bg-card border-2 border-border text-foreground hover:border-brand"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden bg-ink border-2 border-border shadow-lg cursor-pointer h-60"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              onClick={() => setSelectedImage({ src: item.img, title: item.title })}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="font-heading text-xs font-bold text-amber-300 flex items-center justify-between">
                  <span>{item.title}</span>
                  <ZoomIn className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || null}
        title={selectedImage?.title}
      />
    </section>
  );
};

export default GallerySection;
