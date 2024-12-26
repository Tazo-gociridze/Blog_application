import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '../../components/ui/input'
import { defaultStyles } from '@/data/defaultStyles/DefaultStyles'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { signup } from '@/supabase/auth'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSignInMutation } from '@/react-query/mutations/signin'

export default function SignUpForm() {
  const { t } = useTranslation()
  const methods = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods
  const [error, setError] = useState<string | null>(null)

  const { mutateAsync: handleSignUp } = useSignInMutation({ mutationOptions: {} })

  const onSubmit = async (data: any) => {
    setError(null)

    try {
      if (data.password !== data.repeatPassword) {
        throw new Error('Passwords do not match')
      }
      await handleSignUp(data)
      reset()
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <section className='flex h-[100vh] items-center justify-center'>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-[500px] space-y-8 rounded-xl border-[1px] border-[#5f5a5a1a] p-[40px] shadow-xl'
        >
          <FormField
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='Name'
                    {...field}
                    {...register('username', { required: t('name-required') })}
                  />
                </FormControl>
                {errors.username && <FormMessage>{errors.username.message as string}</FormMessage>}
              </FormItem>
            )}
          />

          <FormField
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='Email'
                    {...field}
                    {...register('email', {
                      required: t('email-required'),
                      pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                        message: t('email-pattern-message'),
                      },
                      minLength: { value: 15, message: t('email-min-length-message') },
                      maxLength: { value: 100, message: t('email-max-length-message') },
                    })}
                  />
                </FormControl>
                {errors.email && <FormMessage>{errors.email.message as string}</FormMessage>}
              </FormItem>
            )}
          />

          <FormField
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Password'
                    {...field}
                    {...register('password', {
                      required: t('password-required'),
                      minLength: { value: 8, message: t('password-min-length-message') },
                      maxLength: { value: 25, message: t('password-max-length-message') },
                    })}
                  />
                </FormControl>
                {errors.password && <FormMessage>{errors.password.message as string}</FormMessage>}
              </FormItem>
            )}
          />

          <FormField
            name='repeatPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repeat Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Repeat password'
                    {...field}
                    {...register('repeatPassword', {
                      required: t('password-required'),
                      minLength: { value: 8, message: t('password-min-length-message') },
                      maxLength: { value: 25, message: t('password-max-length-message') },
                    })}
                  />
                </FormControl>
                {errors.repeatPassword && (
                  <FormMessage>{errors.repeatPassword.message as string}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <div className='flex justify-between'>
            <span>Already have an account?</span>
            <Link className='text-[blue]' to='/auth/signin'>
              Sign in
            </Link>
          </div>

          {error && <p className='text-red-500'>{error}</p>}
          <Button type='submit' className={`w-[100%] ${defaultStyles.button}`}>
            Sign Up
          </Button>
        </form>
      </FormProvider>
    </section>
  )
}
