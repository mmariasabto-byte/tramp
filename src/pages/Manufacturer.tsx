import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { WhatsAppBanner } from "@/components/WhatsAppBanner";
import { formatPrice } from "@/lib/utils";

const Manufacturer = () => {
    const { name } = useParams<{ name: string }>();
    const { addToCart } = useCart();

    const manufacturerProducts = products.filter(
        product => product.manufacturer.toLowerCase() === name?.toLowerCase()
    );

    if (!manufacturerProducts.length) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold mb-8">Nenhum produto encontrado para {name}</h2>
                <WhatsAppBanner />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 capitalize">Peças {name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {manufacturerProducts.map((product) => (
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
            <WhatsAppBanner />
        </div>
    );
};

export default Manufacturer;
