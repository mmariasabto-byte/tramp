import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase() || "";
    const { addToCart } = useCart();

    const filteredProducts = products.filter((product) => {
        const searchTerm = query.toLowerCase();
        return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.manufacturer.toLowerCase().includes(searchTerm)
        );
    });

    const handleWhatsAppContact = () => {
        const phoneNumber = "557996053138"; // Replace with actual number
        const message = `Olá! Não encontrei a peça que procurava no site. Poderiam me ajudar? Estou procurando por: ${query}`;
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="container mx-auto px-4 py-8 min-h-[60vh]">
            <h1 className="text-3xl font-bold mb-8">
                Resultados para: <span className="text-primary">"{query}"</span>
            </h1>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Card key={product.id} className="flex flex-col">
                            <CardHeader className="p-0">
                                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 p-4">
                                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                                <p className="text-xl font-bold text-primary">{formatPrice(product.price)}</p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button
                                    className="w-full"
                                    onClick={() => addToCart(product)}
                                >
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Adicionar
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/25">
                    <h2 className="text-2xl font-bold mb-4">Nenhum produto encontrado</h2>
                    <p className="text-muted-foreground max-w-md mb-8">
                        Caso não tenha achado a peça que procura, nos consulte no nosso WhatsApp.
                    </p>
                    <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        onClick={handleWhatsAppContact}
                    >
                        <MessageCircle className="mr-2 h-6 w-6" />
                        Nos consulte aqui!
                    </Button>
                </div>
            )}


        </div>
    );
};

export default Search;
