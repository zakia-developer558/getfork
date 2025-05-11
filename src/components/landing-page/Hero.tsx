import hero from "../../assets/landing/hero.png";

const HeroSection = () => {
  return (
    <section 
      className="w-full min-h-[90vh] max-w-6xl mx-auto px-4 text-center relative overflow-hidden"
      style={{ paddingTop: 'clamp(40px, 15vh, 255px)'}}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {/* Text Content */}
        <div className="mb-4 md:mb-6 lg:mb-8 w-full">
          <h1 
            className="mx-auto"
            style={{
              fontFamily: 'Bricolage Grotesque',
              fontWeight: 700,
              fontSize: 'clamp(36px, 8vw, 72px)',
              lineHeight: 'clamp(40px, 8vw, 72px)',
              letterSpacing: '0px',
              textAlign: 'center',
              marginBottom: '1rem'
            }}
          >
            <div>Before They Order, Most Customers Get Stuck.</div>
            
          </h1>
          <p 
  className="inline-block w-[92%] md:w-[64%] mx-auto whitespace-normal"
  style={{
    fontFamily: 'Bricolage Grotesque',
    fontWeight: 400,
    fontSize: 'clamp(14px, 2vw, 18px)',
    lineHeight: 'clamp(20px, 3vw, 28px)',
    color: '#4B5563'
  }}
>
79% feel overwhelmed at the decision point. A smart assistant provides the answers and clarity needed to boost conversations—right at the pre-order stage.
</p>
 
        </div>
        
        {/* Hero Image */}
        <div className="w-full max-w-2xl mx-auto mt-2 md:mt-4 lg:mt-8 px-2">
          <img
            src={hero}
            alt="Mobile phone showing AI assistant chat interface"
            className="mx-auto w-full h-auto object-contain"
            style={{
              maxHeight: '60vh'
            }}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;