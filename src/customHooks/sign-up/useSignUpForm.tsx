import { formSchema, onSubmit } from "@/pages/SignUp/data/formSchema";
import { signup } from "@/supabase/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const useSignUpForm = () => {
    const { t } = useTranslation();
    const [registerPayload, setRegisterPayload] = useState({
      email: "",
      password: "",
    });
  
    const { mutate } = useMutation({
      mutationKey: ["register"],
      mutationFn: signup,
    });
  
    const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!!registerPayload.email && !!registerPayload.password) {
        mutate(registerPayload);
        form.handleSubmit(onSubmit);
      }
    };
  
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
    });

  return {
     t,
     registerPayload,
     setRegisterPayload,
     mutate,
     handleSubmitRegister,
     form,
  }
};

export default useSignUpForm;
