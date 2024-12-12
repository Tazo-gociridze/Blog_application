import { supabase } from "..";
import { FillProfileDataPayload } from "./index.types";

export const fillProfileData = (payload: FillProfileDataPayload) => {
  return supabase
    .from("profiles")
    .upsert(payload as any)
    .throwOnError();
};


export const getProfileData = (id: string | number) => {
    return supabase.from("profiles").select("*").eq("id", id)
  };