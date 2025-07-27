import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ponte en <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre Los GuardIAS? Nuestro equipo está aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Correo electrónico</h4>
                    <a href="mailto:hola@losguardias.com" className="text-blue-600 hover:text-blue-700">
                      hola@losguardias.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <a href="tel:+34900123456" className="text-green-600 hover:text-green-700">
                      +34 900 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                    <p className="text-gray-600">Murcia, España</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horario de atención</h4>
                    <p className="text-gray-600">Lunes a Viernes</p>
                    <p className="text-gray-600">10:00 - 18:00 (CEST)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Necesitas ayuda inmediata?
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Accede a nuestro centro de ayuda para encontrar respuestas rápidas
                  </p>
                  <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    Centro de Ayuda
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Tu empresa"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos más sobre tu consulta..."
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center gap-2"
                  size="lg"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obligatorios. Responderemos en menos de 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;