import { Calendar, Sparkles, Zap, Mail } from "lucide-react";

const LaunchTimelineSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Intro */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-md">
              <Calendar className="w-4 h-4" />
              Coming Soon
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 px-2">
              Get ready for launch
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2">
              We're putting the finishing touches on UseWise. Join our waitlist
              now to get exclusive early access and a special discount when we
              launch.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto px-4">
            <div className="flex justify-between text-sm font-medium text-slate-600 mb-4">
              <span>Development</span>
              <span className="text-green-600">Beta Testing</span>
              <span>Public Launch</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 sm:h-4 shadow-inner relative">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 sm:h-4 rounded-full shadow-md transition-all duration-500 relative"
                style={{ width: "75%" }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-green-500 -mr-3 sm:-mr-4">
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 mt-4 font-medium">
              Currently: Beta testing with early users
            </p>
          </div>

          {/* Waitlist Benefits */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-16">
            {/* Early Access */}
            <div className="flex-1 p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl border border-blue-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                Early Access
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Be among the first to try UseWise before the public launch.
              </p>
            </div>

            {/* Launch Discount */}
            <div className="flex-1 p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl border border-green-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-lg">50%</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                Launch Discount
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Get 50% off your first year when you join from the waitlist.
              </p>
            </div>

            {/* VIP Updates */}
            <div className="flex-1 p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl border border-purple-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                VIP Updates
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Get exclusive behind-the-scenes updates and feature previews.
              </p>
            </div>
          </div>

          {/* Timeline Blocks */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
              Launch Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* Phase 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2" />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Phase 1: Beta (Current)
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Testing with early users and refining the experience.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Phase 2: Soft Launch
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Limited release to waitlist members with special pricing.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-slate-400 rounded-full mt-2" />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Phase 3: Public Launch
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Full public availability with regular pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchTimelineSection;
