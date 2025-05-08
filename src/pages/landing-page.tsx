import BenefitsSection from "@/components/landing-page/Benefits-section"
import CTASection from "@/components/landing-page/Cta-section"
import CustomerQuestionsSection from "@/components/landing-page/Customer-questions"
import DietaryFiltersSection from "@/components/landing-page/dietry-options"
import FaqSection from "@/components/landing-page/faq-section"
import GuidanceSection from "@/components/landing-page/Guidance-section"
import HeroSection from "@/components/landing-page/Hero"
import HowItWorksSection from "@/components/landing-page/How-it-works"
import PricingSection from "@/components/landing-page/Pricing-section"
import SmartPreOrderSection from "@/components/landing-page/Smart-pre-order"
import TrustedBySection from "@/components/landing-page/Trusted-by-section"

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <TrustedBySection/>
      <SmartPreOrderSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CustomerQuestionsSection />
      <DietaryFiltersSection />
      <GuidanceSection />
      <PricingSection />
      <FaqSection />
      <CTASection />
      
      
      {/* <HowItWorksSection />
      <SmartPreOrderSection />
      <BenefitsSection />
      <CustomerQuestionsSection /> */} 
    </main>
  )
}
