import { Link } from "react-router-dom";
import { manufacturers } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Função para obter a cor de fundo de cada montadora
const getManufacturerColor = (name: string) => {
    const colors: Record<string, string> = {
        Volkswagen: "bg-blue-600",
        Chevrolet: "bg-yellow-500",
        Fiat: "bg-red-600",
        Ford: "bg-blue-700",
        Toyota: "bg-red-600",
        Honda: "bg-zinc-700",
        Hyundai: "bg-blue-600",
        Renault: "bg-yellow-500",
        Nissan: "bg-zinc-700",
        Peugeot: "bg-blue-600",
        Citroen: "bg-red-600",
        Audi: "bg-zinc-800",
        BMW: "bg-blue-500",
        Volvo: "bg-zinc-500",
        Mitsubishi: "bg-zinc-800",
    };
    return colors[name] || "bg-primary";
};

// Função para obter o caminho da logo (todas estão na pasta public)
const getManufacturerLogo = (name: string) => {
    const logoUrls: Record<string, string> = {
        Volkswagen: "/volkswagen-logo.png",
        Chevrolet: "/chevrolet-logo.png",
        Fiat: "/fiat-logo.png",
        Ford: "/ford-logo.png",
        Toyota: "/toyota-logo.png",
        Honda: "/honda-logo.png",
        Hyundai: "/hyundai-logo.png",
        Renault: "/renault-logo.png",
        Nissan: "/nissan-logo.png",
        Peugeot: "/peugeot-logo.png",
        Citroen: "/citroen-logo.png",
        Audi: "/audi-logo.png",
        BMW: "/bmw-logo.png",
        Volvo: "/volvo-logo.png",
        Mitsubishi: "/mitsubishi-logo.png",
    };
    return logoUrls[name] || "";
};

export const ManufacturerGrid = () => {
    return (
        <section id="montadoras" className="py-20 md:py-32 bg-gradient-to-b from-background to-[#0F1419]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-block">
                        <div className="bg-primary/10 border-l-4 border-primary px-4 py-2 rounded">
                            <span className="text-sm font-semibold tracking-wide text-primary">
                                Montadoras
                            </span>
                        </div>
                    </div>
                    <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-5xl">
                        Peças Para Todas as Marcas
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-300 mb-8">
                        Trabalhamos com peças originais e de reposição para as principais montadoras do mercado
                    </p>

                    {/* Subtítulo do grid */}
                    <div className="mb-12 text-center">
                        <h3 className="text-3xl font-bold mb-4 text-white">Nossas Montadoras</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Trabalhamos com as principais marcas do mercado para oferecer a melhor qualidade em peças.
                        </p>
                    </div>
                </div>

                {/* Grid de montadoras */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {manufacturers.map((manufacturer) => (
                        <Link
                            key={manufacturer}
                            to={`/manufacturer/${manufacturer.toLowerCase()}`}
                            className="group block"
                        >
                            <Card className="h-full bg-[#151b23] border-[#1f2937] hover:border-primary/50 transition-all duration-300">
                                <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                                    {/* Logo da montadora */}
                                    <div className={`mb-6 p-4 rounded-full ${getManufacturerColor(manufacturer)} w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <img 
                                            src={getManufacturerLogo(manufacturer)} 
                                            alt={`${manufacturer} logo`}
                                            className="w-10 h-10 object-contain"
                                            loading="lazy"
                                            onError={(e) => {
                                                // Fallback se a imagem não carregar
                                                const target = e.currentTarget;
                                                target.style.display = 'none';
                                                const placeholder = document.createElement('div');
                                                placeholder.className = 'w-8 h-8 border-2 border-white/20 rounded-full';
                                                target.parentNode?.appendChild(placeholder);
                                            }}
                                        />
                                    </div>
                                    <span className="font-bold text-lg text-white mb-2">{manufacturer}</span>
                                    <div className="flex items-center text-sm text-gray-400 group-hover:text-primary transition-colors mt-2">
                                        <span>Ver peças</span>
                                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};