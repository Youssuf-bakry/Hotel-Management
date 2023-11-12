import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://huyjzyxcvwntvkpvmiep.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1eWp6eXhjdndudHZrcHZtaWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxMjA0OTMsImV4cCI6MjAwODY5NjQ5M30.v5Wi415aiI8zFW5-xuQRRctGh2dWq5JdtmNFX_8RTr0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
