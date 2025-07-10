
import { Shield } from "lucide-react";

const StepsSection = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Así de
          <br />
          <span className="text-blue-400">Sencillo</span>
        </h2>
        <p className="text-gray-300 text-lg mb-16 max-w-lg mx-auto">
          Tres pasos simples para proteger tu web completamente
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Instalación</h3>
            <p className="text-gray-300">
              Agrega un snippet HTML único a tu web. 🚀
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Detección</h3>
            <p className="text-gray-300">
              IA SHIELD detecta bots con JS, bots sin JS y distingue IA amigas.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-gray-700" />
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Defensa</h3>
            <p className="text-gray-300">
              Bloquea, desafía o licencia en tiempo real según tus reglas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
