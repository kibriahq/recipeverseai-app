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

export const addFollow = async (followingId: string) => {
  const supabase = await createSupabaseServerClient();
  const { data, error: authError } = await supabase.auth.getUser();
  const followerId = data.user?.id;

  if (authError || !followerId) {
    throw new Error("You are not logged in!");
  }

  if (followerId === followingId) {
    throw new Error("You cannot follow yourself!");
  }

  const { error } = await supabase
    .from("user_follows")
    .insert({ follower_id: followerId, following_id: followingId });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};

export const getFollowers = async (userId: string) => {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("user_follows")
    .select("*")
    .eq("following_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getFollowing = async (userId: string) => {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("user_follows")
    .select("*")
    .eq("follower_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getRecipes = async (userId: string) => {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const isFollowingUser = async (followingId: string) => {
  const supabase = await createSupabaseServerClient();
  const { data, error: authError } = await supabase.auth.getUser();
  const followerId = data.user?.id;

  if (authError || !followerId) {
    return false;
  }

  const { data: follow, error } = await supabase
    .from("user_follows")
    .select("id")
    .eq("follower_id", followerId)
    .eq("following_id", followingId)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return Boolean(follow);
};

export const unFollow = async (followingId: string) => {
  const supabase = await createSupabaseServerClient();
  const { data, error: authError } = await supabase.auth.getUser();
  const followerId = data.user?.id;

  if (authError || !followerId) {
    throw new Error("You are not logged in!");
  }

  const { error } = await supabase
    .from("user_follows")
    .delete()
    .eq("follower_id", followerId)
    .eq("following_id", followingId);

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};
