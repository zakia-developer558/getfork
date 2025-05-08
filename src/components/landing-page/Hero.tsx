import hero from "../../assets/landing/hero.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[90vh] max-w-6xl mx-auto px-4 py-8 md:py-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-orange-200 rounded-full opacity-20 blur-xl md:blur-2xl transform -translate-y-1/4 translate-x-1/4"></div>
      

      <div className="flex flex-col items-center justify-center h-full">
        {/* Text Content */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 max-w-3xl mx-auto font-sans " style={{ fontFamily: 'Bricolage Grotesque'}}>
            Before They Order, Most Customers Get Stuck.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Bricolage Grotesque'}}> 
            79% feel overwhelmed at the decision point. A smart assistant provides the answers and clarity needed to boost
            conversations—right at the pre-order stage.
          </p>
        </div>
        
        {/* Hero Image - Responsive sizing */}
        <div className="w-full max-w-2xl mx-auto mt-4 md:mt-8">
          <img
            src={hero}
            alt="Mobile phone showing AI assistant chat interface"
            className="mx-auto w-full h-auto object-contain"
            style={{
              maxHeight: '60vh' // Limits image height while maintaining responsiveness
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;