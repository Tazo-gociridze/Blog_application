import { login } from '@/supabase/auth'
import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query'
import { AUTH_MUTATION_KEYS } from '../enum'

export interface useSignInMutationResponce {
  email: string
  password: string
}

export const useSignInMutation = ({
  mutationOptions = {},
}: {
  mutationOptions: Omit<UseMutationOptions<void, void, useSignInMutationResponce>, 'mutationKey'>
}): UseMutationResult<void, void, useSignInMutationResponce> => {
  return useMutation<any, void, useSignInMutationResponce>({
    mutationKey: [AUTH_MUTATION_KEYS.LOGIN],
    mutationFn: login,
    ...mutationOptions,
  })
}
