import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const UserTypeSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Tourists */}
          <Card className="p-8 shadow-medium hover:shadow-strong transition-shadow duration-300 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-3xl mb-6 mx-auto lg:mx-0">
                ✈️
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Tourists
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                Find the best local rate online and travel with confidence knowing you're getting the most value for your money.
              </p>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full lg:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Register as Traveler
              </Button>
            </div>
          </Card>

          {/* For Exchange Bureaus */}
          <Card className="p-8 shadow-medium hover:shadow-strong transition-shadow duration-300 bg-gradient-to-br from-accent/5 to-transparent">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-success rounded-full flex items-center justify-center text-3xl mb-6 mx-auto lg:mx-0">
                🏪
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Exchange Bureaus
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                Boost visibility, manage rates online, and connect with travelers looking for the best currency exchange deals.
              </p>
              
              <Button 
                size="lg" 
                className="w-full lg:w-auto bg-gradient-to-r from-accent to-success hover:opacity-90 transition-opacity"
              >
                Join Free
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserTypeSection;