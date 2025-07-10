
import { Shield, Zap, BarChart3, Bell, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
