import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lzkgfsrcayftrigbjfbx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6a2dmc3JjYXlmdHJpZ2JqZmJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1NjI0MTMsImV4cCI6MjAyNjEzODQxM30.MaCyAkXo7D5NxszN67QKuKFBuIJiogdvzb1Ddjh26l8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
