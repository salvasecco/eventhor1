import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Zap className="h-8 w-8 text-primary animate-pulse animate-text-glow" />
          </div>
          <span className="font-sora text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Eventhor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors bg-primary/10 px-3 py-1 rounded-full">
            About Us
          </Link>
          <Link to="/auth" className="text-sm font-medium hover:text-primary transition-colors">
            Sign In
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/auth">
            <Button variant="hero" size="sm" className="shadow-glow">
              Start Analysis
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/auth" className="text-sm font-medium hover:text-primary transition-colors">
                Sign In
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Link to="/auth">
                <Button variant="hero" size="sm" className="w-full shadow-glow">
                  Start Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}