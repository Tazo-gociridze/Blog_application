import { z } from 'zod'

export const formSchema = z.object({
  username: z.string().min(1, {
    message: 'Username must be at least 1 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password must be at least 1 characters.',
  }),
})

export const onSubmit = (data: any) => {
  console.log(data)
}
