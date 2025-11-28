import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const brands = [
  { name: "Chevrolet", color: "hsl(45, 100%, 51%)" },
  { name: "Volkswagen", color: "hsl(211, 100%, 43%)" },
  { name: "Fiat", color: "hsl(0, 85%, 45%)" },
  { name: "Ford", color: "hsl(211, 100%, 38%)" },
  { name: "Toyota", color: "hsl(0, 86%, 42%)" },
  { name: "Honda", color: "hsl(0, 0%, 20%)" },
  { name: "Hyundai", color: "hsl(211, 100%, 35%)" },
  { name: "Renault", color: "hsl(48, 100%, 50%)" },
  { name: "Nissan", color: "hsl(0, 0%, 20%)" },
  { name: "Peugeot", color: "hsl(211, 100%, 35%)" },
  { name: "Citroën", color: "hsl(0, 85%, 45%)" },
  { name: "Audi", color: "hsl(0, 0%, 20%)" },
  { name: "BMW", color: "hsl(211, 100%, 43%)" },
  { name: "Volvo", color: "hsl(211, 100%, 35%)" },
  { name: "Mitsubishi", color: "hsl(0, 85%, 45%)" },
];

export const BrandsSection = () => {
  return (
    <section id="montadoras" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <div className="diagonal-cut-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Montadoras
              </span>
            </div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Peças Para Todas as Marcas
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trabalhamos com peças originais e de reposição para as principais montadoras do mercado
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Card 
              key={index}
              className="group automotive-hover metallic-shine relative overflow-hidden border-border bg-card p-6 transition-all"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                {/* Brand Color Indicator */}
                <div 
                  className="h-12 w-12 rounded-full border-2 border-border shadow-metallic"
                  style={{ backgroundColor: brand.color }}
                />
                
                {/* Brand Name */}
                <h3 className="font-display text-center text-sm font-bold uppercase tracking-wide text-foreground">
                  {brand.name}
                </h3>
                
                {/* CTA */}
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="w-full text-xs opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Ver Peças
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
              
              {/* Hover Effect Background */}
              <div className="absolute inset-0 -z-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
