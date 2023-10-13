import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, ANON_KEY } = process.env;

const supabase = createClient(SUPABASE_URL, ANON_KEY);
export default supabase;
