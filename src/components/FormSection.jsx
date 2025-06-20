import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { supabase } from "../lib/supabaseClient";
import { useSelector, useDispatch } from "react-redux";
import { setSubmitted } from "../store/waitlistSlice";

const FormSection = () => {
  const dispatch = useDispatch();
  const submitted = useSelector((state) => state.waitlist.submitted);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  //   const [submitted, setSubmitted] = useState(false);

  //   const handleSubmit = () => {
  //     if (email.trim()) {
  //       setSubmitted(true);
  //       // TODO: Replace with actual submission logic
  //     }
  //   };

  //   const handleSubmit = async () => {
  //     if (!email) return;

  //     const { error } = await supabase.from("waitlist").insert([{ email }]);
  //     console.log(error);
  //     error && setError(error);

  //     if (error) {
  //       console.error("Submission error:", error.message);
  //       // You can show an error toast or message here
  //     } else {
  //       console.log("setting submission");
  //       dispatch(setSubmitted());
  //       console.log("finsihed setting submission", submitted);
  //       // Optional: show a success message or clear the input
  //     }
  //   };

  const handleSubmit = async () => {
    if (!email) return;

    try {
      const response = await fetch("/.netlify/functions/join-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Server error:", result.message);
        // Optionally show error toast
        return;
      }

      dispatch(setSubmitted());
      // Optionally show success toast
    } catch (err) {
      console.error("Network error:", err.message);
      // Optionally show error toast
    }
  };

  return (
    <section
      id="waitlist"
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white px-2">
            Ready to never feel clueless again?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Join our waitlist to get early access and 50% off your first year
            when we launch.
          </p>

          {!submitted ? (
            <>
              {error && (
                <p className="text-base text-red-400">
                  Error submitting email. Ensure a unique email is inputed!
                </p>
              )}
              <div className="max-w-md mx-auto px-4">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg rounded-2xl border border-white/20 text-white bg-white/10 placeholder-white/60 shadow-inner focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                  />
                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    className="w-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold bg-blue-600 text-slate-900 hover:bg-blue-300 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 mx-4 shadow-xl max-w-md mx-auto">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                You're in!
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                We'll be in touch soon with early access.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;
