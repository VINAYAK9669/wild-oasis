import supabase from "./supabase";

/* eslint-disable no-unused-vars */
export default async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
}
