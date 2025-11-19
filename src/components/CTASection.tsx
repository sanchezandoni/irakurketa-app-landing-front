import { Button } from "@/components/ui/button";
import mariWaving from "@/assets/mari-waving.jpg";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Prest al zaudete gure ikasleen irakurketaren grina pizteko?
            </h2>
            
            <p className="text-xl text-foreground/70 font-normal leading-relaxed max-w-2xl mx-auto">
              ISAPPekin irakurketaren magia piztu dezagun elkarrekin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                Probatu orain
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-border hover:border-primary hover:bg-secondary text-foreground rounded-full px-8 py-6 text-lg font-semibold hover:-translate-y-1 transition-all">
                Hasi doan
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="floating">
              <img 
                src={mariWaving} 
                alt="Mari agurtzen liburua eskuan" 
                className="w-full max-w-md rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;