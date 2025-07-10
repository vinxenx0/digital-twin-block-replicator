
import { Shield, Zap, Rocket, Stars, Sparkles, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-64 left-64 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-64 left-32 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-40 left-1/4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute top-80 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce delay-500"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Content */}
          <div className="flex-1 text-white max-w-2xl">
            <div className="mb-8 animate-fade-in">
              <div className="flex items-center gap-3 text-blue-300 mb-6">
                <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Protección IA Empresarial</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  People has rights,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  AI follow rules.
                </span>
              </h1>
              
              <p className="text-blue-100 text-xl mb-6 leading-relaxed opacity-90">
                Limita el uso que hace la IA de tu web aplicando tus normas y condiciones.
              </p>
              
              <p className="text-blue-300 text-base mb-10 opacity-80">
                Protege, controla y monetiza tu contenido digital frente a IAs fraudulentas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/25 border border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Empezar Ahora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo
                </Button>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">2min</div>
                  <div className="text-blue-200 text-sm font-medium">Instalación</div>
                </div>
                <div className="text-center group">
                  <div className="text-white text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">0€</div>
                  <div className="text-blue-200 text-sm font-medium">Pagos recurrentes</div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">30</div>
                  <div className="text-blue-200 text-sm font-medium">Días garantía</div>
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
    </div>
  );
};

export default HeroSection;
