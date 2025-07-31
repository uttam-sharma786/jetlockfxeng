import { useTranslation } from "react-i18next";
import csufLogo from "@/assets/incubators/csuf-incubator.png";
import elevateLogo from "@/assets/incubators/elevate-southwest.png";
import cetysLogo from "@/assets/incubators/cetys-universidad.png";

const IncubatorsSection = () => {
  const { t } = useTranslation();
  
  const incubators = [
    {
      name: "CSUF Startup Incubator",
      logo: csufLogo,
      alt: "CSUF Startup Incubator"
    },
    {
      name: "Elevate Southwest Incubator",
      logo: elevateLogo,
      alt: "Elevate Southwest Incubator"
    },
    {
      name: "CETYS University",
      logo: cetysLogo,
      alt: "CETYS Universidad"
    }
  ];
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {t('incubators.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('incubators.description')}
            </p>
          </div>
          
          {/* 3-column grid for incubator logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {incubators.map((incubator, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-border flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                  <img 
                    src={incubator.logo} 
                    alt={incubator.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {incubator.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncubatorsSection;