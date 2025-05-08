import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronUp } from "lucide-react"

export default function SmartPreOrderSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque'}}>
          This isn't just a chatbot—it's smart pre-order intelligence
        </h2>
        <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Bricolage Grotesque'}}>
          Customers don't just ask what — they ask how, if, can, should, and why.
        </h3>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          GetFork understands the 5 real types of questions people ask before ordering—and answers them with intelligence,
          empathy, and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Row 1 - Stacked on mobile */}
        <div className="h-auto md:h-[350px]">
          <Card className="bg-[#FFF2D7] border-none h-full">
            <CardHeader className="flex flex-row justify-between items-start pb-3 md:pb-4">
              <div>
                <h4 className="text-lg md:text-xl font-bold text-[#7A5400]">
                  Basic Info (Surface)
                </h4>
              </div>
              <div className="bg-[#FFCC4D] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl">
                  <p className="font-semibold text-left text-xs md:text-sm">Is your chicken halal?</p>
                </div>
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl">
                  <p className="font-semibold text-left text-xs md:text-sm">Do you offer delivery?</p>
                </div>
              </div>

              <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl mb-3 md:mb-4">
                <p className="font-semibold text-left text-xs md:text-sm">What time does the restaurant close?</p>
              </div>

              <div className="bg-white bg-opacity-50 p-1 md:p-2 rounded-lg md:rounded-xl text-xs text-center mb-3 md:mb-4">
                <p>Factual answers from your menu</p>
              </div>

              <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                <Badge variant="secondary" className="bg-white text-xs">Fast</Badge>
                <Badge variant="secondary" className="bg-white text-xs">Hours</Badge>
                <Badge variant="secondary" className="bg-white text-xs">Policies</Badge>
                <Badge variant="secondary" className="bg-white text-xs">Drives trust</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="h-auto md:h-[450px]">
          <Card className="bg-[#C6D8FF] border-none h-full">
            <CardHeader className="pb-3 md:pb-4">
              <h4 className="text-lg md:text-xl font-bold text-[#0C1937]">
                Clarifying Needs (Filtered Info)
              </h4>
            </CardHeader>
            <CardContent>
              <div className="mb-4 md:mb-6">
                <p className="text-xs md:text-sm mb-2">
                  Smart filtering using category, ingredients, or custom tags.
                  Reduces friction. Increases cart value.
                </p>
              </div>

              <div className="mb-3 md:mb-4">
                <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">Set Category</p>
                <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-3 flex justify-between items-center">
                  <span className="text-muted-foreground text-xs md:text-sm">Create or Search Category Name</span>
                  <ChevronUp className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                <Badge variant="secondary" className="bg-white flex items-center gap-1 text-xs">
                  Burger <span className="text-muted-foreground">×</span>
                </Badge>
                <Badge variant="secondary" className="bg-white flex items-center gap-1 text-xs md:transform md:rotate-6 md:translate-y-1">
                  Sausage <span className="text-muted-foreground">×</span>
                </Badge>
              </div>

              <div className="mb-1 md:mb-2">
                <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">Set Modifier</p>
              </div>

              <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-3">
                <span className="text-muted-foreground text-xs md:text-sm">Select Category or Items</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 2 - Stacked on mobile */}
        <div className="h-auto md:h-[390px]">
          <Card className="bg-[#FFE0F8] border-none h-full md:-mt-22">
            <CardHeader className="pb-3 md:pb-4">
              <h4 className="text-lg md:text-xl font-bold text-[#CC009E]">
                Preferences & Conditions
              </h4>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl">
                  <p className="font-semibold text-left text-xs md:text-sm">I'm gluten-free and want something spicy.</p>
                </div>
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl">
                  <p className="font-semibold text-left text-xs md:text-sm">I prefer high-protein meals under 500 calories.</p>
                </div>
              </div>

              <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl mb-4 md:mb-6">
                <p className="text-center text-xs md:text-sm">Understands layered conditions and suggests matching items.</p>
              </div>

              <div className="relative h-8 md:h-12">
                <Badge variant="secondary" className="absolute left-0 bottom-0 bg-white text-xs md:text-sm md:-rotate-6">
                  Delivers relevant
                </Badge>
                <Badge variant="secondary" className="absolute right-0 bottom-0 bg-white text-xs md:text-sm md:rotate-6 whitespace-nowrap">
                  Personalized
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="h-auto md:h-[300px]">
          <Card className="bg-[#D7F4E4] border-none h-full">
            <CardHeader className="pb-3 md:pb-4">
              <h4 className="text-lg md:text-xl font-bold text-[#003421]">
                Planning & Multi-Intent
              </h4>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl">
                  <p className="font-semibold text-left text-xs md:text-sm">Can I book a vegan dinner for 6 on Friday?</p>
                </div>
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl">
                  <p className="font-semibold text-left text-xs md:text-sm">Can I order a family meal for pickup tomorrow night?</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 md:gap-2 justify-center mb-3 md:mb-4">
                <Badge variant="secondary" className="bg-white text-xs md:text-sm md:-rotate-3">Timing</Badge>
                <Badge variant="secondary" className="bg-white text-xs md:text-sm md:rotate-3">Dietary Needs</Badge>
              </div>

              <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                <Badge variant="secondary" className="bg-white text-xs md:text-sm md:-rotate-2">Guest Count</Badge>
                <Badge variant="secondary" className="bg-white text-xs md:text-sm md:rotate-2 text-center">
                  <span className="text-[8px] md:text-[10px]">
                    Captures high-value, planned engagements
                  </span>
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 3 - Full width on all screens */}
        <div className="col-span-1 md:col-span-2 h-auto md:h-[220px] md:-mt-22">
          <Card className="bg-[#FFF1F1] border-none h-[160px] md:h-[180px] overflow-hidden relative">
            <CardHeader className="pb-1 md:pb-2 pt-3 md:pt-4 px-4 md:px-6">
              <h4 className="text-lg md:text-xl font-bold text-[#7F1D1D]">Emotional & Narrative</h4>
            </CardHeader>
            <CardContent className="px-4 md:px-6 pb-3 md:pb-4">
              <div className="w-full md:w-1/2">
                <p className="text-xs md:text-sm text-[#7F1D1D] mb-1 md:mb-2">I got sick last time - anything mild today?</p>
                <p className="text-xs md:text-sm text-[#7F1D1D]">It's my anniversary - what's special on the menu?</p>
              </div>

              {/* Floating badges - adjusted for mobile */}
              <Badge variant="secondary" className="absolute top-10 right-4 md:right-32 bg-white text-[#7F1D1D] font-normal px-2 py-0.5 md:px-3 md:py-1 text-xs shadow-sm">
                Empathy
              </Badge>
              <Badge variant="secondary" className="absolute top-20 right-4 md:right-6 bg-white text-[#7F1D1D] font-normal px-2 py-0.5 md:px-3 md:py-1 text-xs shadow-sm">
                Sentiment
              </Badge>
              <Badge variant="secondary" className="absolute bottom-6 left-200 md:right-20 bg-white text-[#7F1D1D] font-normal px-2 py-0.5 md:px-3 md:py-1 text-xs shadow-sm">
                Context
              </Badge>
              <Badge variant="secondary" className="absolute bottom-6 right-4 md:right-40 bg-white text-[#7F1D1D] font-normal px-2 py-0.5 md:px-3 md:py-1 text-xs shadow-sm">
                Trust
              </Badge>
              <Badge variant="secondary" className="absolute top-10 left-200 md:left-200 bg-white text-[#7F1D1D] font-normal px-2 py-0.5 md:px-3 md:py-1 text-xs shadow-sm whitespace-nowrap">
                Connection
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}