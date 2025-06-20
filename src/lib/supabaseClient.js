// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dkqxfylmpabsmmmoyuwj.supabase.co"; // ⬅️ replace this
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcXhmeWxtcGFic21tbW95dXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MjE1MDEsImV4cCI6MjA2NTk5NzUwMX0._GN_SNAN028a7mrnyxiRbFEHBxVxpLY6qxRH6Xm1eeQ"; // ⬅️ replace this

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
