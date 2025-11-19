import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mari-reading.jpg";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hasiera" className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-hero-start to-hero-end relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Irakurketarako aplikazio berritzailea</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1]">
              Irakurketa dibertigarri bihurtzen dugu!
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-normal max-w-xl">
              ISAPP ikasleen irakurketa motibazioa pizten du euskaraz, gamifikazioa eta ahotsaren analisia erabiliz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Proba ezazu ISAPP
              </Button>
              <Button variant="outline" className="border-2 border-border hover:border-primary hover:bg-secondary text-foreground rounded-full px-8 py-6 text-base font-semibold hover:-translate-y-1 transition-all">
                Ikusi bideoa
              </Button>
            </div>
            
            <p className="text-sm text-foreground/50 font-medium pt-4">
              320k+ haurrek ikasi dute gure metodoarekin.
            </p>
          </div>
          
          <div className="relative">
            <div className="floating">
              <img 
                src={heroImage} 
                alt="ISAPP aplikazioaren aurrebista" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;