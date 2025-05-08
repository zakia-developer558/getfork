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
    const slider = sliderRef.current
    if (!slider) return

    // Clone the slider content for seamless infinite scrolling
    const sliderContent = Array.from(slider.children)
    sliderContent.forEach((item) => {
      const clone = item.cloneNode(true)
      slider.appendChild(clone)
    })
  }, [])

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-center text-muted-foreground mb-8">
          Trusted by the best in the business
        </h2>

        <div className="relative">
          <div
            ref={sliderRef}
            className={cn(
              "flex items-center gap-16",
              "animate-[slider_20s_linear_infinite]"
            )}
          >
            <div className="flex-shrink-0">
              <img
                src={Rob}
                alt="ROB"
                width={120}
                height={60}
                className="object-contain h-12"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src={stan}
                width={120}
                height={60}
                className="object-contain h-12"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src={locked}
                alt="Locked On"
                width={120}
                height={60}
                className="object-contain h-12"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src={clossus}
                alt="Colossus"
                width={120}
                height={60}
                className="object-contain h-12"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src={fullcast}
                alt="FullCast"
                width={120}
                height={60}
                className="object-contain h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}