import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("hagl_cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("hagl_cookies_accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[200] bg-card border-t border-border p-4 md:p-6"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Этот сайт использует файлы cookie для улучшения работы. Продолжая использование сайта, вы соглашаетесь с{" "}
              <span className="text-foreground">политикой обработки персональных данных</span> и{" "}
              <span className="text-foreground">лицензионным соглашением</span>.
            </p>
            <button
              onClick={accept}
              className="shrink-0 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-xs px-6 py-2.5 rounded hover:bg-primary/90 transition-colors"
            >
              Принять
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
