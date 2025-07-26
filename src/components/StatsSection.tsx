
import { Shield, Eye, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  return (
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
              <div className="font-semibold text-gray-900">Los GuardIAS</div>
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
  );
};

export default StatsSection;
