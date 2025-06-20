import { useState } from "react";
import { Mail, Twitter, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from "../lib/supabaseClient";
import { useSelector, useDispatch } from "react-redux";
import { setSubmitted } from "../store/waitlistSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const submitted = useSelector((state) => state.waitlist.submitted);
  const [email, setEmail] = useState("");
  //   const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    const { error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      console.error("Submission error:", error.message);
      // You can show an error toast or message here
    } else {
      dispatch(setSubmitted());
      // Optional: show a success message or clear the input
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            UseWise
          </h3>
          <p className="text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Never feel clueless again. Snap a photo, get instant guidance.
          </p>

          {/* Waitlist Form */}
          {!submitted ? (
            <div className="max-w-2xl mx-auto px-4 mt-10 sm:mt-12">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 w-full px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg rounded-2xl border border-white/20 text-white bg-white/10 placeholder-white/60 shadow-inner focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                />
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="whitespace-nowrap px-6 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold bg-blue-600 text-slate-900 hover:bg-blue-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-10 sm:mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 max-w-md mx-auto mb-10">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                You're on the list!
              </h4>
              <p className="text-blue-100 text-sm sm:text-base">
                We’ll reach out with early access soon.
              </p>
            </div>
          )}
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

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-12 sm:mt-16 mb-6 sm:mb-8">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-white cursor-pointer transition-colors" />
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-6 sm:pt-8">
            <p className="text-slate-500 text-xs sm:text-sm">
              © 2025 UseWise. Join the waitlist for early access and exclusive
              discounts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
