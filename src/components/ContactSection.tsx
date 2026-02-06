import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <div className="diagonal-cut-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Entre em Contato
              </span>
            </div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Estamos Aqui Para Ajudar!
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Equipe especializada pronta para atender você!
          </p>
        </div>

        <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
          {/* WhatsApp */}
          <Card className="automotive-hover border-border bg-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">WhatsApp</h3>
            <p className="mb-4 text-sm text-muted-foreground">(79) 9605-3138</p>
           <Button size="sm" className="bg-gradient-primary font-bold" asChild>
            <a
              href="https://w.app/2izx1c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar
            </a>
          </Button>
          </Card>

          {/* Telefone */}
          <Card className="automotive-hover border-border bg-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">Telefone</h3>
            <p className="mb-4 text-sm text-muted-foreground">(79) 9605-3138</p>
            <Button size="sm" className="bg-gradient-primary font-bold" asChild>
              <a
                href="tel:+557996053138"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ligar
              </a>
            </Button>
          </Card>

          {/* Email */}
          <Card className="automotive-hover border-border bg-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">E-mail</h3>
            <p className="mb-4 text-sm text-muted-foreground">contato@autopecasgaucho.com.br</p>
            <Button size="sm" variant="outline" className="border-primary text-foreground">
              Enviar
            </Button>
          </Card>
        </div>

        {/* Horário */}
        <Card className="mt-6 w-full max-w-2xl border-border bg-gradient-dark p-8 text-center">
          <div className="mb-4 flex justify-center">
            <Clock className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
            Horário de Atendimento
          </h3>
          <div className="space-y-2 text-muted-foreground">
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 8h às 13h</p>
            <p className="font-bold text-primary">WhatsApp: 24h</p>
          </div>
        </Card>
      </div>
    </section>
  );
};
