import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

const products: Product[] = [
  // Chevrolet
  {
    id: 1001,
    name: "Banco Completo Onix",
    manufacturer: "Chevrolet",
    description: "Onix 2013-2019",
    price: 899.90,
    image: "/assets/products-img/banco-completo-onix.jpg",
  },
  {
    id: 1002,
    name: "Módulo Injeção Onix",
    manufacturer: "Chevrolet",
    description: "Onix 1.0/1.4",
    price: 459.90,
    image: "/assets/products-img/modulo-injecao-onix.jpg",
  },
  {
    id: 1003,
    name: "Parachoque Traseiro Sonic",
    manufacturer: "Chevrolet",
    description: "Sonic 2012-2014",
    price: 389.90,
    image: "/assets/products-img/parachoque-traseiro-sonic.jpg",
  },
  {
    id: 1004,
    name: "Compressor Ar Spin",
    manufacturer: "Chevrolet",
    description: "Spin 1.8",
    price: 789.90,
    image: "/assets/products-img/compresso-ar-spin.jpg",
  },

  // Volkswagen
  {
    id: 1005,
    name: "Motor Gol 1.0",
    manufacturer: "Volkswagen",
    description: "Gol G5/G6",
    price: 2599.90,
    image: "/assets/products-img/motor-gol1.0.png",
  },
  {
    id: 1006,
    name: "Capô Gol G3",
    manufacturer: "Volkswagen",
    description: "Gol G3",
    price: 289.90,
    image: "/assets/products-img/capo-gol-g3.png",
  },
  {
    id: 1007,
    name: "Parachoque Dianteiro Voyage",
    manufacturer: "Volkswagen",
    description: "Voyage G5",
    price: 179.90,
    image: "/assets/products-img/parachoque-dianteiro-voyage-g5.jpg",
  },
  {
    id: 1008,
    name: "Câmbio Manual Gol",
    manufacturer: "Volkswagen",
    description: "Gol 2011+",
    price: 1299.90,
    image: "/assets/products-img/cambio-manual-gol-2011.jpg",
  },

  // Fiat
  {
    id: 1009,
    name: "Banco Completo Punto",
    manufacturer: "Fiat",
    description: "Punto 2008-2012",
    price: 699.90,
    image: "/assets/products-img/banco-completo-punto.jpg",
  },
  {
    id: 1010,
    name: "Chave de Seta Fiat 500",
    manufacturer: "Fiat",
    description: "Fiat 500",
    price: 289.90,
    image: "/assets/products-img/chave-de-seta-fiat500.jpg",
  },
  {
    id: 1011,
    name: "Módulo Tração Toro",
    manufacturer: "Fiat",
    description: "Toro 4x4",
    price: 899.90,
    image: "/assets/products-img/modulo-tracao-toro.jpg",
  },
  {
    id: 1012,
    name: "Porta Dianteira Mobi",
    manufacturer: "Fiat",
    description: "Mobi 2016+",
    price: 459.90,
    image: "/assets/products-img/porta-dianteira-mobi.jpg",
  },

  // Ford
  {
    id: 1013,
    name: "Banco Completo Ford Ka",
    manufacturer: "Ford",
    description: "Ka 2015+",
    price: 599.90,
    image: "/assets/products-img/banco-completo-fordka.jpg",
  },
  {
    id: 1014,
    name: "Motor Ford Ka",
    manufacturer: "Ford",
    description: "Ka 1.0 3C",
    price: 3599.90,
    image: "/assets/products-img/motor-fordka.jpg",
  },
  {
    id: 1015,
    name: "Câmbio Manual Fiesta",
    manufacturer: "Ford",
    description: "Fiesta Rocam",
    price: 1199.90,
    image: "/assets/products-img/cambio-manual-fiesta.jpg",
  },
  {
    id: 1016,
    name: "Porta Dianteira Ecosport",
    manufacturer: "Ford",
    description: "Ecosport 2013+",
    price: 589.90,
    image: "/assets/products-img/porta-dianteira-ecosport.jpg",
  },

  // Toyota
  {
    id: 1017,
    name: "Alternador Hilux",
    manufacturer: "Toyota",
    description: "Hilux 3.0",
    price: 899.90,
    image: "/assets/products-img/alternador-hilux.jpg",
  },
  {
    id: 1018,
    name: "Caixa Transferência Hilux",
    manufacturer: "Toyota",
    description: "Hilux 4x4",
    price: 2899.90,
    image: "/assets/products-img/caixa-transferencia-hilux.jpg",
  },
  {
    id: 1019,
    name: "Farol Corolla",
    manufacturer: "Toyota",
    description: "Corolla 2015-2017",
    price: 459.90,
    image: "/assets/products-img/farol-corolla.jpg",
  },
  {
    id: 1020,
    name: "Motor Etios",
    manufacturer: "Toyota",
    description: "Etios 1.3/1.5",
    price: 2299.90,
    image: "/assets/products-img/motor-etios.jpg",
  },

  // Honda
  {
    id: 1021,
    name: "Banco Completo Civic",
    manufacturer: "Honda",
    description: "Civic G9",
    price: 999.90,
    image: "/assets/products-img/banco-completo-civic.jpg",
  },
  {
    id: 1022,
    name: "Câmbio Automático Fit",
    manufacturer: "Honda",
    description: "Fit CVT",
    price: 2599.90,
    image: "/assets/products-img/cambio-automatico-fit.jpg",
  },
  {
    id: 1023,
    name: "Motor Honda Fit",
    manufacturer: "Honda",
    description: "Fit 1.4/1.5",
    price: 2899.90,
    image: "/assets/products-img/motor-honda-fit.jpg",
  },
  {
    id: 1024,
    name: "Porta Dianteira City",
    manufacturer: "Honda",
    description: "City 2015+",
    price: 559.90,
    image: "/assets/products-img/porta-dianteira-city.jpg",
  },
];

export const ProductsSection = () => {
  const { addToCart } = useCart();

  return (
    <section id="produtos" className="bg-background-alt py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <div className="bg-primary/10 border-l-4 border-primary px-4 py-2 rounded">
              <span className="text-sm font-semibold tracking-wide text-primary">
                Produtos em Destaque
              </span>
            </div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            Peças de Alta Qualidade
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Produtos originais e de reposição das melhores marcas do mercado
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group modern-hover overflow-hidden border-border bg-card transition-all rounded-xl"
            >
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <div className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                    {product.manufacturer}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-3 text-xs text-muted-foreground">
                  {product.description}
                </p>

                <div className="mb-4 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-primary">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>

                <Button
                  className="w-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
                  size="sm"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar
                </Button>
              </div>
            </Card>
          ))}
        </div> {/* FECHAMENTO DO PRODUCTS GRID */}

        {/* View More */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-base font-semibold hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              const element = document.getElementById('montadoras');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div> {/* FECHAMENTO DO CONTAINER */}
    </section>
  );
};
