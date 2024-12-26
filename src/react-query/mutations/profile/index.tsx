import { logout } from '@/supabase/auth'
import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query'
import { PROFILE_MUTATION_KEYS } from '../enum'

export const useLogoutMutation = ({
  mutationOptions = {},
}: {
  mutationOptions: Omit<UseMutationOptions<void, any, void>, 'mutationKey'>
}): UseMutationResult<void, any, void> => {
  return useMutation<any, any, void>({
    mutationKey: [PROFILE_MUTATION_KEYS.LOGOUT],
    mutationFn: logout,
    ...mutationOptions,
  })
}
