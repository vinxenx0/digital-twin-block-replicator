
import { CheckCircle, Zap, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Elige tu nivel de
            <br />
            <span className="text-blue-600">protección</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Planes diseñados para cada tipo de negocio, desde emprendedores hasta empresas paranoides de la seguridad.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            <CheckCircle className="w-4 h-4" />
            30 días de garantía de devolución
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Individual Plan */}
          <Card className="relative p-8 bg-white border-2 border-gray-200 rounded-2xl">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Individual</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">799€<span className="text-lg font-normal text-gray-500">/año</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">1 dominio protegido</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Páginas ilimitadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">5 usuarios panel de control</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">100.000 análisis al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Tickets de soporte 72h</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Alertas por correo</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg">
                Seleccionar Plan
              </Button>
            </CardContent>
          </Card>

          {/* PYME Plan - Most Popular */}
          <Card className="relative p-8 bg-white border-2 border-yellow-400 rounded-2xl transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Star className="w-4 h-4" />
                Mas Popular
              </div>
            </div>
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">PYME</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">3.999€<span className="text-lg font-normal text-gray-500">/año</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">5 dominios protegidos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">15 usuarios panel</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">1.000.000 análisis al mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Consultoría post instalación 1h</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Tickets prioritarios 24h</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Alertas telefónicas</span>
                </li>
              </ul>
              
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 rounded-lg font-medium">
                Empezar Ahora
              </Button>
            </CardContent>
          </Card>

          {/* Paranoid Plan */}
          <Card className="relative p-8 bg-white border-2 border-gray-200 rounded-2xl">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Paranoid</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">11.999€<span className="text-lg font-normal text-gray-500">/año</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Servidor tier 2 en España</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Cloud propia para análisis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Protección backend completa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Machine learning + IA</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Contactos avanzados con IAs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Instalación por nuestro equipo</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg">
                Seleccionar Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Necesitas algo personalizado?</p>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Contactar Ventas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
