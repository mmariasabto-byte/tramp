import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-4">
              <div className="diagonal-cut-full inline-block bg-gradient-primary px-4 py-2">
                <h3 className="font-display text-lg font-bold text-primary-foreground">
                  AUTO PEÇAS GAÚCHO
                </h3>
              </div>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Peças automotivas de qualidade para todas as montadoras. 
              Tradição e confiança desde 1995.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#inicio" className="transition-colors hover:text-primary">Início</a></li>
              <li><a href="#produtos" className="transition-colors hover:text-primary">Produtos</a></li>
              <li><a href="#montadoras" className="transition-colors hover:text-primary">Montadoras</a></li>
              <li><a href="#categorias" className="transition-colors hover:text-primary">Categorias</a></li>
              <li><a href="#sobre" className="transition-colors hover:text-primary">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Categorias
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Freios</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Suspensão</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Motor</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Elétrica</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Filtros</a></li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Informações
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Política de Privacidade</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Termos de Uso</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Política de Troca</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Formas de Pagamento</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Auto Peças Gaúcho. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            CNPJ: 00.000.000/0001-00 | Porto Alegre - RS
          </p>
        </div>
      </div>
    </footer>
  );
};
