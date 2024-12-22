import { useAuthContext } from "@/contextApi/auth/hook/useAuthContext";
import { login } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";


const useSignInLogic = () => {
    const {t} = useTranslation()
    const { handleStoreUser } = useAuthContext()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [error, setError] = useState<string | null>(null);
  
    const { mutateAsync: handleLogin } = useMutation({
      mutationKey: ["login"],
      mutationFn: login,
      onSuccess: (data) => {
            handleStoreUser(data ? data?.data.user : null)
      }
    });
  
    
    const onSubmit = async (data: any) => {
      console.log(data)
      setError(null); 
      try {
        await handleLogin(data);
        reset();
      } catch (err: any) {
        setError(err.message);
      }
    };

    return {
        t,
        register,
        handleSubmit,
        errors,
        error,
        onSubmit
    }
};

export default useSignInLogic;
