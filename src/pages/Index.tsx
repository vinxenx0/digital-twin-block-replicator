
import { Shield, Zap, BarChart3, Bell, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-h-screen">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Content */}
            <div className="flex-1 text-white max-w-lg">
              <div className="mb-8">
                <div className="flex items-center gap-2 text-blue-200 mb-4">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Protección IA Empresarial</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  People has rights,
                  <br />
                  <span className="text-blue-200">AI follow rules.</span>
                </h1>
                
                <p className="text-blue-100 text-lg mb-4 leading-relaxed">
                  Limita el uso que hace la IA de tu web aplicando tus normas y condiciones.
                </p>
                
                <p className="text-blue-200 text-sm mb-8">
                  Protege, controla y monetiza tu contenido digital frente a IAs fraudulentas.
                </p>
                
                <div className="flex gap-4 mb-12">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium">
                    Empezar Ahora →
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg">
                    Ver Demo
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-yellow-400 text-2xl font-bold">2min</div>
                    <div className="text-blue-200 text-sm">Instalación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-2xl font-bold">0</div>
                    <div className="text-blue-200 text-sm">Pagos recurrentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-2xl font-bold">30</div>
                    <div className="text-blue-200 text-sm">Días garantía</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Dashboard mockup */}
            <div className="flex-1 max-w-md">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-800 font-semibold">Control de IAs</h3>
                  <span className="text-green-500 text-sm font-medium">● Activo</span>
                </div>
                
                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3">
                    <div className="text-2xl font-bold text-blue-600">147</div>
                    <div className="text-xs text-gray-500">IAs Detectadas</div>
                  </div>
                  <div className="text-center p-3">
                    <div className="text-2xl font-bold text-red-500">23</div>
                    <div className="text-xs text-gray-500">Bloqueadas</div>
                  </div>
                  <div className="text-center p-3">
                    <div className="text-2xl font-bold text-green-500">124</div>
                    <div className="text-xs text-gray-500">Autorizadas</div>
                  </div>
                </div>
                
                {/* AI List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">GPT-4</span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">Bloqueada</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Claude AI</span>
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Permitida</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Unknown Bot</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded">Revisando</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Bard</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">Limitada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="py-20 bg-gray-50">
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
      </div>
      
      {/* Steps Section */}
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
    </div>
  );
};

export default Index;
