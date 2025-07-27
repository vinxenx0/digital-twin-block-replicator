import { CheckCircle, Star, Phone, Zap, Shield, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,200,255,0.3),transparent_50%)]"></div>
      
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">30 días de garantía de devolución</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planes que se adaptan a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">tu negocio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde protección gratuita hasta soluciones empresariales, encuentra el plan perfecto para tu nivel de seguridad.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Free Plan */}
          <Card className="relative border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Gratuito • Analiza</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mb-2">0€</div>
              <p className="text-gray-600">Para siempre • Sin compromisos</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Vigilancia gratuita de tus sitios web</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Panel de información básico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hasta 100k análisis de amenazas/año</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Textos legales básicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Alertas por correo electrónico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Informe mensual de actividad</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Soporte por tickets (72h)</span>
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-6" size="lg">
                Empezar Gratis
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl bg-white/90 backdrop-blur-sm scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Más Popular</span>
              </div>
            </div>
            <CardHeader className="text-center pt-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Pro • Disuade y Protege</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mb-2">119€</div>
              <p className="text-gray-600">por año • Facturación anual</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-blue-800 font-medium">¡Protección completa + ROI garantizado!</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Vigilancia avanzada de sitios web</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Panel con insights avanzados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Análisis ilimitados de amenazas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Bloqueo y disuasión activa</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Generación robots.txt, meta tags, llm.txt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Protección a nivel de servidor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Compliance legal frente a IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Monetización de visitas de IA</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Informes detallados (SEO, tráfico, financiero)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Soporte 24h + Chat L-V 10-18h</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Alertas push móviles</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-6" size="lg">
                Empezar Pro
              </Button>
            </CardContent>
          </Card>

          {/* Paranoid Plan */}
          <Card className="relative border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Paranoid • Ataca</CardTitle>
              <div className="text-2xl font-bold text-gray-900 mb-2">Precio a consultar</div>
              <p className="text-gray-600">Disponible pronto • Máxima seguridad</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-purple-800 font-medium">Seguridad de nivel militar para infraestructura crítica</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Todo el plan Pro incluido</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cloud privada para análisis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Servidor Tier 2 en España</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Machine Learning + IA avanzada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Modo ataque y crisis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Protección APIs, endpoints, correo, DNS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Prueba inmutable en blockchain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Protección completa de dominio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Alertas telefónicas de emergencia</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Instalación y setup personalizado</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6 flex items-center gap-2" 
                size="lg"
              >
                <Phone className="w-4 h-4" />
                Contactar Ventas
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Custom Plan CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo diferente?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Creamos soluciones personalizadas para empresas con necesidades específicas. 
              Habla con nuestro equipo para diseñar el plan perfecto.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
              Contactar con Ventas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}