import { supabase } from '..'

export interface ProfileData {
  id: string
  full_name_en: string | null
  full_name_ka: string | null
  avatar_url: string | null
  phone_number: string | null
}

export const fillProfileData = (payload: ProfileData) => {
  console.log(payload)
  return supabase
    .from('profiles')
    .upsert(payload as any)
    .throwOnError()
}

export const getProfileData = async (
  id: string | number,
): Promise<{ data: ProfileData[] } | null> => {
  const { data: responseData, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', id)
    .single()
    .throwOnError()
  console.log(responseData)
  if (error) {
    console.error('Error fetching profile data:', error)
    return null
  }

  return { data: responseData as any }
}
