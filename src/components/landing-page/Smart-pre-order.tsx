import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronUp } from "lucide-react"

export default function SmartPreOrderSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque'}}>
          This isn't just a chatbot—it's smart pre-order intelligence
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Bricolage Grotesque'}}>
          Customers don't just ask what — they ask
          <br />
          how, if, can, should, and why.
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          GetFork understands the 5 real types of questions people ask before ordering—and answers them with intelligence,
          empathy, and precision.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Row 1 - First card small, second card long */}
        <div className="h-[350px]"> {/* Small height */}
          <Card className="bg-[#FFF2D7] border-none h-full">
            <CardHeader className="flex flex-row justify-between items-start pb-4">
              <div>
                <h4 className="text-xl font-bold text-[#7A5400]">
                  Basic Info
                  <br />
                  (Surface)
                </h4>
              </div>
              <div className="bg-[#FFCC4D] w-10 h-10 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    stroke="#8B6B0B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9 18h6" stroke="#8B6B0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 22h4" stroke="#8B6B0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-xl">
                  <p className="font-semibold text-left text-sm">Is your chicken halal?</p>
                </div>
                <div className="bg-white p-3 rounded-xl">
                  <p className="font-semibold text-left text-sm">Do you offer delivery?</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl mb-4">
                <p className="font-semibold text-left text-sm">What time does the restaurant close?</p>
              </div>

              <div className="bg-white bg-opacity-50 p-2 rounded-xl text-xs text-center mb-4">
                <p>Factual answers from your menu</p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-white">Fast</Badge>
                <Badge variant="secondary" className="bg-white">Hours</Badge>
                <Badge variant="secondary" className="bg-white">Policies</Badge>
                <Badge variant="secondary" className="bg-white">Drives trust</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="h-[450px]"> {/* Long height */}
          <Card className="bg-[#C6D8FF] border-none h-full">
            <CardHeader className="pb-4">
              <h4 className="text-xl font-bold text-[#0C1937]">
                Clarifying Needs
                <br />
                (Filtered Info)
              </h4>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-sm mb-2">
                  Smart filtering using category, ingredients, or custom tags.
                  <br />
                  Reduces friction. Increases cart value.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Set Category</p>
                <div className="bg-white rounded-xl p-3 flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Create or Search Category Name</span>
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white flex items-center gap-1">
                  Burger <span className="text-muted-foreground">×</span>
                </Badge>
                <Badge variant="secondary" className="bg-white flex items-center gap-1 transform rotate-6 translate-y-1">
                  Sausage <span className="text-muted-foreground">×</span>
                </Badge>
              </div>

              <div className="mb-2">
                <p className="text-sm font-medium mb-2">Set Modifier</p>
              </div>

              <div className="bg-white rounded-xl p-3">
                <span className="text-muted-foreground text-sm">Select Category or Items</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 2 - First card long, second card small */}
        <div className="h-[390px]"> {/* Long height */}
          <Card className="bg-[#FFE0F8] border-none h-full -mt-22">
            <CardHeader className="pb-4">
              <h4 className="text-xl font-bold text-[#CC009E]">
                Preferences &
                <br />
                Conditions
              </h4>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-3 rounded-xl">
                  <p className="font-semibold text-left text-sm">I'm gluten-free and want something spicy.</p>
                </div>
                <div className="bg-white p-3 rounded-xl">
                  <p className="font-semibold text-left text-sm">I prefer high-protein meals under 500 calories.</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl mb-6">
                <p className="text-center text-sm">Understands layered conditions and suggests matching items.</p>
              </div>

              <div className="relative h-12">
                <Badge variant="secondary" className="absolute left-0 bottom-0 transform -rotate-6 bg-white">
                  Delivers relevant
                </Badge>
                <Badge variant="secondary" className="absolute right-0 bottom-0 transform rotate-6 bg-white whitespace-nowrap">
                  Personalized recommendations
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="h-[300px]"> {/* Small height */}
          <Card className="bg-[#D7F4E4] border-none h-full">
            <CardHeader className="pb-4">
              <h4 className="text-xl font-bold text-[#003421]">
                Planning &
                <br />
                Multi-Intent
              </h4>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-3 rounded-xl">
                  <p className="font-semibold text-left text-sm">Can I book a vegan dinner for 6 on Friday?</p>
                </div>
                <div className="bg-white p-3 rounded-xl">
                  <p className="font-semibold text-left text-sm">Can I order a family meal for pickup tomorrow night?</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <Badge variant="secondary" className="bg-white transform -rotate-3">Timing</Badge>
                <Badge variant="secondary" className="bg-white transform rotate-3">Dietary Needs</Badge>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-white transform -rotate-2">Handles Guest Count</Badge>
                <Badge variant="secondary" className="bg-white transform rotate-2 text-center">
                  <span className="text-[10px]">
                    Captures high-value,
                    <br />
                    planned engagements
                  </span>
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 3 - Fifth card horizontally placed */}
        <div className="col-span-2 h-[220px] -mt-22">
  <Card className="bg-[#FFF1F1] border-none h-[180px] overflow-hidden relative">
    <CardHeader className="pb-2 pt-4 px-6">
      <h4 className="text-xl font-bold text-[#7F1D1D]">Emotional & Narrative</h4>
    </CardHeader>
    <CardContent className="px-6 pb-4">
      <div className="w-1/2">
        <p className="text-sm text-[#7F1D1D] mb-2">I got sick last time - anything mild today?</p>
        <p className="text-sm text-[#7F1D1D]">It's my anniversary - what's special on the menu?</p>
      </div>

      {/* Floating badges with non-overlapping positions */}
      <Badge
        variant="secondary"
        className="absolute top-12 right-32 bg-white text-[#7F1D1D] font-normal px-3 py-1 shadow-sm"
      >
        Applies Empathy
      </Badge>
      <Badge
        variant="secondary"
        className="absolute top-12 right-6 bg-white text-[#7F1D1D] font-normal px-3 py-1 shadow-sm"
      >
        Sentiment
      </Badge>
      <Badge
        variant="secondary"
        className="absolute top-24 right-20 bg-white text-[#7F1D1D] font-normal px-3 py-1 shadow-sm"
      >
        Context Memory
      </Badge>
      <Badge
        variant="secondary"
        className="absolute bottom-10 right-40 bg-white text-[#7F1D1D] font-normal px-3 py-1 shadow-sm"
      >
        Builds Trust
      </Badge>
      <Badge
        variant="secondary"
        className="absolute bottom-10 left-180 bg-white text-[#7F1D1D] font-normal px-3 py-1 shadow-sm whitespace-nowrap"
      >
        Emotional Connection
      </Badge>
    </CardContent>
  </Card>
</div>
      </div>
    </section>
  )
}