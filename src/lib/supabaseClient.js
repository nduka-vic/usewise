// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://dkqxfylmpabsmmmoyuwj.supabase.co";
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcXhmeWxtcGFic21tbW95dXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MjE1MDEsImV4cCI6MjA2NTk5NzUwMX0._GN_SNAN028a7mrnyxiRbFEHBxVxpLY6qxRH6Xm1eeQ";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
