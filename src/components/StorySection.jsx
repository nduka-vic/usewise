import React from "react";
import { Quote } from "lucide-react";

// Story Section Component
const StorySection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Story quote */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg"
              data-aos="fade-up"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              "I froze in a meeting room because I didn't know how to turn on
              the projector. Everyone was waiting, and I just stood there
              pretending to 'troubleshoot' while frantically pressing random
              buttons..."
            </blockquote>
          </div>

          {/* Divider */}
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-12 sm:mb-16 md:mb-20"></div>

          {/* Empathy statement */}
          <div className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20 md:mb-24 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              You're not alone.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              That awkward moment when everyone expects you to know something
              you don't. The embarrassment. The lost confidence. The wasted
              time.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 sm:px-8 sm:py-6 rounded-2xl sm:rounded-3xl inline-block shadow-2xl">
              <p className="text-base sm:text-lg md:text-xl font-bold">
                That's exactly why we're building UseWise.
              </p>
            </div>
          </div>

          {/* Stats cards - Mobile stack */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                73%
              </div>
              <p className="text-slate-600 font-medium text-sm sm:text-base md:text-lg">
                of people have felt confused by everyday objects
              </p>
            </div>
            <div className="text-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 flex-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-3 sm:mb-4">
                15min
              </div>
              <p className="text-slate-600 font-medium text-sm sm:text-base md:text-lg">
                average time spent figuring things out
              </p>
            </div>
            <div className="text-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 flex-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-3 sm:mb-4">
                ∞
              </div>
              <p className="text-slate-600 font-medium text-sm sm:text-base md:text-lg">
                times we've all been there
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
