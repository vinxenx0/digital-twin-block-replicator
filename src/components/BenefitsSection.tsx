
import { CheckCircle, Bell, BarChart3, Eye, Code, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-6">
            <CheckCircle className="w-4 h-4" />
            Beneficios desde el primer segundo
          </div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-blue-600">Problema Resuelto</h2>
          </div>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Lo que los guardianes te permite</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problem 1 */}
          <Card className="p-6 border-l-4 border-red-400 bg-red-50">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bots consumen tu CPU y ancho de banda</h4>
                  <p className="text-gray-600 text-sm">Activa solo en tráfico IA. No impacta al servidor ni a tus visitantes reales.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution 1 */}
          <Card className="p-6 border-l-4 border-orange-400 bg-orange-50">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Te copian contenidos para entrenar IAs</h4>
                  <p className="text-gray-600 text-sm">Redirige a página de licenciamiento automático. Protege tu propiedad intelectual.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problem 2 */}
          <Card className="p-6 border-l-4 border-red-400 bg-red-50">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Llenan formularios, boicotean productos</h4>
                  <p className="text-gray-600 text-sm">Detecta automatismos sospechosos. Bloquea uso fraudulento de cupones, carritos y campañas.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution 2 */}
          <Card className="p-6 border-l-4 border-blue-400 bg-blue-50">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Distorsionan tus métricas de tráfico y reputación</h4>
                  <p className="text-gray-600 text-sm">Panel real-time que diferencia humano vs IA. Alertas vía email o Slack.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problem 3 */}
          <Card className="p-6 border-l-4 border-red-400 bg-red-50">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Usan bots sin JS o evaden detección</h4>
                  <p className="text-gray-600 text-sm">Honeypots HTML y detección sin JS con &lt;noscript&gt;. Caza incluso crawlers invisibles.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution 3 */}
          <Card className="p-6 border-l-4 border-red-400 bg-red-50">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Integrar soluciones como DataDome es caro y complejo</h4>
                  <p className="text-gray-600 text-sm">10 líneas de código, sin SDK, sin cookies. Plug & play en cualquier web o CMS.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final benefit */}
          <Card className="p-6 border-l-4 border-green-400 bg-green-50 md:col-span-2">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quieres controlar qué IA puede acceder</h4>
                  <p className="text-gray-600 text-sm">Listas blancas por IA, IP o User-Agent. También puedes monetizar el acceso a ciertos modelos.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
