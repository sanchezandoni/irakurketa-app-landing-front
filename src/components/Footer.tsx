const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg">
                  I
                </div>
                <span className="text-xl font-bold text-foreground">ISAPP</span>
              </div>
              <p className="text-sm text-foreground/60">
                Irakurtzeko grina pizten
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-foreground/70 items-start justify-center">
              <a href="#laguntza" className="hover:text-primary transition-colors">
                Laguntza
              </a>
              <a href="#harremana" className="hover:text-primary transition-colors">
                Harremana
              </a>
              <a href="#pribatutasuna" className="hover:text-primary transition-colors">
                Pribatutasuna
              </a>
            </div>
            
            <div className="flex gap-4 justify-end items-start">
              <a href="#" className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                <span className="text-xs text-primary font-semibold">f</span>
              </a>
              <a href="#" className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                <span className="text-xs text-primary font-semibold">in</span>
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50">
            <p className="text-foreground/50 text-xs text-center">
              © 2025 ISAPP – Hezkuntza berritzailea euskaraz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;