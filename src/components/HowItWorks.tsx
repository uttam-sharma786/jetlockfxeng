const HowItWorks = () => {
  const steps = [
    {
      icon: "🔍",
      title: "Search rates nearby",
      description: "Find the best exchange rates in your area with real-time pricing",
    },
    {
      icon: "🔒",
      title: "Lock the best rate",
      description: "Secure your preferred rate and reserve your currency exchange",
    },
    {
      icon: "💰",
      title: "Pick up your cash",
      description: "Visit the location and collect your exchanged currency safely",
    },
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting the best exchange rate is simple with our three-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              {/* Step Number */}
              <div className="w-8 h-8 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>

              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-8 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;