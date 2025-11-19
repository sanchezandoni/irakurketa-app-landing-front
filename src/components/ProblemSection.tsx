import { BookOpen } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 bg-lavender">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Irakurketaren erronka.
            </h2>
            
            <p className="text-lg text-foreground/70 leading-relaxed font-normal">
              Euskal ikasleen irakurketa maila jaisten ari da. ISAPPek esperientzia pertsonalizatu eta dibertigarria eskaintzen du erronka horri aurre egiteko.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md bg-white/50 rounded-3xl p-12 flex items-center justify-center">
              <BookOpen className="w-32 h-32 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;