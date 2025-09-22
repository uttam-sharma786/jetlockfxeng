import { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

const EXCHANGE_API_URL = 'https://v6.exchangerate-api.com/v6/b38892df9eb28c8c5ccad915/latest/USD';

// Custom hook moved outside component and properly implemented
function useExchangeRate(toCurrency = "MXN") {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(EXCHANGE_API_URL)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data.conversion_rates && data.conversion_rates[toCurrency]) {
          setRate(data.conversion_rates[toCurrency]);
        } else {
          throw new Error(`Currency ${toCurrency} not found`);
        }
      })
      .catch(err => {
        console.error('Exchange rate fetch error:', err);
        setError(err.message);
        setRate(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [toCurrency]);

  return { rate, loading, error };
}

const HeroSection = () => {
  const { t } = useTranslation();
  const { rate, loading, error } = useExchangeRate('MXN');
  const [amount, setAmount] = useState(1000);

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
            {t('hero.title', 'Send Money')}
            <br />
            <span className="text-background/90 text-gradient">{t('hero.titleSpan', 'Anywhere')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-background/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('hero.subtitle', 'Fast, secure, and affordable money transfers worldwide')}
          </p>
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
                    {t('exchange.fromLabel', 'From')}
                  </label>
                  <div className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1 border-input bg-background/50 backdrop-blur-sm h-14 rounded-lg flex items-center px-4">
                    <span className="text-lg">USD</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t('exchange.toLabel', 'To')}
                  </label>
                  <div className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1 border-input bg-background/50 backdrop-blur-sm h-14 rounded-lg flex items-center px-4">
                    <span className="text-lg">MXN</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t('exchange.amountLabel', 'Amount')}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value) || 0)}
                      className="w-full h-14 px-4 text-lg bg-background/50 backdrop-blur-sm border border-input rounded-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:border-primary outline-none"
                      placeholder="Enter amount"
                      min="0"
                      step="0.01"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground font-medium">
                      USD
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {t('exchange.cityLabel', 'City')}
                  </label>
                  <div className="transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-1 border-input bg-background/50 backdrop-blur-sm h-14 rounded-lg flex items-center px-4">
                    <span className="text-lg text-muted-foreground">{t('exchange.selectCity', 'Select City')}</span>
                  </div>
                </div>
              </div>
              
              {/* Exchange Rate Display */}
              {rate && amount > 0 && (
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    Current Rate: 1 USD = {rate.toFixed(4)} MXN
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    You'll receive: {(amount * rate).toLocaleString('es-MX', { 
                      style: 'currency', 
                      currency: 'MXN' 
                    })}
                  </p>
                </div>
              )}
              
              {loading && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Loading exchange rate...</p>
                </div>
              )}
              
              {error && (
                <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-sm text-destructive">Error loading exchange rate: {error}</p>
                </div>
              )}
              
              <Button className="w-full mt-8 h-14 text-lg font-semibold bg-gradient-primary text-primary-foreground shadow-medium hover:shadow-strong hover:scale-105 transition-all duration-300">
                {t('exchange.searchButton', 'Search Exchange Offices')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;