
import { Lock, Shield, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SecuritySection = () => {
  return (
    <section id="security" className="py-20 bg-white">
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
    </section>
  );
};

export default SecuritySection;
