import { useState } from "react";
import { Car, Menu, X, User, Plus } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">RideConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Find Rides
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Offer Ride
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              How it Works
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
            <HeroButton variant="primary" size="default">
              <Plus className="mr-2 h-4 w-4" />
              Sign Up
            </HeroButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Find Rides
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Offer Ride
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                How it Works
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <HeroButton variant="primary" className="justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Sign Up
                </HeroButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;