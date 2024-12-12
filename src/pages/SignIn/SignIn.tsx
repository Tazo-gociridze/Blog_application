import { useForm, FormProvider } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../components/ui/input";
import { defaultStyles } from "@/data/defaultStyles/DefaultStyles";
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/supabase/auth'; 
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function SignIn() {
  const {t} = useTranslation()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [error, setError] = useState<string | null>(null);

  const { mutateAsync: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });

  const onSubmit = async (data: any) => {
    setError(null); 
    try {
      await handleLogin(data);
      reset();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="flex h-[100vh] items-center justify-center">
      <FormProvider {...useForm()}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] space-y-8 rounded-xl border-[1px] border-[#5f5a5a2c] p-[40px] shadow-xl">
          <div className="text-center">
            <h1 className="text-[25px] font-[700]">Sign in</h1>
            <p className="text-[14px] text-[#7c7878]">Login to your account</p>
          </div>

          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    {...register('email', {
                      required: t("email-required"),
                      pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                        message: t("email-pattern-message"),
                      },
                      minLength: { value: 15, message: t("email-min-length-message") },
                      maxLength: { value: 100, message: t("email-max-length-message") },
                    })}
                  />
                </FormControl>
                {errors.email && <FormMessage>{errors.email.message as string}</FormMessage>}
              </FormItem>
            )}
          />

          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    {...register('password', {
                      required: t("password-required"),
                      minLength: { value: 8, message: t("password-min-length-message") },
                      maxLength: { value: 25, message: t("password-max-length-message") },
                    })}
                  />
                </FormControl>
                {errors.password && <FormMessage>{errors.password.message as string}</FormMessage>}
              </FormItem>
            )}
          />

          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" className={`w-[100%] ${defaultStyles.button}`}>
            Submit
          </Button>

          <div className="flex justify-between">
            <span>dont have an account?</span>
            <Link className="text-[blue]" to="/signup">
              Sign up
            </Link>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}