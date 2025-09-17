import { useState } from "react";
import { Menu, X, User, Plus } from "lucide-react";
import logo from "@/assets/logo.png";
import { HeroButton } from "@/components/ui/hero-button";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={logo} 
              alt="TashGO Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold gradient-text">TashGO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('onCab')}
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('onBus')}
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('onTrain')}
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('onPlane')}
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <User className="mr-2 h-4 w-4" />
              {t('login')}
            </Button>
            <HeroButton variant="primary" size="default">
              <Plus className="mr-2 h-4 w-4" />
              {t('signUp')}
            </HeroButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 touch-manipulation">
                {t('onCab')}
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 touch-manipulation">
                {t('onBus')}
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 touch-manipulation">
                {t('onTrain')}
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-2 touch-manipulation">
                {t('onPlane')}
              </a>
              <div className="flex flex-col space-y-3 pt-3 sm:pt-4 border-t border-border">
                <div className="px-2 py-1">
                  <LanguageSwitcher />
                </div>
                <Button variant="ghost" className="justify-start h-11 touch-manipulation">
                  <User className="mr-2 h-4 w-4" />
                  {t('login')}
                </Button>
                <HeroButton variant="primary" className="justify-start h-11 touch-manipulation">
                  <Plus className="mr-2 h-4 w-4" />
                  {t('signUp')}
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