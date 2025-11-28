import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="diagonal-cut-full bg-gradient-primary px-6 py-3">
              <h1 className="font-display text-xl font-bold tracking-tight text-primary-foreground md:text-2xl">
                AUTO PEÇAS<br />
                <span className="text-base md:text-lg">GAÚCHO</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#inicio" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Início
            </a>
            <a href="#produtos" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Produtos
            </a>
            <a href="#montadoras" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Montadoras
            </a>
            <a href="#categorias" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Categorias
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Contato
            </a>
            <a href="#sobre" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Sobre
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                0
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border py-4 lg:hidden">
            <a href="#inicio" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Início
            </a>
            <a href="#produtos" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Produtos
            </a>
            <a href="#montadoras" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Montadoras
            </a>
            <a href="#categorias" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Categorias
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Contato
            </a>
            <a href="#sobre" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Sobre
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
