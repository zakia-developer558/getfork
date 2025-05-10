"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import GetForkModal from "./Get-fork"
import fork from '../../assets/landing/fork.png'
import sendButton from '../../assets/landing/Button.png'


export default function HowItWorksSection() {
  const [inputText, setInputText] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSendClick = () => {
    if (inputText.trim()) {
      setIsModalOpen(true)
    }
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 text-center -mt-22">
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Bricolage Grotesque" }}>
        See How It Guides Customers
        <br />
        Before They Order
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        This is where the magic happens. The smart assistant lives right on your menu—ready to answer questions, filter
        dishes, and guide undecided customers to the perfect choice. It feels like personalized service, without lifting
        a finger. Try asking it what's gluten-free, what's spicy, or what's light for someone feeling unwell—just like
        your real customers would.
      </p>
      <Card className="bg-white rounded-3xl shadow-md p-4 max-w-xl mx-auto border-0">
        <CardContent className="p-2">
          <div className="flex items-center justify-center gap-1 mb-4">
            <Button className="rounded-full text-sm bg-black text-white hover:bg-black/90 px-4 py-2 h-auto font-medium">
              Search – Vegan, Halal, Spicy, etc
            </Button>
            <Button className="rounded-full text-sm bg-black text-white hover:bg-black/90 px-4 py-2 h-auto font-medium">
              We'll find it!
            </Button>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center justify-center">

              <img
              src={fork}
              />
            </div>

            <div className="flex-1 relative">
              <div className="bg-white rounded-full border border-gray-200 shadow-sm flex items-center p-1 pl-4 pr-2">
                <Input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-1 text-sm"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && inputText.trim()) {
                      handleSendClick()
                    }
                  }}
                />
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M4.35 9.65V11.5C4.35 15.57 7.43 19 12 19C16.57 19 19.65 15.57 19.65 11.5V9.65"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={handleSendClick}>
                    <img 
                    src={sendButton}
                    />
 
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GetFork Modal */}
      <GetForkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} userQuery={inputText} />
    </section>
  )
}
