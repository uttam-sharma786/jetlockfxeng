import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import ExchangeForm from "@/components/ExchangeForm";
import ExchangeResults from "@/components/ExchangeResults";
import HowItWorks from "@/components/HowItWorks";
import UserTypeSection from "@/components/UserTypeSection";
import RealEstateSection from "@/components/RealEstateSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6 leading-tight">
              {t('hero.title')}
              <br />
              <span className="text-background/90">{t('hero.titleSpan')}</span>
            </h1>
            <p className="text-xl text-background/80 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Exchange Form */}
          <div className="max-w-4xl mx-auto animate-slide-up">
            <ExchangeForm />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {t('exchange.title')}
            </h2>
            <ExchangeResults />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* User Types */}
      <UserTypeSection />

      {/* Real Estate Interest */}
      <RealEstateSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
