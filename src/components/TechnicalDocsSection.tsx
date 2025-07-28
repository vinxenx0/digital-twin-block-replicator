
import { FileText, Code, BookOpen, BarChart3, Download, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TechnicalDocsSection = () => {
  return (
    <section id="technical-docs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Documentación Técnica
            <br />
            <span className="text-blue-600">y Recursos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Accede a toda la documentación técnica, whitepapers y recursos necesarios para 
            implementar Los GuardIAS en tu infraestructura
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
                        Guía completa de implementación y configuración de Los GuardIAS
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
    </section>
  );
};

export default TechnicalDocsSection;
