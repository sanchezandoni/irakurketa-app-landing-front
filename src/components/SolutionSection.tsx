import { User, Trophy, Globe, MessageSquare } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Pertsonalizatua",
    description: "Ikasle bakoitzaren erritmoari eta mailari egokitutako irakurketak.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Trophy,
    title: "Motibatzailea",
    description: "Gamifikazioan eta sari-sisteman oinarrituta, irakurtzea jolas bihurtzen du.",
    color: "bg-secondary/10 text-secondary-foreground"
  },
  {
    icon: Globe,
    title: "Euskalduna",
    description: "Euskal kultura eta hizkuntza ardatz dituen tresna.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: MessageSquare,
    title: "Lagungarria",
    description: "Feedback automatikoa ikasle, irakasle eta familientzat.",
    color: "bg-secondary/10 text-secondary-foreground"
  }
];

const SolutionSection = () => {
  return (
    <section id="ezaugarriak" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Zergatik ISAPP?
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all space-y-4"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;