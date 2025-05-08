import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Logo from "./logo"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-white to-white/80 backdrop-blur-sm">
      {/* Gradient circle - positioned relative to viewport */}
      
      {/* Main header container with max-width and proper centering */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Navigation links - hides on small screens */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-900 transition-colors hover:text-[#ff6b1e] whitespace-nowrap"
            >
              Home
            </Link>
            <Link 
              to="/terms-conditions" 
              className="text-sm font-medium text-gray-900 transition-colors hover:text-[#ff6b1e] whitespace-nowrap"
            >
              Terms and Conditions
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-gray-900 transition-colors hover:text-[#ff6b1e] whitespace-nowrap"
            >
              Contact Us
            </Link>
          </nav>
          
          {/* Auth buttons - ensures proper spacing on mobile */}
          <div className="flex items-center gap-4">
            <Link 
              to="#" 
              className="flex items-center text-sm font-medium text-gray-900 hover:text-[#ff6b1e] transition-colors whitespace-nowrap"
            >
              Log in
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Button className="bg-[#ff6b1e] hover:bg-[#eb5d25] text-white rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}