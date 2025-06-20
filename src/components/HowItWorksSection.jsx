import {
  Camera,
  Brain,
  BookOpen,
  Projector,
  Coffee,
  Printer,
  Router,
  Microwave,
  Gauge,
} from "lucide-react";

// How It Works Section Component
const HowItWorksSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Snap a photo",
      description:
        "Point your phone at any object you're unsure about. Our AI works with any angle, lighting, or environment.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Brain,
      title: "Recognize the object",
      description:
        "Advanced computer vision instantly identifies what you're looking at, from office equipment to kitchen appliances.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: BookOpen,
      title: "Get a short guide",
      description:
        "Receive step-by-step instructions in text or video format, tailored to that specific model and your situation.",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  const examples = [
    { icon: Projector, name: "Projectors", color: "text-blue-600" },
    { icon: Coffee, name: "Espresso machines", color: "text-amber-600" },
    { icon: Printer, name: "Label printers", color: "text-slate-600" },
    { icon: Router, name: "Network equipment", color: "text-green-600" },
    {
      icon: Microwave,
      name: "Industrial microwaves",
      color: "text-orange-600",
    },
    { icon: Gauge, name: "Smart thermostats", color: "text-purple-600" },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white shadow-lg text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-slate-900 px-2">
            How it works
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-medium px-2">
            Three simple steps to never feel confused again
          </p>
        </div>

        {/* Step-by-step */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 md:gap-12 mb-20 sm:mb-24 md:mb-32 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group flex-1">
              <div className="relative mb-6 sm:mb-8 md:mb-10">
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${step.gradient} rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center mx-auto group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110`}
                >
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-sm sm:text-lg font-bold text-slate-700 shadow-lg border-2 sm:border-4 border-slate-100">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg max-w-sm mx-auto px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supported Objects */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-900 px-2">
            Objects we can help you with
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-2">
            From office equipment to kitchen appliances, we've got you covered
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
            {examples.map((example, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group hover:scale-105"
              >
                <example.icon
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${example.color} mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  {example.name}
                </p>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm sm:text-base md:text-lg font-medium shadow-lg">
            <span>...and thousands more everyday objects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
