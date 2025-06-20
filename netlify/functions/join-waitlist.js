import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const { error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  return res.status(200).json({ message: "Email submitted successfully" });
};
