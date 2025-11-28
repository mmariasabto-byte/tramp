import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <div className="diagonal-cut-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Entre em Contato
              </span>
            </div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Estamos Aqui Para Ajudar
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Equipe especializada pronta para atender você
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* WhatsApp */}
          <Card className="automotive-hover border-border bg-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">WhatsApp</h3>
            <p className="mb-4 text-sm text-muted-foreground">(51) 99999-9999</p>
            <Button size="sm" className="bg-gradient-primary font-bold">
              Chamar
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
            <p className="mb-4 text-sm text-muted-foreground">(51) 3333-3333</p>
            <Button size="sm" variant="outline" className="border-primary text-foreground">
              Ligar
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

          {/* Localização */}
          <Card className="automotive-hover border-border bg-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">Endereço</h3>
            <p className="mb-4 text-sm text-muted-foreground">Av. Principal, 1234<br />Porto Alegre - RS</p>
            <Button size="sm" variant="outline" className="border-primary text-foreground">
              Ver Mapa
            </Button>
          </Card>
        </div>

        {/* Horário */}
        <Card className="mt-6 border-border bg-gradient-dark p-8 text-center">
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
