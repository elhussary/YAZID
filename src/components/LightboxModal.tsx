import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  title?: string;
}

const LightboxModal = ({ isOpen, onClose, imageSrc, title }: LightboxModalProps) => {
  const { t } = useTranslation();

  if (!isOpen || !imageSrc) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full max-h-[90vh] bg-background border border-brand/30 shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/60">
            <div className="flex items-center gap-2">
              <ZoomIn className="w-5 h-5 text-brand" />
              <h3 className="font-heading text-lg font-extrabold text-foreground">
                {title || t("view_datasheet")}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-background rounded-none transition"
              aria-label={t("close")}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/5">
            <img
              src={imageSrc}
              alt={title || "Preview"}
              className="max-w-full max-h-[75vh] object-contain shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LightboxModal;
