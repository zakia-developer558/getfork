import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Experience basic AI assistance for your website.",
      features: [
        "Limited AI visitor interactions",
        "No hyper-personalized microcopy generated",
        "Email support"
      ],
      cta: "Start for Free"
    },
    {
      name: "PRO",
      price: "$300",
      period: "/month",
      description: "Enhanced AI engagement for converting more visitors.",
      features: [
        "Full AI visitor interactions",
        "Lead qualification & capture",
        "Basic analytics",
        "AI Models: GPT-4.1, Deepseek V3",
        "Basic support"
      ],
      cta: "Get Started"
    }
  ]

  return (
    <section className="w-full py-16 md:py-24 px-4 -mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Bricolage Grotesque'}}>Pricing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-[18px]">
            Power up your website with AI-driven engagement—choose a  <br/> plan that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
           <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
  <CardHeader>
    <CardTitle className="text-xl">{plan.name}</CardTitle>
    <div className="flex items-baseline">
      <span className="text-4xl font-bold">{plan.price}</span>
      <span className="text-muted-foreground ml-1">{plan.period}</span>
    </div>
    <p className="text-muted-foreground mt-2">{plan.description}</p>
  </CardHeader>

  <CardContent className="flex flex-col flex-1 justify-between">
    <div className="space-y-4 mb-8">
      {plan.features.map((feature, featureIndex) => (
        <div key={featureIndex} className="flex items-start">
          <CheckCircle className="h-5 w-5 text-[#FF6B1E] mt-0.5 flex-shrink-0" />
          <span className="ml-3">{feature}</span>
        </div>
      ))}
    </div>

    <Button className="w-full bg-[#FF6B1E] hover:bg-[#FF6B1E]/90 mt-auto">
      {plan.cta}
    </Button>
  </CardContent>
</Card>

          ))}
        </div>
      </div>
    </section>
  )
}