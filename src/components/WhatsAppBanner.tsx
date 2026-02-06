import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const WhatsAppBanner = () => {
    return (
        <section className="w-full py-16 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Caso não tenha achado a peça que procura, nos consulte no nosso WhatsApp.
                    </h3>
                    <p className="text-muted-foreground">
                        Nossa equipe está pronta para ajudar você a encontrar exatamente o que precisa.
                    </p>
                    <Button
                        size="lg"
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 gap-3"
                        asChild
                    >
                        <a href="https://w.app/2izx1c" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-6 w-6" />
                            Nos consulte aqui!
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
