import { Sparkles, Brain, Clock, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    text: "Irakurketa eta ariketa motibagarriak eta dibertigarriak."
  },
  {
    icon: Brain,
    text: "Neuroheziketan eta gamifikazioan oinarritutako metodologia."
  },
  {
    icon: Clock,
    text: "Ikasle bakoitzak bere erritmoan ikasten du, presiorik gabe."
  },
  {
    icon: TrendingUp,
    text: "Aurrerapenaren jarraipena irakasle eta familientzat."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Abantailak
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-5"
            >
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-base text-foreground/70 font-normal leading-relaxed pt-1">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;