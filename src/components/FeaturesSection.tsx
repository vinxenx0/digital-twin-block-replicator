
import { Zap, Shield, BarChart3, Bell, Code, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Protege tu contenido digital
            <br />
            <span className="text-blue-600">sin complicaciones</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Todas las IAs no están para ayudar. Cuando visitan tu web, analizan tu negocio, copian 
            tus productos y utilizan tus contenidos sin consentimiento.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="text-center p-0">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instalación Inmediata</h3>
              <p className="text-gray-600">
                Click, pega y listo. Sin software ni plugins adicionales en cualquier entorno web.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="text-center p-0">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Control Total de IAs</h3>
              <p className="text-gray-600">
                Bloquea o permite las IAs que quieras desde tu panel de control. Genera informes completos.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="text-center p-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Análisis Avanzado</h3>
              <p className="text-gray-600">
                Detecta visitas artificiales y decide cómo se comportan en tu sitio. Optimiza tu SEO para IAs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="text-center p-0">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Alertas de Seguridad</h3>
              <p className="text-gray-600">
                Recibe notificaciones por anomalías y actividad sospechosa en tiempo real.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="text-center p-0">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sin Impacto Técnico</h3>
              <p className="text-gray-600">
                No afecta a SEO, SEM, analytics ni experiencia de usuario. Solo 5KB de código.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="text-center p-0">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gestión Colaborativa</h3>
              <p className="text-gray-600">
                Múltiples usuarios en el panel de control con diferentes niveles de acceso.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
