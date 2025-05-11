import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  ChevronUpIcon, X } from "lucide-react"
import bulb from '../../assets/landing/Group 30189.png'

export default function SmartPreOrderSection() {
  return (
    <>
      {/* DESKTOP VERSION - 100% UNCHANGED */}
      <div className="hidden md:block">
        <section className="w-full max-w-6xl mx-auto px-4 py-24">
          <div 
            className="text-center mb-12 mx-auto"
            style={{ width: '896px', height: '145.02px' }}
          >
            <h3 className="mb-4" style={{ fontFamily: 'Bricolage Grotesque', fontWeight: 700, fontSize: '34px', lineHeight: '40px', textAlign: 'center' }}>
              This isn't just a chatbot—it's smart pre-order intelligence
            
              Customers don't just ask what — they ask 

              how, if, can, should, and why.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GetFork understands the 5 real types of questions people ask before ordering—and answers them with intelligence,
              empathy, and precision.
            </p>
          </div>

          <div 
            className="grid grid-cols-2 gap-y-8 gap-x-4 mx-auto"
            style={{ width: 'fit-content', paddingTop: '100px' }}
          >
            {/* First Card */}
            <div style={{ width: '486px', height: '500px' }}>
              <Card className="bg-[#FFF2D7] border border-gray-200 h-full" style={{ borderRadius: '36px' }}>
                <CardHeader className="flex flex-row justify-between items-start p-6">
                  <div>
                    <h4 className="text-[36px] font-black leading-[39px] text-[#7A5400]" style={{ fontFamily: 'SF Pro Text' }}>
                      Basic Info <br />(Surface)
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <img src={bulb} alt="Bulb icon" className="w-full h-auto"/>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-xl p-4 h-[96px] flex items-center">
                      <p style={{ fontFamily: 'SF Pro Text', fontWeight: 900, fontSize: '17px', lineHeight: '24px' }}>
                        Is your chicken halal?
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 h-[96px] flex items-center">
                      <p style={{ fontFamily: 'SF Pro Text', fontWeight: 900, fontSize: '17px', lineHeight: '24px' }}>
                        Do you offer delivery?
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl h-[72px] flex items-center px-4 mb-4">
                    <p style={{ fontFamily: 'SF Pro Text', fontWeight: 900, fontSize: '17px', lineHeight: '24px' }}>
                      What time does the restaurant close?
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-50 rounded-xl h-[41.84px] flex items-center justify-center mb-4 mx-auto" style={{ width: '298.68px' }}>
                    <p style={{ fontFamily: 'SF Pro Text', fontWeight: 500, fontSize: '15px', lineHeight: '18.19px' }}>
                      Factual answers from your menu
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Fast', 'Hours', 'Policies', 'Drives trust'].map((text) => (
                      <Badge 
                        key={text}
                        variant="secondary" 
                        className="bg-white"
                        style={{
                          fontFamily: 'SF Pro Text',
                          fontWeight: 500,
                          fontSize: '14.55px',
                          lineHeight: '18.19px',
                          borderRadius: '27.29px',
                          padding: '11.83px 25px'
                        }}
                      >
                        {text}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second Card */}
            <div style={{ width: '486px', height: '628px' }}>
              <Card className="bg-[#C6D8FF] border border-gray-200 h-full" style={{ borderRadius: '36px' }}>
                <CardHeader className="p-6 pb-3">
                  <h4 className="text-[36px] font-black leading-[39px] text-[#0C1937]" style={{ fontFamily: 'SF Pro Text' }}>
                    Clarifying Needs <br />(Filtered Info)
                  </h4>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-[18px] font-normal mb-6">
                    Smart filtering using category, ingredients, or custom tags. Reduces friction. Increases cart value.
                  </p>
                  <p className="text-[16px] font-medium mb-2">Set Category</p>
                  <div className="bg-white rounded-xl h-[54px] p-3 flex justify-between items-center mb-4">
                    <span className="text-muted-foreground text-sm">Create or Search Category Name</span>
                    <ChevronUpIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-white flex items-center gap-1 rounded-[8.61px] text-[15.06px] py-[10.76px] px-[13.98px]">
                      Burger <X className="h-3 w-3 text-muted-foreground" />
                    </Badge>
                    <Badge variant="secondary" className="bg-white flex items-center gap-1 text-[15.06px] py-[10.76px] px-[13.98px] rounded-[8.61px] rotate-6 translate-y-1">
                      Sausage <X className="h-3 w-3 text-muted-foreground" />
                    </Badge>
                  </div>
                  <p className="text-[16px] font-medium mb-2">Set Modifier</p>
                  <div className="bg-white rounded-xl h-[54px] p-3 mt-6">
                    <span className="text-muted-foreground text-sm">Select Category or Items</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Third Card */}
            <div style={{ width: '486px', height: '530px' }}>
              <Card className="bg-[#FFE0F8] border border-gray-200 h-full -mt-35" style={{ borderRadius: '36px' }}>
                <CardHeader className="p-6 pb-3">
                  <h4 className="text-[36px] font-black leading-[39px] text-[#CC009E]" style={{ fontFamily: 'SF Pro Text' }}>
                    Preferences & <br /> Conditions
                  </h4>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white p-3 rounded-xl">
                      <p className="font-black text-left text-[17px]">I'm gluten-free and want something spicy.</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl">
                      <p className="font-black text-left text-[17px]">I prefer high-protein meals under 500 calories.</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl mb-6">
                    <p className="text-center text-[17px] font-black">Understands layered conditions and suggests matching items.</p>
                  </div>
                  <div className="relative h-12">
                    <Badge variant="secondary" className="absolute left-0 bottom-0 bg-white text-[14.55px] font-medium py-[11.31px] px-[31.84px] -rotate-6">
                      Delivers relevant
                    </Badge>
                    <Badge variant="secondary" className="absolute right-0 bottom-0 bg-white text-[14.55px] font-medium py-[11.31px] px-[31.84px] rotate-6 whitespace-nowrap">
                      Personalized
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fourth Card */}
            <div style={{ width: '486px', height: '415px' }}>
              <Card className="bg-[#D7F4E4] border border-gray-200 h-full -mt-[20px]" style={{ borderRadius: '36px' }}>
                <CardHeader className="p-6 pb-3">
                  <h4 className="text-[36px] font-black leading-[39px] text-[#003421]" style={{ fontFamily: 'SF Pro Text' }}>
                    Planning & <br />Multi-Intent
                  </h4>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white p-3 rounded-xl">
                      <p className="font-black text-left text-[17px]">Can I book a vegan dinner for 6 on Friday?</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl">
                      <p className="font-black text-left text-[17px]">Can I order a family meal for pickup tomorrow night?</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <Badge variant="secondary" className="bg-white text-[14.85px] font-medium py-[11.83px] px-[31.84px] -rotate-3">
                      Timing
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-[14.85px] font-medium py-[11.83px] px-[31.84px] rotate-3">
                      Dietary Needs
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-white text-[14.85px] font-medium py-[11.83px] px-[31.84px] -rotate-2">
                      Guest Count
                    </Badge>
                    <Badge variant="secondary" className="bg-white text-center">
                      <span className="text-[11.25px]">
                        Captures high-value, planned engagements
                      </span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fifth Card */}
            <div className="col-span-1 md:col-span-2 -mt-33" style={{ width: '994px', height: '194px' }}>
              <Card className="bg-[#FFF1F1] border border-gray-200 h-full w-full overflow-hidden relative" style={{ borderRadius: "36px" }}>
                <CardHeader className="p-6 pb-1">
                  <h4 className="text-[36px] font-black leading-[39px] text-[#741307]">Emotional & Narrative</h4>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="w-1/2">
                    <p className="text-[#7F1D1D] mb-2 text-[16px]">I got sick last time - anything mild today?</p>
                    <p className="text-[#7F1D1D] text-[16px]">It's my anniversary - what's special on the menu?</p>
                  </div>
                  <Badge variant="secondary" className="absolute top-6 right-32 bg-white text-[#7F1D1D] font-normal px-3 py-1 text-sm shadow-sm rounded-full">
                    Applies Empathy
                  </Badge>
                  <Badge variant="secondary" className="absolute top-6 right-6 bg-white text-[#7F1D1D] font-normal px-3 py-1 text-sm shadow-sm rounded-full">
                    Sentiment
                  </Badge>
                  <Badge variant="secondary" className="absolute bottom-6 right-32 bg-white text-[#7F1D1D] font-normal px-3 py-1 text-sm shadow-sm rounded-full">
                    Builds Trust
                  </Badge>
                  <Badge variant="secondary" className="absolute top-16 right-64 bg-white text-[#7F1D1D] font-normal px-3 py-1 text-sm shadow-sm rounded-full whitespace-nowrap">
                    Emotional Connection
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE VERSION - COMPLETE IMPLEMENTATION */}
      <div className="md:hidden px-4 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque' }}>
            This isn't just a chatbot—it's smart pre-order intelligence
          
            Customers don't just ask what — they ask
          
            how, if, can, should, and why.
          </h3>
          <p className="text-muted-foreground">
              GetFork understands the 5 real types of questions people ask before ordering—and answers them with intelligence,<br></br>
              empathy, and precision.          </p>
        </div>

        <div className="space-y-6">
          {/* Mobile Card 1 */}
          <Card className="bg-[#FFF2D7] rounded-3xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-2xl font-black text-[#7A5400]" style={{ fontFamily: 'SF Pro Text' }}>
                Basic Info (Surface)
              </h4>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
                <img src={bulb} alt="Bulb icon" className="w-5 h-5"/>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4">
                <p className="font-bold" style={{ fontFamily: 'SF Pro Text' }}>
                  Is your chicken halal?
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-bold" style={{ fontFamily: 'SF Pro Text' }}>
                  Do you offer delivery?
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-bold" style={{ fontFamily: 'SF Pro Text' }}>
                  What time does the restaurant close?
                </p>
              </div>
              <div className="bg-white bg-opacity-50 rounded-full py-2 px-4 text-center mx-auto max-w-xs">
                <p className="text-sm" style={{ fontFamily: 'SF Pro Text' }}>
                  Factual answers from your menu
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Fast', 'Hours', 'Policies', 'Trust'].map((text) => (
                  <Badge key={text} variant="secondary" className="bg-white text-xs">
                    {text}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Mobile Card 2 */}
          <Card className="bg-[#C6D8FF] rounded-3xl p-6">
            <h4 className="text-2xl font-black text-[#0C1937] mb-4" style={{ fontFamily: 'SF Pro Text' }}>
              Clarifying Needs (Filtered Info)
            </h4>
            <p className="mb-4">
              Smart filtering using category, ingredients, or custom tags.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-medium mb-1">Set Category</p>
                <div className="bg-white rounded-xl h-12 p-3 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Create or Search Category Name</span>
                  <ChevronUpIcon className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white flex items-center gap-1">
                  Burger <X className="h-3 w-3 text-gray-500" />
                </Badge>
                <Badge variant="secondary" className="bg-white flex items-center gap-1">
                  Sausage <X className="h-3 w-3 text-gray-500" />
                </Badge>
              </div>
              <div>
                <p className="font-medium mb-1">Set Modifier</p>
                <div className="bg-white rounded-xl h-12 p-3">
                  <span className="text-sm text-gray-500">Select Category or Items</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Mobile Card 3 */}
          <Card className="bg-[#FFE0F8] rounded-3xl p-6">
            <h4 className="text-2xl font-black text-[#CC009E] mb-4" style={{ fontFamily: 'SF Pro Text' }}>
              Preferences & Conditions
            </h4>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4">
                <p className="font-bold" style={{ fontFamily: 'SF Pro Text' }}>
                  I'm gluten-free and want something spicy.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-bold" style={{ fontFamily: 'SF Pro Text' }}>
                  I prefer high-protein meals under 500 calories.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="font-bold" style={{ fontFamily: 'SF Pro Text' }}>
                  Understands layered conditions
                </p>
              </div>
              <div className="flex justify-between">
                <Badge variant="secondary" className="bg-white">
                  Delivers relevant
                </Badge>
                <Badge variant="secondary" className="bg-white">
                  Personalized
                </Badge>
              </div>
            </div>
          </Card>

          {/* Mobile Card 4 */}
          <Card className="bg-[#D7F4E4] rounded-3xl p-6">
            <h4 className="text-2xl font-black text-[#003421] mb-4" style={{ fontFamily: 'SF Pro Text' }}>
              Planning & Multi-Intent
            </h4>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4">
                <p className="font-bold" style={{ fontFamily: 'SF Pro Text' }}>
                  Can I book a vegan dinner for 6 on Friday?
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-bold" style={{ fontFamily: 'SF Pro Text' }}>
                  Can I order a family meal for pickup tomorrow night?
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-white">
                  Timing
                </Badge>
                <Badge variant="secondary" className="bg-white">
                  Dietary Needs
                </Badge>
                <Badge variant="secondary" className="bg-white">
                  Guest Count
                </Badge>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="bg-white">
                  <span className="text-xs">
                    Captures high-value engagements
                  </span>
                </Badge>
              </div>
            </div>
          </Card>

          {/* Mobile Card 5 */}
          <Card className="bg-[#FFF1F1] rounded-3xl p-6 relative">
            <h4 className="text-2xl font-black text-[#741307] mb-4" style={{ fontFamily: 'SF Pro Text' }}>
              Emotional & Narrative
            </h4>
            <div className="space-y-3">
              <p className="text-[#7F1D1D]">I got sick last time - anything mild today?</p>
              <p className="text-[#7F1D1D]">It's my anniversary - what's special on the menu?</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary" className="bg-white text-[#7F1D1D]">
                Applies Empathy
              </Badge>
              <Badge variant="secondary" className="bg-white text-[#7F1D1D]">
                Sentiment
              </Badge>
              <Badge variant="secondary" className="bg-white text-[#7F1D1D]">
                Builds Trust
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}