"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from '../../assets/landing/logo.png'
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-white to-white/80 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img
          src={logo}
          />
          
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

      
        {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex justify-end">
          <div className="w-full max-w-sm bg-white h-full shadow-xl flex flex-col">
            <div className="p-4 flex justify-end">
              <button type="button" className="p-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col px-6 py-6 space-y-8">
              <div className="flex flex-col space-y-6">
                <Link to="/" className="text-2xl font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link
                  to="/terms-conditions"
                  className="text-2xl font-medium text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Terms and Conditions
                </Link>
                <Link
                  to="/contact"
                  className="text-2xl font-medium text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-auto space-y-4">
                <Link
                  to="#"
                  className="flex items-center justify-center w-full py-3 px-4 border border-[#ff6b1e] text-[#ff6b1e] rounded-md text-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Button
                  className="w-full py-6 bg-[#ff6b1e] hover:bg-[#eb5d25] text-white rounded-md text-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}