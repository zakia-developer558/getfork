import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Bot, Zap, ChartLine, Target, Settings , Rocket } from "lucide-react"

export default function GuidanceSection() {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Always-On Dietary Assistant",
      description: "Answer customer questions 24/7—whether it's about gluten-free, halal, keto, or vegan options. GetFork helps diners order with confidence, without tying up your staff."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Boost Conversions by Up to 18%",
      description: "Diners are more likely to complete their orders when their dietary concerns are addressed. GetFork removes hesitation and turns browsers into buyers."
    },
    {
      icon: <ChartLine className="h-6 w-6" />,
      title: "Capture Insights in Real Time",
      description: "Every question tells you what customers care about. Discover what they're searching for—diet types, allergens, trends—and use that data to improve your menu and marketing."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Hyper-Personalized Promotions",
      description: "Turn preferences into promotions. Send smart, targeted offers and loyalty rewards based on each customer's dietary profile and behavior."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Works With Any Ordering System",
      description: "No need to rip and replace. GetFork integrates seamlessly with platforms like Cloud Waitress, Toast, Square, GloriaFood, and more—no coding required."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Setup, Zero Downtime",
      description: "Be up and running in minutes. Just drop in our widget—no developers, no disruption. Start capturing more value from every visit instantly."
    }
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Bricolage Grotesque'}}>Curious how it works?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Try the GetFork AI assistant live below—ask a question just like your customers would. Experience how easy it
            is to turn dietary questions into confident orders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-muted/50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}