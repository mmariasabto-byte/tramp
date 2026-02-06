import { Search, User, ShoppingCart, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout, isAuthenticated } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary px-6 py-3 rounded-lg">
              <h1 className="font-display text-xl font-bold text-primary-foreground md:text-2xl">
                GAÚCHO<br />
                <span className="text-base md:text-lg">AUTO PEÇAS</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link to="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Início
            </Link>
            <a href="#produtos" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Produtos
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground transition-colors hover:text-primary outline-none">
                Montadoras
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem asChild><Link to="/manufacturer/volkswagen">Volkswagen</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/chevrolet">Chevrolet</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/fiat">Fiat</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/ford">Ford</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/toyota">Toyota</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/honda">Honda</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/hyundai">Hyundai</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/renault">Renault</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/nissan">Nissan</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/peugeot">Peugeot</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/citroen">Citroen</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/audi">Audi</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/bmw">BMW</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/volvo">Volvo</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/manufacturer/mitsubishi">Mitsubishi</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#contato" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Input
                  type="text"
                  placeholder="Buscar peças..."
                  className="w-[200px] pr-8 md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 h-full w-8 hover:bg-transparent"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                </Button>
              </form>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="hidden md:inline">{user?.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

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
            <Link to="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Início
            </Link>
            <a href="#produtos" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Produtos
            </a>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Montadoras</p>
              <div className="pl-4 flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                <Link to="/manufacturer/volkswagen" className="text-sm text-muted-foreground">Volkswagen</Link>
                <Link to="/manufacturer/chevrolet" className="text-sm text-muted-foreground">Chevrolet</Link>
                <Link to="/manufacturer/fiat" className="text-sm text-muted-foreground">Fiat</Link>
                <Link to="/manufacturer/ford" className="text-sm text-muted-foreground">Ford</Link>
                <Link to="/manufacturer/toyota" className="text-sm text-muted-foreground">Toyota</Link>
                <Link to="/manufacturer/honda" className="text-sm text-muted-foreground">Honda</Link>
                <Link to="/manufacturer/hyundai" className="text-sm text-muted-foreground">Hyundai</Link>
                <Link to="/manufacturer/renault" className="text-sm text-muted-foreground">Renault</Link>
                <Link to="/manufacturer/nissan" className="text-sm text-muted-foreground">Nissan</Link>
                <Link to="/manufacturer/peugeot" className="text-sm text-muted-foreground">Peugeot</Link>
                <Link to="/manufacturer/citroen" className="text-sm text-muted-foreground">Citroen</Link>
                <Link to="/manufacturer/audi" className="text-sm text-muted-foreground">Audi</Link>
                <Link to="/manufacturer/bmw" className="text-sm text-muted-foreground">BMW</Link>
                <Link to="/manufacturer/volvo" className="text-sm text-muted-foreground">Volvo</Link>
                <Link to="/manufacturer/mitsubishi" className="text-sm text-muted-foreground">Mitsubishi</Link>
              </div>
            </div>
            {!isAuthenticated && (
              <Link to="/login" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                Login / Cadastro
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};
