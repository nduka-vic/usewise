// netlify/functions/join-waitlist.js

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

export const handler = async (event) => {
  try {
    const { email } = JSON.parse(event.body);

    const { data, error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to join waitlist" }),
      };
    }

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Joined waitlist successfully", data }),
    };
  } catch (err) {
    console.error("Function error:", err.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request" }),
    };
  }
};
