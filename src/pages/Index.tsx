import { Shield, Zap, BarChart3, Bell, Code, Users, CheckCircle, Star, Crown, Lock, Eye, FileText, Download, ExternalLink, Github, BookOpen } from "lucide-react";
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

      {/* Benefits Section */}
      <div className="py-20 bg-white">
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
              <h3 className="text-2xl font-semibold text-gray-800">Lo que iAlert te permite</h3>
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
      </div>

      {/* Pricing Section */}
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

      {/* Security and Privacy Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seguridad y
              <br />
              <span className="text-blue-600">Privacidad</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tu información y datos están protegidos con los más altos estándares de seguridad y privacidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Cifrado End-to-End */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cifrado End-to-End</h3>
                <p className="text-gray-600">
                  Todos tus datos se cifran con AES-256 tanto en tránsito como en reposo. Nunca almacenamos contenido sin cifrar.
                </p>
              </CardContent>
            </Card>

            {/* Privacidad por Diseño */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacidad por Diseño</h3>
                <p className="text-gray-600">
                  Seguimos principios de minimización de datos. Solo procesamos lo necesario para proteger tu contenido.
                </p>
              </CardContent>
            </Card>

            {/* Cumplimiento Normativo */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cumplimiento Normativo</h3>
                <p className="text-gray-600">
                  Cumplimos con GDPR, CCPA y otras regulaciones internacionales de protección de datos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certificaciones y Estándares</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 font-bold text-sm">ISO</div>
                </div>
                <div className="text-gray-900 font-medium">ISO 27001</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600 font-bold text-sm">SOC</div>
                </div>
                <div className="text-gray-900 font-medium">SOC 2 Type II</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-yellow-600 font-bold text-sm">GDPR</div>
                </div>
                <div className="text-gray-900 font-medium">GDPR</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-teal-600 font-bold text-sm">CCPA</div>
                </div>
                <div className="text-gray-900 font-medium">CCPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Casos de éxito reales
              <br />
              <span className="text-blue-600">de nuestros clientes</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre cómo empresas de diferentes sectores han protegido y monetizado su
              contenido digital con AI SHIELD
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
                  conjunto de IA. Con AI SHIELD pudimos crear una zona de licenciamiento 
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
                  "El hecho de tener estado determinando nuestras métricas de SEO. AI SHIELD nos 
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
      </div>

      {/* Technical Documentation Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Documentación Técnica
              <br />
              <span className="text-blue-600">y Recursos</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Accede a toda la documentación técnica, whitepapers y recursos necesarios para 
              implementar AI SHIELD en tu infraestructura
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Downloads Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Descargas Disponibles</h3>
              
              <div className="space-y-6">
                {/* Technical Documentation */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Documentación Técnica Completa</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Guía completa de implementación y configuración de AI SHIELD
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">PDF • 2.3 MB</span>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* API Integration Guide */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Guía de Integración API</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Documentación de nuestra API y ejemplos de código
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">PDF • 1.8 MB</span>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Whitepaper */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Whitepaper: Detección de IA</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Paper técnico sobre nuestros algoritmos de detección
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">PDF • 1.2 MB</span>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Cases */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Casos de Uso Empresariales</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Estudios de casos detallados y mejores prácticas
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">PDF • 3.1 MB</span>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Online Resources Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Recursos Online</h3>
              
              <div className="space-y-6">
                {/* Developer Center */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Centro de Desarrolladores</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Documentación online, ejemplos y tutoriales
                        </p>
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Acceder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* GitHub Community */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Github className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Comunidad GitHub</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Código fuente de ejemplos y librerías oficiales
                        </p>
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Acceder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technical Blog */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Blog Técnico</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Artículos técnicos y actualizaciones del producto
                        </p>
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Acceder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Installation */}
                <Card className="p-6 bg-gray-900 text-white">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-4">Instalación Rápida</h4>
                    <div className="bg-black p-4 rounded-lg mb-4">
                      <code className="text-green-400 text-sm">
                        &lt;script src="https://cdn.ai-shield.io/v1/shield.js"&gt;&lt;/script&gt;<br />
                        &lt;script&gt;AIShield.init("your-api-key");&lt;/script&gt;
                      </code>
                    </div>
                    <p className="text-sm text-gray-300">
                      Solo 2 líneas de código para empezar a proteger tu web.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Statistics Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Protegiendo el futuro digital
              <br />
              <span className="text-blue-600">desde 2023</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Miles de empresas ya confían en nuestra tecnología para proteger su contenido digital
              de inteligencias artificiales no autorizadas.
            </p>
          </div>

          {/* Company Info Bar */}
          <div className="flex items-center justify-between bg-white rounded-2xl p-6 mb-12 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">iAlert</div>
                <div className="text-sm text-gray-500">Fundada en España • Casos de Uso • Proyectos</div>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Prueba Gratuita
            </Button>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">2.5M+</div>
                <div className="text-gray-600 text-sm">Sitios Web Protegidos</div>
                <div className="text-xs text-gray-500 mt-1">Desde nuestro lanzamiento</div>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">847M</div>
                <div className="text-gray-600 text-sm">Amenazas IA Bloqueadas</div>
                <div className="text-xs text-gray-500 mt-1">En los últimos 90 días</div>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">12,000+</div>
                <div className="text-gray-600 text-sm">Empresas Registradas</div>
                <div className="text-xs text-gray-500 mt-1">En nuestra plataforma</div>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">99.97%</div>
                <div className="text-gray-600 text-sm">Uptime Garantizado</div>
                <div className="text-xs text-gray-500 mt-1">Disponibilidad del servicio</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">AI Control</span>
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
                  <span>hola@aicontrol.es</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <span>📞</span>
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>📍</span>
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 AI Control. Todos los derechos reservados.
            </div>
            <div className="text-sm text-gray-400">
              Hecho con ❤️ para proteger el futuro digital
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
