import { useAuthContext } from "@/contextApi/auth/hook/useAuthContext";
import { fillProfileData, getProfileData } from "@/supabase/account";
import { logout } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export interface ProfileState {
    full_name_en: string;
    full_name_ka: string;
    phone_number: string;
    avatar_url: string;
  }


export const inputStyles = "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500";
export const btnStyles = "focus:shadow-outline rounded-md] mt-4 w-full px-4 py-2 font-bold text-white focus:outline-none";

export const useProfileLogic = () => {
  const [profileData, setProfileData] = useState<ProfileState>({
    full_name_en: "",
    full_name_ka: "",
    phone_number: "",
    avatar_url: "",
  });
  const [updatedProfileData, setUpdatedProfileData] = useState({
    full_name_en: "",
    full_name_ka: "",
    phone_number: "",
    avatar_url: "",
  });
  const { user, handleStoreUser } = useAuthContext();

  const { full_name_en, full_name_ka, phone_number, avatar_url } = profileData;

  const { mutate: handleLogout, reset } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      handleStoreUser(null)
    }
  });

  const { mutate: handleFillProfileData } = useMutation({
    mutationKey: ["fill-profile-data"],
    //@ts-ignore
    mutationFn: fillProfileData,
  });

  const { mutate: handleGetProfileData} = useMutation({
    mutationKey: ["get-profile-data"],
    //@ts-ignore
    mutationFn: getProfileData,
    onSuccess(data) {
      //@ts-ignore
      setUpdatedProfileData(data?.data[0]);
    },
  });

const handleSubmitProfile = async () => {
  try {
    console.log("Submitting profile data:", profileData);
    await handleFillProfileData({ ...profileData, id: user.user.id });
    console.log("Profile data submitted successfully");
    await handleGetProfileData(user.user.id);
    console.log("Profile data fetched successfully");
    reset()
  } catch (error) {
    console.error("Error submitting profile data:", error);
  }
};

  return {
    setProfileData,
    profileData,
    updatedProfileData,
    handleSubmitProfile,
    handleLogout,
    full_name_en,
    full_name_ka,
    phone_number,
    avatar_url,
  };
};

export default useProfileLogic;
