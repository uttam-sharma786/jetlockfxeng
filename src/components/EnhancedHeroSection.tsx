import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-6 mb-8 text-background text-sm font-medium">
          <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-2 rounded-full">
            <Shield className="h-4 w-4" />
            <span>{t('hero.trustIndicator1', 'Secure & Licensed')}</span>
          </div>
          <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-2 rounded-full">
            <Zap className="h-4 w-4" />
            <span>{t('hero.trustIndicator2', 'Real-time Rates')}</span>
          </div>
          <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-2 rounded-full">
            <Star className="h-4 w-4" />
            <span>{t('hero.trustIndicator3', '4.9★ Rating')}</span>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-background mb-8 leading-tight tracking-tight">
            {t('hero.title')}
            <br />
            <span className="text-background/90 text-gradient">{t('hero.titleSpan')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-background/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('hero.subtitle')}
          </p>
          
          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              variant="hero" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              {t('hero.secondaryCTA', 'Watch Demo')}
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-background/90 text-sm font-medium bg-background/15 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
            <p>{t('hero.socialProof', 'Trusted by 50,000+ travelers worldwide')}</p>
          </div>
        </div>

        {/* Enhanced Exchange Form with better spacing */}
        <div className="max-w-5xl mx-auto animate-slide-up">
          <Suspense fallback={
            <div className="bg-card shadow-medium border border-border/50 backdrop-blur-sm p-8 animate-pulse rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse bg-muted rounded h-12 w-full"></div>
                ))}
              </div>
              <div className="animate-pulse bg-muted rounded h-12 w-full mt-6"></div>
            </div>
          }>
            <div className="bg-card shadow-medium border border-border/50 backdrop-blur-sm p-8 rounded-lg transition-all duration-300 hover:shadow-strong hover:scale-[1.02]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t('exchange.fromLabel')}
                  </label>
                  <div className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1 border-input bg-background/50 backdrop-blur-sm h-14 bg-background/80 rounded-lg flex items-center px-4">
                    <span className="text-lg">USD</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t('exchange.toLabel')}
                  </label>
                  <div className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1 border-input bg-background/50 backdrop-blur-sm h-14 bg-background/80 rounded-lg flex items-center px-4">
                    <span className="text-lg">MXN</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t('exchange.amountLabel')}
                  </label>
                  <div className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1 border-input bg-background/50 backdrop-blur-sm h-14 bg-background/80 rounded-lg flex items-center px-4">
                    <span className="text-lg text-muted-foreground">1,000</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t('exchange.cityLabel')}
                  </label>
                  <div className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1 border-input bg-background/50 backdrop-blur-sm h-14 bg-background/80 rounded-lg flex items-center px-4">
                    <span className="text-lg text-muted-foreground">{t('exchange.selectCity')}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8 h-14 text-lg font-semibold bg-gradient-primary text-primary-foreground shadow-medium hover:shadow-strong hover:scale-105 transition-all duration-300">
                {t('exchange.searchButton')}
              </Button>
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;