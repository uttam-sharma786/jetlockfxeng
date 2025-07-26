import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="w-full bg-primary/95 backdrop-blur-sm border-b border-primary-glow/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-glow/20 via-accent/20 to-primary-glow/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              <div className="relative bg-card/10 backdrop-blur-sm rounded-lg p-2 border border-primary-glow/20 group-hover:border-primary-glow/40 transition-all duration-300">
                <img 
                  src="/lovable-uploads/a30c05d8-7b2d-40bf-9b65-35ae35629eae.png" 
                  alt="JetLock FX Logo" 
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              {t('nav.about')}
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              {t('nav.contact')}
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              FAQ
            </a>
            <LanguageSelector />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button variant="ghost">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;