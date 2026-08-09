import { createClient } from "@supabase/supabase-js";

const Supabase_URL = process.env.NEXT_PUBLIC_DATABASE_URL!

const Supabase_Key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

export const supabase = createClient(
    Supabase_URL ,
    Supabase_Key
)