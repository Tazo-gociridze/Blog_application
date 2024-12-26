import { signup } from '@/supabase/auth'
import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query'
import { AUTH_MUTATION_KEYS } from '../enum'

export interface useSignUpMutationResponce {
  email: string
  password: string
}

export const useSignUpMutation = ({
  mutationOptions = {},
}: {
  mutationOptions: Omit<UseMutationOptions<useSignUpMutationResponce, any, any>, 'mutationKey'>
}): UseMutationResult<any, any, useSignUpMutationResponce> => {
  return useMutation<any, any, useSignUpMutationResponce>({
    mutationKey: [AUTH_MUTATION_KEYS.SIGN_UP],
    mutationFn: signup,
    ...mutationOptions,
  })
}
