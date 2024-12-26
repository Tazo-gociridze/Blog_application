import { useAuthContext } from '@/contextApi/auth/hook/useAuthContext'
import { supabase } from '@/supabase'
import { useEffect } from 'react'

const useAppLogic = () => {
  const { handleStoreUser } = useAuthContext()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        handleStoreUser(session)
      }
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        handleStoreUser(session)
      }
    })

    return () => subscription.unsubscribe()
  }, [])
}

export default useAppLogic
