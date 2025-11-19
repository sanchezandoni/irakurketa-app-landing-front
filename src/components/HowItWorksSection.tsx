import { ClipboardList, TrendingUp, Mic, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Hasierako galdetegia",
    description: "Ikaslearen profila sortu eta abiapuntua ezarri."
  },
  {
    icon: TrendingUp,
    title: "Mailakatze automatikoa",
    description: "Irakurketa pasarteak bere mailara egokitzen dira."
  },
  {
    icon: Mic,
    title: "Irakurketa ebaluazioa",
    description: "Ahotsaren eta ulermenaren analisia egiten da."
  },
  {
    icon: BarChart3,
    title: "Feedbacka",
    description: "Emaitzak ikasle, irakasle eta familientzat."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-beige">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nola funtzionatzen du ISAPPek?
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-5">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-md">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-primary rounded-full flex items-center justify-center font-bold text-sm text-primary">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;