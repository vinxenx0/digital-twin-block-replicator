
import { Shield, Zap, Rocket, Stars, Sparkles, ArrowRight, Play, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-white min-h-screen pt-28">
      {/* Cyberpunk background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Content */}
          <div className="flex-1 text-gray-900 max-w-2xl">
            <div className="mb-8">
              <div className="flex items-center gap-3 text-gray-800 mb-6">
                <div className="flex items-center gap-2 bg-black/10 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-800/30">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Tu contenido tus reglas</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                  People has rights,
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent">
                  AI follow rules.
                </span>
              </h1>
              
              <p className="text-gray-800 text-xl mb-8 leading-relaxed">
                Vigila, protege y monetiza el uso que hacen las IA en tu sitio web.
              </p>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-800">Previene abusos de IA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-800">Mejora tu SEO</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Stars className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-800">Genera términos de uso</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-800">Tarifica el tráfico IA de tu web</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-gray-800">Sin cambiar de proveedor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Stars className="w-4 h-4 text-yellow-600" />
                  </div>
                  <span className="text-gray-800">Sin costes ocultos</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="/register">
                  <Button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl border transition-all duration-300 hover:scale-105">
                    <Rocket className="w-5 h-5 mr-2" />
                    Empezar Ahora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
              
               {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-8">
                <div className="text-center group flex flex-col items-center">
                  <Clock className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-gray-900 text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">2min</div>
                  <div className="text-gray-700 text-sm font-medium">Instalación</div>
                </div>
                <div className="text-center group flex flex-col items-center">
                  <Eye className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-gray-900 text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">Sin</div>
                  <div className="text-gray-700 text-sm font-medium">Costes ocultos</div>
                </div>
                <div className="text-center group flex flex-col items-center">
                  <Zap className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-gray-900 text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">Sin</div>
                  <div className="text-gray-700 text-sm font-medium">Cambiar de proveedor</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Rocket Dashboard */}
          <div className="flex-1 max-w-lg relative">
            {/* Rocket Launch Animation */}
            <div className="relative">
              {/* Launch trail */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-32 bg-gradient-to-t from-orange-400 via-yellow-400 to-transparent opacity-70 blur-sm animate-pulse"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-t from-blue-400 via-white to-transparent animate-pulse delay-300"></div>
              
              {/* Main dashboard */}
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 hover:shadow-blue-500/20">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-bold text-lg">Control de IAs</h3>
                      <p className="text-gray-500 text-sm">Sistema Activo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 text-sm font-semibold">ONLINE</span>
                  </div>
                </div>
                
                {/* Enhanced stats cards */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200/50 hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-blue-600 mb-1">147</div>
                    <div className="text-xs text-blue-700 font-medium">IAs Detectadas</div>
                    <Zap className="w-4 h-4 text-blue-500 mx-auto mt-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200/50 hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-red-600 mb-1">23</div>
                    <div className="text-xs text-red-700 font-medium">Bloqueadas</div>
                    <Shield className="w-4 h-4 text-red-500 mx-auto mt-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200/50 hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-green-600 mb-1">124</div>
                    <div className="text-xs text-green-700 font-medium">Autorizadas</div>
                    <Stars className="w-4 h-4 text-green-500 mx-auto mt-2" />
                  </div>
                </div>
                
                {/* Enhanced AI List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200/50 hover:scale-102 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">GPT-4</span>
                    </div>
                    <span className="px-3 py-1.5 bg-red-500 text-white text-xs rounded-full font-semibold">BLOQUEADA</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200/50 hover:scale-102 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Claude AI</span>
                    </div>
                    <span className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-full font-semibold">PERMITIDA</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200/50 hover:scale-102 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">?</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Unknown Bot</span>
                    </div>
                    <span className="px-3 py-1.5 bg-yellow-500 text-white text-xs rounded-full font-semibold">REVISANDO</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200/50 hover:scale-102 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">B</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Bard</span>
                    </div>
                    <span className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-full font-semibold">LIMITADA</span>
                  </div>
                </div>
                
                {/* Launch indicator */}
                <div className="mt-6 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Rocket className="w-4 h-4 animate-bounce" />
                    <span className="text-xs font-medium">Sistema Lanzado</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around dashboard */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-70 animate-bounce delay-700"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
