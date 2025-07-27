import { Sparkles, X } from "lucide-react";
import { useState } from "react";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-black py-3 shadow-lg">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="https://losguardias.com/register"
          className="flex items-center gap-2 mx-auto hover:opacity-80 transition-opacity"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="text-sm font-semibold">
            🚀 BETA PRIVADA ABIERTA - Regístrate ahora y sé de los primeros en probar nuestra herramienta
          </span>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="text-black hover:text-gray-700 transition-colors ml-4"
          aria-label="Cerrar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;