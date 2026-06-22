"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../supabase/server-client";

export const getByUsername = async (username: string) => {
  const supabase = await createSupabaseServerClient();
  const normalizedUsername = decodeURIComponent(username).replaceAll("@", "");

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", normalizedUsername)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const { data: recipes, error: recipesError } = await supabase
    .from("recipes")
    .select(`*,profiles (username,name,avatar)`)
    .eq("user_id", data.id)
    .order("created_at", { ascending: false });

  if (recipesError) {
    throw new Error(recipesError.message);
  }

  return { user: data, recipes };
};


export const getOwnProfile = async () => {
  const supabase = await createSupabaseServerClient();
  const { data: userData, error: authError } = await supabase.auth.getUser();
  const userId = userData?.user?.id;

  if (authError || !userId) {
    return redirect('/login');
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const { data: recipes, error: recipesError } = await supabase
    .from("recipes")
    .select(`*,profiles (username,name,avatar)`)
    .eq("user_id", data.id)
    .order("created_at", { ascending: false });

  if (recipesError) {
    throw new Error(recipesError.message);
  }

  return { user: data, recipes };
};