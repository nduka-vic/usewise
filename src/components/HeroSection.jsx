// src/components/HeroSection.jsx
import React from "react";
import { Button } from "./ui/button";
import { Camera, ArrowRight, Sparkles, Coffee, Projector } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 md:w-48 h-24 md:h-48 bg-blue-300/20 rounded-full blur-xl md:blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 md:w-32 h-16 md:h-32 bg-purple-300/15 rounded-full blur-lg md:blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl">
        <div>
          {/* 3D Icon Stack */}
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center rotate-12 hover:rotate-6 transition-transform duration-500">
                <Camera className="w-8 sm:w-10 md:w-16 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-blue-400/30 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <Coffee className="w-6 md:w-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 md:w-20 h-12 md:h-20 bg-purple-400/30 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center rotate-45 hover:rotate-12 transition-transform duration-500">
                <Projector className="w-5 md:w-10 text-white" />
              </div>
            </div>
          </div>

          {/* Pre-headline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            Never feel clueless again
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight text-white px-2">
            Ever stared at something and thought…
            <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              how the heck does this work?
            </span>
          </h1>

          {/* Subtext */}
          <div className="space-y-4 mb-10 max-w-4xl mx-auto px-2 text-blue-100">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              We've all been there. Standing in front of a fancy espresso
              machine at the office, a projector in a meeting room, or that
              label printer everyone else seems to know how to use.
            </p>
            <p className="text-sm sm:text-base font-semibold bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 text-white">
              What if you could just snap a photo and instantly know exactly
              what to do?
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <ScrollLink
              to="waitlist"
              smooth={true}
              duration={600}
              offset={-80} // Adjust if there's fixed header
            >
              <Button
                size="lg"
                className="px-6 py-3 font-semibold bg-blue-600 text-black shadow-xl rounded-xl"
                onClick={() => {
                  const formSection = document.getElementById("form-section");
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Camera className="w-5 h-5 mr-2" />
                Join Early Access
              </Button>
            </ScrollLink>

            <a
              href="https://forms.gle/jiX8Pg3dFEZ8u85CA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-3 font-semibold border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition rounded-xl"
              >
                Fill 2-min Survey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-blue-200">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="w-10 h-10 bg-white/10 text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white shadow-lg">
                +
              </div>
            </div>
            <span className="font-medium">Join 200+ early adopters</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
