
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6 group">
              <Shield className="h-8 w-8 text-primary animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold text-white">Los GuardIAS</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              La primera plataforma de protección y control de contenido
              digital frente a IAs. Protege tu negocio de bots y
              tecnologías avanzadas.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs">tw</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs">li</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs">gh</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-6">Producto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6">Soporte</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estado del Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>📧</span>
                <span>hola@losguardias.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>📞</span>
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>📍</span>
                <span>Murcia, España</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2024 Los GuardIAS. Todos los derechos reservados.
          </div>
          <div className="text-sm text-gray-400">
            Hecho con ❤️ para proteger el futuro digital
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
