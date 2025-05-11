import { useEffect, useRef } from "react"
import fullcast from '../../assets/landing/fullCast.png'
import stan from '../../assets/landing/Stanford.png'
import Rob from '../../assets/landing/Rob.png'
import clossus from '../../assets/landing/Colossus.png'
import locked from '../../assets/landing/LockedOn.png'
import { cn } from "@/lib/utils"

export default function TrustedBySection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run the animation logic on desktop
    if (window.innerWidth >= 768) {
      const slider = sliderRef.current
      if (!slider) return

      const sliderContent = Array.from(slider.children)
      sliderContent.forEach((item) => {
        const clone = item.cloneNode(true)
        slider.appendChild(clone)
      })
    }
  }, [])

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-center text-muted-foreground mb-8">
          Trusted by the best in the business
        </h2>

        {/* Mobile Grid - Only shows original 5 logos */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-8 justify-items-center">
            <div>
              <img src={Rob} alt="ROB" className="object-contain h-12 mx-auto" />
            </div>
            <div>
              <img src={stan} alt="Stanford" className="object-contain h-12 mx-auto" />
            </div>
            <div>
              <img src={locked} alt="Locked On" className="object-contain h-12 mx-auto" />
            </div>
            <div>
              <img src={clossus} alt="Colossus" className="object-contain h-12 mx-auto" />
            </div>
            <div className="col-span-2">
              <img src={fullcast} alt="FullCast" className="object-contain h-12 mx-auto" />
            </div>
          </div>
        </div>

        {/* Desktop Slider - Only shown on desktop */}
        <div className="hidden md:block relative">
          <div
            ref={sliderRef}
            className={cn(
              "flex items-center gap-16",
              "animate-[slider_20s_linear_infinite]"
            )}
          >
            {/* Original 5 logos only - clones are added by useEffect */}
            <div className="flex-shrink-0">
              <img src={Rob} alt="ROB" className="object-contain h-12" />
            </div>
            <div className="flex-shrink-0">
              <img src={stan} alt="Stanford" className="object-contain h-12" />
            </div>
            <div className="flex-shrink-0">
              <img src={locked} alt="Locked On" className="object-contain h-12" />
            </div>
            <div className="flex-shrink-0">
              <img src={clossus} alt="Colossus" className="object-contain h-12" />
            </div>
            <div className="flex-shrink-0">
              <img src={fullcast} alt="FullCast" className="object-contain h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}