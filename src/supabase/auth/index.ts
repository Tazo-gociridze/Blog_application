import { supabase } from '..'

export const signup = ({ email, password }: { email: string; password: string }) => {
  return supabase.auth.signUp({ email, password })
}

export const login = ({ email, password }: { email: string; password: string }) => {
  return supabase.auth.signInWithPassword({ email, password })
}
export const logout = () => {
  return supabase.auth.signOut()
}
