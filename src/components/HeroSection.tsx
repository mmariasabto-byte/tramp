import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-automotive.jpg";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[600px] w-full overflow-hidden md:min-h-[700px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Peças Automotivas Premium" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <div className="diagonal-cut-tl bg-primary px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground">
                Líder em Auto Peças
              </span>
            </div>
          </div>
          
          <h2 className="mb-6 font-display text-4xl font-black uppercase leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Peças Automotivas<br />
            <span className="text-primary">Para Todas as Montadoras</span>
          </h2>
          
          <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Atendimento rápido, confiança e qualidade garantida. 
            Estoque completo para seu veículo com as melhores marcas do mercado.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg"
              className="group bg-gradient-primary glow-effect text-base font-bold uppercase tracking-wide transition-all hover:shadow-strong"
            >
              Explorar Peças
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary bg-transparent text-base font-bold uppercase tracking-wide text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
            <div>
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">15+</div>
              <div className="text-sm text-muted-foreground">Montadoras</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">5000+</div>
              <div className="text-sm text-muted-foreground">Produtos</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">24h</div>
              <div className="text-sm text-muted-foreground">Atendimento</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-primary opacity-10 blur-3xl"></div>
    </section>
  );
};
