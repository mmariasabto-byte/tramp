import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
    const { items, removeFromCart, total } = useCart();

    const handleWhatsAppCheckout = () => {
        const phoneNumber = "557996053138"; // Replace with actual number
        const message = items.map(item =>
            `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}`
        ).join('%0A');

        const totalMessage = `%0ATotal: ${formatPrice(total)}`;
        const fullMessage = `Olá! Gostaria de finalizar a seguinte compra:%0A%0A${message}${totalMessage}`;

        window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
                <Link to="/">
                    <Button>Continuar Comprando</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg bg-card">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-muted-foreground">{formatPrice(item.price)}</p>
                                <p className="text-sm text-muted-foreground">Qtd: {item.quantity}</p>
                            </div>
                            <Button
                                variant="destructive"
                                size="icon"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="md:col-span-1">
                    <div className="border p-6 rounded-lg bg-card sticky top-24">
                        <h3 className="text-xl font-bold mb-4">Resumo do Pedido</h3>
                        <div className="flex justify-between mb-4 text-lg font-semibold">
                            <span>Total</span>
                            <span>{formatPrice(total)}</span>
                        </div>
                        <Button
                            className="w-full bg-green-600 hover:bg-green-700"
                            size="lg"
                            onClick={handleWhatsAppCheckout}
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Finalizar no WhatsApp
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
