import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface Product {
  name: string;
  brand: string;
  compatibility: string;
  price: string;
  image: string;
}

const products: Product[] = [
  // Chevrolet
  { name: "Filtro de Óleo GM Onix", brand: "Chevrolet", compatibility: "Onix 1.0/1.4", price: "R$ 45,90", image: "🔧" },
  { name: "Pastilha de Freio Cruze", brand: "Chevrolet", compatibility: "Cruze 2012-2020", price: "R$ 189,90", image: "🔩" },
  { name: "Amortecedor Dianteiro S10", brand: "Chevrolet", compatibility: "S10 2012+", price: "R$ 389,90", image: "⚙️" },
  { name: "Bomba de Combustível Prisma", brand: "Chevrolet", compatibility: "Prisma 1.0/1.4", price: "R$ 459,90", image: "⛽" },
  
  // Volkswagen
  { name: "Kit Embreagem Gol G5", brand: "Volkswagen", compatibility: "Gol G5/G6 1.0", price: "R$ 599,90", image: "🔧" },
  { name: "Vela de Ignição Polo", brand: "Volkswagen", compatibility: "Polo 1.6 MSI", price: "R$ 89,90", image: "⚡" },
  { name: "Pastilha de Freio Virtus", brand: "Volkswagen", compatibility: "Virtus 2018+", price: "R$ 179,90", image: "🔩" },
  { name: "Bateria 60Ah VW", brand: "Volkswagen", compatibility: "Gol/Voyage/Fox", price: "R$ 389,90", image: "🔋" },
  
  // Fiat
  { name: "Sensor de Oxigênio Palio", brand: "Fiat", compatibility: "Palio 1.0/1.4", price: "R$ 189,90", image: "📡" },
  { name: "Filtro de Ar Strada", brand: "Fiat", compatibility: "Strada 1.4", price: "R$ 49,90", image: "🌬️" },
  { name: "Correia Dentada Uno", brand: "Fiat", compatibility: "Uno Fire 1.0", price: "R$ 89,90", image: "🔗" },
  { name: "Radiador Toro", brand: "Fiat", compatibility: "Toro 1.8/2.0", price: "R$ 789,90", image: "🌡️" },
  
  // Ford
  { name: "Filtro Combustível Ka", brand: "Ford", compatibility: "Ka 1.0/1.5", price: "R$ 59,90", image: "⛽" },
  { name: "Pastilha de Freio Fiesta", brand: "Ford", compatibility: "Fiesta 2011+", price: "R$ 169,90", image: "🔩" },
  { name: "Bomba D'água Ecosport", brand: "Ford", compatibility: "Ecosport 2.0", price: "R$ 279,90", image: "💧" },
  { name: "Kit Velas Focus", brand: "Ford", compatibility: "Focus 2.0", price: "R$ 159,90", image: "⚡" },
  
  // Toyota
  { name: "Pastilha de Freio Corolla", brand: "Toyota", compatibility: "Corolla 2015+", price: "R$ 229,90", image: "🔩" },
  { name: "Filtro de Óleo Hilux", brand: "Toyota", compatibility: "Hilux Diesel", price: "R$ 79,90", image: "🔧" },
  { name: "Bateria 70Ah Toyota", brand: "Toyota", compatibility: "Corolla/RAV4", price: "R$ 489,90", image: "🔋" },
  { name: "Amortecedor Etios", brand: "Toyota", compatibility: "Etios 2013+", price: "R$ 349,90", image: "⚙️" },
  
  // Honda
  { name: "Filtro de Cabine Civic", brand: "Honda", compatibility: "Civic 2017+", price: "R$ 69,90", image: "🌬️" },
  { name: "Pastilha HR-V", brand: "Honda", compatibility: "HR-V 2015+", price: "R$ 199,90", image: "🔩" },
  { name: "Vela Iridium Fit", brand: "Honda", compatibility: "Fit 1.5", price: "R$ 129,90", image: "⚡" },
  { name: "Bomba Combustível City", brand: "Honda", compatibility: "City 2015+", price: "R$ 529,90", image: "⛽" },
];

export const ProductsSection = () => {
  return (
    <section id="produtos" className="bg-background-alt py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <div className="diagonal-cut-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Produtos em Destaque
              </span>
            </div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Peças de Alta Qualidade
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Produtos originais e de reposição das melhores marcas do mercado
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group automotive-hover overflow-hidden border-border bg-card transition-all"
            >
              {/* Product Image */}
              <div className="relative flex h-48 items-center justify-center bg-muted">
                <div className="text-6xl">{product.image}</div>
                <div className="absolute top-2 right-2">
                  <div className="rounded-full bg-background px-3 py-1 text-xs font-bold text-foreground">
                    {product.brand}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="mb-2 font-display text-base font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-3 text-xs text-muted-foreground">
                  {product.compatibility}
                </p>
                
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                </div>

                <Button 
                  className="w-full bg-gradient-primary font-bold uppercase tracking-wide transition-all hover:shadow-glow"
                  size="sm"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-base font-bold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};
