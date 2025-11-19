import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/98 backdrop-blur-sm border-b border-border/50 z-50">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg">
            I
          </div>
          <span className="text-xl font-bold text-foreground">ISAPP</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#hasiera" className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm">
            Hasiera
          </a>
          <a href="#ezaugarriak" className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm">
            Ezaugarriak
          </a>
          <a href="#harremana" className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm">
            Harremana
          </a>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2.5 font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Proba ezazu ISAPP
          </Button>
        </div>
        
        <Button className="md:hidden bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-2 font-semibold text-sm">
          Proba
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;