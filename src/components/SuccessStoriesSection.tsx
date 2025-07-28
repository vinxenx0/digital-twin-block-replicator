
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Casos de éxito reales
            <br />
            <span className="text-blue-600">de nuestros clientes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre cómo empresas de diferentes sectores han protegido y monetizado su
            contenido digital con Los GuardIAS
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Success Story 1 */}
          <Card className="p-8 bg-white">
            <CardContent className="p-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">MA</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">María Alonso</h3>
                  <p className="text-sm text-gray-600">Directora de Marketing Digital</p>
                  <p className="text-xs text-gray-500">Tech+Plus Solutions</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 italic">
                "Impresionante nuestra cineasta digital"
              </p>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 text-sm">
                "Detectamos que varias IAs copiaban terreno nuestro material rápidamente pero 
                gracias contentos comprimir. Al SHIELD nos alertó inmediatamente y pudimos 
                bloquear este tipos no solicitados, protegiendo nuestro capacidad online."
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-gray-900 mb-1">Resultado:</div>
                <div className="text-sm text-gray-700">94% reducción en uso no autorizado de marca</div>
              </div>
            </CardContent>
          </Card>

          {/* Success Story 2 */}
          <Card className="p-8 bg-white">
            <CardContent className="p-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">JA</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Juan Antonio Méndez</h3>
                  <p className="text-sm text-gray-600">CEO</p>
                  <p className="text-xs text-gray-500">InnovaManufacturing</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 italic">
                "Excelente para nuestra Protección ambiental"
              </p>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 text-sm">
                "Nuestros procesos productivos potenciales obtener basándose ambientado por 
                conjunto de IA. Con Los GuardIAS pudimos crear una zona de licenciamiento 
                adecuados con más generar ingresos adicionales mientras protegemos nuestros 
                protegida comercial."
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-gray-900 mb-1">Resultado:</div>
                <div className="text-sm text-gray-700">€30K anuales en licencias de IA</div>
              </div>
            </CardContent>
          </Card>

          {/* Success Story 3 */}
          <Card className="p-8 bg-white">
            <CardContent className="p-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">CR</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Carmen Rivera</h3>
                  <p className="text-sm text-gray-600">Fundadora y Copywriter</p>
                  <p className="text-xs text-gray-500">Independent Creative</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 italic">
                "Blog creciendo Toca Especialista"
              </p>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 text-sm">
                "Como creadora de contenido, era crucial proteger mis ideas originales. AI 
                SHIELD me permite controlar exactamente qué IAa pueden acceder a mi trabajo 
                y hoy aún tinternas, manteniendo mi contenido fuera privs."
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-gray-900 mb-1">Resultado:</div>
                <div className="text-sm text-gray-700">300% aumento en ingresos por licencias</div>
              </div>
            </CardContent>
          </Card>

          {/* Success Story 4 */}
          <Card className="p-8 bg-white">
            <CardContent className="p-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">RS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Roberto Silva</h3>
                  <p className="text-sm text-gray-600">SEO Manager</p>
                  <p className="text-xs text-gray-500">Digital Marketing Pro</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 italic">
                "Visualiza Acción SEO mejorada"
              </p>
              
              <div className="flex mb-4">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                 ))}
               </div>
              
              <p className="text-gray-700 mb-6 text-sm">
                "El hecho de tener estado determinando nuestras métricas de SEO. Los GuardIAS nos 
                permitió diferenciar claramente entre robots humanos y de IA, mejorando 
                significativamente nuestros informes y estrategia SEO."
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-gray-900 mb-1">Resultado:</div>
                <div className="text-sm text-gray-700">80% mejora en métricas SEO reales</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
