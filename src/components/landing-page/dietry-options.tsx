import { Badge } from "@/components/ui/badge";
import vector from '../../assets/landing/vector.png'
import dietry from '../../assets/landing/dietry.png'

export default function DietaryFiltersSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 -mt-22">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Logo */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 border-2 border-gray-800 rounded-full flex items-center justify-center">
          <img 
          src={dietry}
          />
            </div>
          </div>

          <div className="flex-shrink-0 mx-2">
            <img
              src={vector}
              alt="Wavy Arrow"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Dietary Tags Container */}
          <div className="flex flex-col items-center w-full sm:w-auto">
            {/* Top Row */}
            <div className="flex flex-wrap justify-center gap-2">
              {["Halal", "Vegan", "Keto", "Gluten-Free", "Low-Carb"].map((tag) => (
                <Badge key={tag} className="bg-[#FF6B1E] text-white px-6 py-2 rounded-[33.39px] text-[18px] py-[7.79px] px-[35.62px]">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {["Sugar-Free", "Organic", "Vegetarian", "High-Protein"].map((tag) => (
                <Badge key={tag} className="bg-[#FF6B1E] text-white px-6 py-2 rounded-[33.39px] text-[18px] py-[7.79px] px-[35.62px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}