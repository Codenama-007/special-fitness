"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export async function registerlead(
  fullname: string,
  email: string,
  phone: string
) {
  const { data, error } = await supabase
    .from("leads")
    .insert({
      name: fullname,
      email: email,
      phone_no: phone,
    })
    .select()
    .single();

  if (error) {
    console.log("Supabase Error:", error);

    // Duplicate email OR phone number
    if (error.code === "23505") {
      return {
        success: false,
        alreadyRegistered: true,
        message: "You're already registered!",
      };
    }

    return {
      success: false,
      alreadyRegistered: false,
      message: "Something went wrong. Please try again.",
    };
  }

  return {
    success: true,
    alreadyRegistered: false,
    message: "Registration successful!",
    data,
  };
}