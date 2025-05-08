"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-white to-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />
          
          {/* Desktop navigation */}
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

          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile menu button - right side */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu - transparent backdrop with clear text */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 mt-16 backdrop-blur-sm bg-black/10">
            <div className="px-4 pt-5 pb-6 space-y-4 bg-white/95 rounded-lg mx-4 shadow-xl">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-900 hover:bg-gray-50/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/terms-conditions"
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-900 hover:bg-gray-50/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Terms and Conditions
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-900 hover:bg-gray-50/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
              
              <div className="pt-4 border-t border-gray-200/50 mt-4 space-y-3">
                <Link
                  to="#"
                  className="flex items-center justify-center px-3 py-3 rounded-lg text-lg font-medium text-gray-900 hover:bg-gray-50/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <Button className="w-full py-3 bg-[#ff6b1e] hover:bg-[#eb5d25] text-white rounded-lg text-lg font-medium">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}