// src/components/MegaMenuNavigation.tsx
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Shield, Rocket, Users, Building2 } from "lucide-react";

const productItems = [
  { id: "features", label: "Características", description: "Descubre todas las funcionalidades" },
  { id: "steps", label: "Cómo Funciona", description: "Proceso simple en 3 pasos" },
  { id: "benefits", label: "Beneficios", description: "Ventajas inmediatas para tu negocio" },
  { id: "hero", label: "Panel de Control", description: "Gestión centralizada e intuitiva" },
];

const useCasesItems = [
  { id: "features", label: "Qué Detectamos", description: "Tipos de amenazas que identificamos" },
  { id: "benefits", label: "Sectores", description: "Industrias que pueden beneficiarse" },
  { id: "success-stories", label: "Testimonios", description: "Lo que dicen nuestros clientes" },
  { id: "pricing", label: "Comparativa", description: "Los GuardIAS vs alternativas" },
  { id: "benefits", label: "Beneficios Avanzados", description: "Soluciones completas a problemas reales" },
];

const corporateItems = [
  { id: "pricing", label: "Precios", description: "Planes adaptados a tu negocio" },
  { id: "security", label: "Seguridad", description: "Privacidad y cumplimiento normativo" },
  { id: "hero", label: "Contacto", description: "Ponte en contacto con nosotros" },
  { id: "technical-docs", label: "Documentación", description: "Guías técnicas y API" },
  { id: "hero", label: "Estadísticas", description: "Números que avalan nuestra eficacia" },
];

const MegaMenuNavigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar autenticación al montar el componente
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("https://losguardias.com/rest/auth/check-auth", {
          method: "GET",
          credentials: "include", // Enviar cookies al backend
        });
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
      } catch (error) {
        console.error("Error al verificar autenticación:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = [
        "hero",
        "features",
        "steps",
        "benefits",
        "pricing",
        "security",
        "success-stories",
        "technical-docs",
      ];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MenuSection = ({ 
    title, 
    items, 
    highlightSection 
  }: { 
    title: string; 
    items: typeof productItems;
    highlightSection: { icon: any; title: string; description: string; color: string; bg: string; }
  }) => (
    <div className="w-[900px] p-8">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-foreground mb-6 text-lg">{title}</h3>
          <div className="space-y-2">
            {items.map((item) => (
              <NavigationMenuLink
                key={item.id}
                className={`block p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer ${
                  activeSection === item.id ? "bg-primary/10 border-l-2 border-primary" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <div className="font-medium text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </NavigationMenuLink>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-6 text-lg">Enlaces Útiles</h3>
          <div className="space-y-4">
            <a href="https://losguardias.com" className="block text-muted-foreground hover:text-primary transition-colors">
              Documentación API
            </a>
            <a href="https://losguardias.com" className="block text-muted-foreground hover:text-primary transition-colors">
              Guías de Integración
            </a>
            <a href="https://losguardias.com" className="block text-muted-foreground hover:text-primary transition-colors">
              Centro de Ayuda
            </a>
            <a href="https://losguardias.com" className="block text-muted-foreground hover:text-primary transition-colors">
              Blog Técnico
            </a>
            <a href="https://losguardias.com" className="block text-muted-foreground hover:text-primary transition-colors">
              Estado del Servicio
            </a>
            <a href="https://losguardias.com" className="block text-muted-foreground hover:text-primary transition-colors">
              Comunidad
            </a>
          </div>
        </div>
        <div className={`${highlightSection.bg} rounded-xl p-6 border border-border`}>
          <div className={`inline-flex items-center justify-center w-12 h-12 ${highlightSection.bg} rounded-lg mb-4 border border-border`}>
            <highlightSection.icon className={`h-6 w-6 ${highlightSection.color}`} />
          </div>
          <h4 className="font-bold text-foreground mb-3 text-lg">{highlightSection.title}</h4>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{highlightSection.description}</p>
          <a 
            href="https://losguardias.com/login"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors w-full block text-center"
          >
            Comenzar Ahora
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            ¿Necesitas ayuda?
          </div>
          <div className="flex space-x-6">
            <a href="https://losguardias.com" className="text-sm text-muted-foreground hover:text-primary">Términos</a>
            <a href="https://losguardias.com" className="text-sm text-muted-foreground hover:text-primary">Privacidad</a>
            <a href="https://losguardias.com" className="text-sm text-muted-foreground hover:text-primary">Estado</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-12 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection("hero")}
          >
            <Shield className="h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Los GuardIAS</span>
          </div>
          
          <NavigationMenu className="hidden lg:flex mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary">
                  Producto
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-1/2 top-0 -translate-x-1/2 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto md:left-1/2 md:-translate-x-1/2">
                  <MenuSection 
                    title="Producto"
                    items={productItems} 
                    highlightSection={{
                      icon: Rocket,
                      title: "Integración Rápida",
                      description: "Configura Los GuardIAS en minutos con nuestra API simple y documentación completa.",
                      color: "text-primary",
                      bg: "bg-primary/10"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary">
                  Casos de Uso
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-1/2 top-0 -translate-x-1/2 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto md:left-1/2 md:-translate-x-1/2">
                  <MenuSection 
                    title="Casos de Uso"
                    items={useCasesItems} 
                    highlightSection={{
                      icon: Users,
                      title: "Casos de Éxito",
                      description: "Descubre cómo empresas como la tuya han mejorado su seguridad con Los GuardIAS.",
                      color: "text-secondary-foreground",
                      bg: "bg-secondary/10"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary">
                  Empresa
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-1/2 top-0 -translate-x-1/2 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto md:left-1/2 md:-translate-x-1/2">
                  <MenuSection 
                    title="Empresa"
                    items={corporateItems} 
                    highlightSection={{
                      icon: Building2,
                      title: "Soporte Empresarial",
                      description: "Obtén soporte 24/7, onboarding personalizado y SLAs garantizados para tu empresa.",
                      color: "text-accent-foreground",
                      bg: "bg-accent/10"
                    }}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {isLoading ? (
            <span className="text-muted-foreground">Cargando...</span>
          ) : isAuthenticated ? (
            <a 
              href="https://losguardias.com/dashboard"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Panel de Control
            </a>
          ) : (
            <a 
              href="https://losguardias.com/login"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Prueba Gratuita
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MegaMenuNavigation;
