import childrenReading from "@/assets/children-reading-outdoors.jpg";

const ImpactSection = () => {
  return (
    <section className="py-24 bg-green-pastel relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={childrenReading} 
          alt="Haurrak kanpoan irakurtzen" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ekarpenak
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p className="font-normal">
              ISAPP euskarazko irakurketaren hobekuntza bermatzen duen tresna da.
              Irakurtzea bizipen positibo bihurtzen du eta euskal kulturaren transmisioa sendotzen du.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;